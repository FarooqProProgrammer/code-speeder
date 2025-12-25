"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function OTPVerificationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email") || "your email";
  const purpose = searchParams.get("purpose") || "verification"; // 'verification', 'reset', or 'login'
  
  const [otp, setOtp] = React.useState<string[]>(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isResending, setIsResending] = React.useState(false);
  const [error, setError] = React.useState("");
  const [timeLeft, setTimeLeft] = React.useState(60);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer
  React.useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Focus first input on mount
  React.useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    
    if (pastedData.some(char => !/^\d$/.test(char))) {
      setError("Please paste only numbers");
      return;
    }

    const newOtp = [...otp];
    pastedData.forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    // Focus last filled input or next empty input
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    setIsLoading(true);
    setError("");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("OTP verification:", otpValue, "Purpose:", purpose);

    // Simulate validation
    if (otpValue === "123456") {
      setError("Invalid verification code");
      setIsLoading(false);
      return;
    }

    // Redirect based on purpose
    if (purpose === "reset") {
      router.push("/reset-password?token=sample-token");
    } else {
      router.push("/dashboard");
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    setError("");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Resending OTP to:", email);
    setTimeLeft(60);
    setIsResending(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center min-h-screen  font-sans bg-[#f5f5dc] bg-[radial-gradient(#707070_1px,transparent_1px)] bg-[length:20px_20px] dark:bg-[#2d2d2d] dark:bg-[radial-gradient(#a0a0a0_1px,transparent_1px)] p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* OTP Verification Card */}
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
            Verify Your Email
          </CardTitle>
          <CardDescription className="text-base">
            We've sent a 6-digit code to <br />
            <strong className="text-foreground">{email}</strong>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Input Fields */}
            <div className="space-y-2">
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={cn(
                      "w-12 h-14 text-center text-2xl font-semibold rounded-lg border bg-background transition-all",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                      "hover:border-primary/50",
                      error ? "border-destructive" : "border-input",
                      digit && "border-primary"
                    )}
                    aria-label={`Digit ${index + 1}`}
                  />
                ))}
              </div>
              {error && (
                <p className="text-xs text-destructive text-center">{error}</p>
              )}
            </div>

            {/* Timer and Resend */}
            <div className="text-center space-y-2">
              {timeLeft > 0 ? (
                <p className="text-sm text-muted-foreground">
                  Code expires in{" "}
                  <span className="font-semibold text-foreground">
                    {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                  </span>
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Didn't receive the code?
                </p>
              )}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleResend}
                disabled={timeLeft > 0 || isResending}
                className="text-primary hover:text-primary/90"
              >
                {isResending ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
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
                    Sending...
                  </>
                ) : (
                  "Resend Code"
                )}
              </Button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              disabled={isLoading || otp.some(d => !d)}
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
                  Verifying...
                </>
              ) : (
                "Verify Email"
              )}
            </Button>
          </form>

          {/* Help Text */}
          <div className="mt-6 rounded-lg bg-muted/50 p-3 text-center">
            <p className="text-xs text-muted-foreground">
              Check your spam folder if you don't see the email
            </p>
          </div>
        </CardContent>

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
