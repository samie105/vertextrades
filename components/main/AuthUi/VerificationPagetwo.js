/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { InfinitySpin } from "react-loader-spinner";
import { Label } from "../../ui/label";

export default function VerificationPage({ formDatas }) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(120);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const sendInitialCode = async () => {
      try {
        const response = await fetch("/verifyemail/sendcode/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formDatas.email }),
        });

        if (response.status !== 200) {
          // Handle error (optional)
          console.error("Failed to send initial code");
        }
      } catch (error) {
        console.error(error);
      }
    };

    sendInitialCode();
  }, []);
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

  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/verifyemail/sendcode/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formDatas.email }),
      });

      if (response.status === 200) {
        setCountdown(120);
        setIsResendDisabled(true);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleVerifyCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/verifyemail/verifycode/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formDatas.email,
          code: verificationCode,
        }),
      });

      if (response.status === 200) {
        // Handle successful verification
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

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
      <div className="message text-sm mb-8 text-gray-900">
        We sent a 6 digit verification code to{" "}
        <strong className="font-bold">{formDatas.email}</strong>. Please check
        your mailbox or check your provided email address for mistakes or errors
      </div>
      <div>
        <Label
          htmlFor="verificationCode"
          className="block text-black font-bold text-sm mb-2"
        >
          Enter Verification Code
        </Label>
        <Input
          type="text"
          id="verificationCode"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          placeholder="Enter the code sent to your email"
          className="w-full px-4 py-4 bg-gray-200 text-black text-sm rounded-lg border-none"
        />
        <Button
          type="button"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-4 rounded-lg mt-4"
          onClick={handleVerifyCode}
          disabled={isLoading}
        >
          {isLoading ? (
            <InfinitySpin width="100" color="#ffffff" />
          ) : (
            "Verify code"
          )}
        </Button>
        <Button
          type="button"
          className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg mt-2"
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
