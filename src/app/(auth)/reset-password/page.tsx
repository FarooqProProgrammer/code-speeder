"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [passwordStrength, setPasswordStrength] = React.useState(0);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Calculate password strength
  React.useEffect(() => {
    if (!password) {
      setPasswordStrength(0);
      return;
    }
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    setPasswordStrength(Math.min(strength, 4));
  }, [password]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      newErrors.password = "Password must contain uppercase and lowercase letters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Password reset with token:", token);
    setIsSuccess(true);
    setIsLoading(false);
  };

  // Check if token is missing
  if (!token) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
        <Card className="w-full max-w-md relative z-10 shadow-2xl border-border/50 backdrop-blur-sm bg-card/95">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-destructive">Invalid Reset Link</CardTitle>
            <CardDescription>
              This password reset link is invalid or has expired
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/forgot-password">Request New Link</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center min-h-screen  font-sans bg-[#f5f5dc] bg-[radial-gradient(#707070_1px,transparent_1px)] bg-[length:20px_20px] dark:bg-[#2d2d2d] dark:bg-[radial-gradient(#a0a0a0_1px,transparent_1px)] p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Reset Password Card */}
      <Card className="w-full max-w-md relative z-10 shadow-2xl border-border/50 backdrop-blur-sm bg-card/95">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {isSuccess ? "Password Reset!" : "Reset Password"}
          </CardTitle>
          <CardDescription className="text-base">
            {isSuccess
              ? "Your password has been successfully reset"
              : "Enter your new password below"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* New Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  New Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: "" });
                  }}
                  required
                  className={cn("h-11", errors.password && "border-destructive")}
                  autoComplete="new-password"
                  autoFocus
                />
                {errors.password && (
                  <p className="text-xs text-destructive">{errors.password}</p>
                )}

                {/* Password Strength Indicator */}
                {password && (
                  <div className="space-y-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={cn(
                            "h-1 flex-1 rounded-full transition-colors",
                            passwordStrength >= level
                              ? passwordStrength === 1
                                ? "bg-red-500"
                                : passwordStrength === 2
                                ? "bg-orange-500"
                                : passwordStrength === 3
                                ? "bg-yellow-500"
                                : "bg-green-500"
                              : "bg-muted"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {passwordStrength === 0 && "Enter a password"}
                      {passwordStrength === 1 && "Weak password"}
                      {passwordStrength === 2 && "Fair password"}
                      {passwordStrength === 3 && "Good password"}
                      {passwordStrength === 4 && "Strong password"}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm New Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrors({ ...errors, confirmPassword: "" });
                  }}
                  required
                  className={cn("h-11", errors.confirmPassword && "border-destructive")}
                  autoComplete="new-password"
                />
                {errors.confirmPassword && (
                  <p className="text-xs text-destructive">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Password Requirements */}
              <div className="rounded-lg bg-muted/50 p-3 space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Password must contain:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <div className={cn(
                      "w-4 h-4 rounded-full flex items-center justify-center",
                      password.length >= 8 ? "bg-green-500/20" : "bg-muted"
                    )}>
                      {password.length >= 8 && (
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    At least 8 characters
                  </li>
                  <li className="flex items-center gap-2">
                    <div className={cn(
                      "w-4 h-4 rounded-full flex items-center justify-center",
                      /(?=.*[a-z])(?=.*[A-Z])/.test(password) ? "bg-green-500/20" : "bg-muted"
                    )}>
                      {/(?=.*[a-z])(?=.*[A-Z])/.test(password) && (
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    Uppercase and lowercase letters
                  </li>
                  <li className="flex items-center gap-2">
                    <div className={cn(
                      "w-4 h-4 rounded-full flex items-center justify-center",
                      /[0-9]/.test(password) ? "bg-green-500/20" : "bg-muted"
                    )}>
                      {/[0-9]/.test(password) && (
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    At least one number
                  </li>
                </ul>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-11 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Resetting...
                  </>
                ) : (
                  "Reset Password"
                )}
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              {/* Success State */}
              <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-center space-y-3">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    Password Successfully Reset
                  </p>
                  <p className="text-xs text-muted-foreground">
                    You can now sign in with your new password
                  </p>
                </div>
              </div>

              {/* Sign In Button */}
              <Button
                asChild
                className="w-full h-11 text-base font-semibold"
              >
                <Link href="/login">Continue to Sign In</Link>
              </Button>
            </div>
          )}
        </CardContent>

        {!isSuccess && (
          <CardFooter className="flex flex-col space-y-4">
            <Separator />
            <div className="text-sm text-center text-muted-foreground">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Sign In
              </Link>
            </div>
          </CardFooter>
        )}
      </Card>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-muted-foreground">
        <p>
          © 2025 Code Speeder. All rights reserved. •{" "}
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>{" "}
          •{" "}
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
        </p>
      </div>
    </div>
  );
}
