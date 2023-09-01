/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { InfinitySpin } from "react-loader-spinner"; // Make sure to import the loader
import { setCookie } from "nookies";

export default function VerificationPage({
  Label,
  Input,
  Button,
  formData,
  cookieVar,
  cookieVar1,
  cookieVar2,
}) {
  const [countdown, setCountdown] = useState(120);
  const [error, setError] = useState("");
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isInitialSend, setIsInitialSend] = useState(true);
  const router = useRouter();

  const sendCode = async () => {
    if (!isInitialSend) {
      setIsLoading(true);
    }
    try {
      await fetch("/verifyemail/sendcode/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });
    } catch (error) {
      console.error(error);
    }
    if (!isInitialSend) {
      setIsLoading(false);
    }
    setIsInitialSend(false); // Set to false after the first send
  };

  const handleVerifyCode = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch("/verifyemail/verifycode/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, code: verificationCode }),
      });
      const result = await response.json();

      if (result.success) {
        // Handle successful verification
        setCookie(null, "token", cookieVar, {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production", // Use 'secure' in production
          path: "/", // Adjust the path if needed
          maxAge: 60 * 60 * 24 * 5, // Token expires in 3 days
        });
        setCookie(null, "email", cookieVar1, {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production", // Use 'secure' in production
          path: "/", // Adjust the path if needed
          maxAge: 60 * 60 * 24 * 5, // Token expires in 3 days
        });
        setCookie(null, "role", cookieVar2, {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production", // Use 'secure' in production
          path: "/", // Adjust the path if needed
          maxAge: 60 * 60 * 24 * 5, // Token expires in 3 days
        });
        router.push("/dashboard");
      } else {
        // Handle failed verification
        setError("Please check code and try again");
      }
    } catch (error) {
      console.error("verification error");
    }
    setIsLoading(false);
  };

  const handleResendCode = async () => {
    setError("");
    await sendCode();
    setCountdown(120);
    setIsResendDisabled(true);
  };

  useEffect(() => {
    if (isResendDisabled && countdown > 0) {
      const timerId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }

    if (countdown === 0) {
      setIsResendDisabled(false);
    }
  }, [isResendDisabled, countdown]);

  useEffect(() => {
    sendCode();
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <div className="message  add text-sm mb-8 text-gray-800">
        We sent a 6 digit verification code to{" "}
        <strong className="font-bold">{formData.email}</strong>. Please check
        your mailbox or check your provided email address for mistakes or errors
      </div>
      <div>
        <Label
          htmlFor="verificationCode"
          className="block text-white text-sm mb-2"
        >
          Enter Verification Code
        </Label>
        <Input
          type="text"
          id="verificationCode"
          placeholder="Enter the code sent to your email"
          className="w-full px-4 py-4 bg-gray-200 text-black text-sm rounded-lg border-none"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        {error && <div className="text-sm mt-2 text-red-600">{error}</div>}

        <Button
          type="button"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-5 px-4 rounded-lg mt-4"
          onClick={handleVerifyCode}
          disabled={isLoading}
        >
          {isLoading ? <InfinitySpin width="100" color="#ffffff" /> : "Verify"}
        </Button>
        <Button
          type="button"
          className="w-full bg-gray-600 text-white py-4 px-4 rounded-lg mt-2"
          onClick={handleResendCode}
          disabled={isResendDisabled || isLoading}
        >
          {isResendDisabled
            ? `Resend Code (${formatTime(countdown)})`
            : "Resend Code"}
        </Button>
      </div>
    </>
  );
}
