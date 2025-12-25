"use server";

import bcrypt from "bcryptjs";
import { PrismaClient } from "@/generated/prisma";
import { signIn } from "@/lib/auth";

const prisma = new PrismaClient();

export async function signup(formData: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    // Validate input
    if (!formData.name || !formData.email || !formData.password) {
      return { error: "All fields are required" };
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: formData.email },
    });

    if (existingUser) {
      return { error: "User with this email already exists" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(formData.password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: formData.name,
        email: formData.email,
        password: hashedPassword,
        emailVerified: null, // Will be verified via OTP
      },
    });

    // Generate OTP for email verification
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await prisma.otp.create({
      data: {
        otpCode,
        email: user.email,
        purpose: "verification",
        expiresAt,
        userId: user.id,
      },
    });

    // TODO: Send OTP via email
    console.log(`Verification OTP for ${user.email}: ${otpCode}`);

    return {
      success: true,
      message: "Account created successfully. Please verify your email.",
      email: user.email,
    };
  } catch (error) {
    console.error("Signup error:", error);
    return { error: "Failed to create account. Please try again." };
  }
}

export async function requestPasswordReset(email: string) {
  try {
    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Don't reveal if user exists
      return {
        success: true,
        message: "If an account exists, you will receive a password reset link.",
      };
    }

    // Delete old OTPs for this email
    await prisma.otp.deleteMany({
      where: {
        email,
        purpose: "reset",
      },
    });

    // Generate OTP for password reset
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await prisma.otp.create({
      data: {
        otpCode,
        email: user.email,
        purpose: "reset",
        expiresAt,
        userId: user.id,
      },
    });

    // TODO: Send OTP via email
    console.log(`Password reset OTP for ${user.email}: ${otpCode}`);

    return {
      success: true,
      message: "Password reset instructions have been sent to your email.",
    };
  } catch (error) {
    console.error("Password reset request error:", error);
    return { error: "Failed to process request. Please try again." };
  }
}

export async function verifyOTP(data: {
  email: string;
  otpCode: string;
  purpose: string;
}) {
  try {
    // Find valid OTP
    const otp = await prisma.otp.findFirst({
      where: {
        email: data.email,
        otpCode: data.otpCode,
        purpose: data.purpose,
        expiresAt: {
          gte: new Date(),
        },
      },
      include: {
        user: true,
      },
    });

    if (!otp) {
      return { error: "Invalid or expired verification code" };
    }

    // Delete used OTP
    await prisma.otp.delete({
      where: { id: otp.id },
    });

    // If verification purpose, mark email as verified
    if (data.purpose === "verification" && otp.user) {
      await prisma.user.update({
        where: { id: otp.user.id },
        data: { emailVerified: new Date() },
      });
    }

    return {
      success: true,
      message: "Verification successful",
      userId: otp.user?.id,
    };
  } catch (error) {
    console.error("OTP verification error:", error);
    return { error: "Failed to verify code. Please try again." };
  }
}

export async function resetPassword(data: {
  email: string;
  otpCode: string;
  newPassword: string;
}) {
  try {
    // Verify OTP first
    const verification = await verifyOTP({
      email: data.email,
      otpCode: data.otpCode,
      purpose: "reset",
    });

    if (!verification.success) {
      return verification;
    }

    // Find user and update password
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      return { error: "User not found" };
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(data.newPassword, 12);

    // Update password
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    return {
      success: true,
      message: "Password has been reset successfully",
    };
  } catch (error) {
    console.error("Password reset error:", error);
    return { error: "Failed to reset password. Please try again." };
  }
}

export async function resendOTP(data: { email: string; purpose: string }) {
  try {
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      return { error: "User not found" };
    }

    // Delete old OTPs
    await prisma.otp.deleteMany({
      where: {
        email: data.email,
        purpose: data.purpose,
      },
    });

    // Generate new OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await prisma.otp.create({
      data: {
        otpCode,
        email: user.email,
        purpose: data.purpose,
        expiresAt,
        userId: user.id,
      },
    });

    // TODO: Send OTP via email
    console.log(`New OTP for ${user.email} (${data.purpose}): ${otpCode}`);

    return {
      success: true,
      message: "A new verification code has been sent to your email.",
    };
  } catch (error) {
    console.error("Resend OTP error:", error);
    return { error: "Failed to resend code. Please try again." };
  }
}
