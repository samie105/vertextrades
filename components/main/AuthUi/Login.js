"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InfinitySpin } from "react-loader-spinner";
import { z } from "zod";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import VerificationPage from "./VerificationPagetwo";

const loginFormSchema = z.object({
  email: z
    .string()
    .email("Not a valid email")
    .nonempty("Please provide an email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("No! you need a password"),
});

const Login = () => {
  const [formDatas, setFormData] = useState(null);
  const [cookieVar, setCookieVar] = useState(null);
  const [cookieVar1, setCookieVar1] = useState(null);
  const [cookieVar2, setCookieVar2] = useState(null);
  const [showVerificationPage, setShowVerificationPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add this line
  const {
    control: loginControl,
    handleSubmit: loginHandleSubmit,
    setError, // Don't forget to destructure setError
    formState: loginFormState,
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const handleLoginSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch("/login/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setIsLoading(false);

      if (response.status === 200) {
        // Set the authentication token as a cookie
        setCookieVar(result.token);
        setCookieVar1(result.email);
        setCookieVar2(result.role);
        localStorage.setItem("email", result.email);
        setFormData(data);
        setShowVerificationPage(true);
      } else {
        setError("password", {
          type: "manual",
          message: result.message || "An error occurred",
        });
      }
    } catch (error) {
      setIsLoading(false);
      setError("password", {
        type: "manual",
        message: "An error occurred",
      });
      console.error(error);
    }
  };

  return (
    <>
      {showVerificationPage ? (
        <VerificationPage
          formDatas={formDatas}
          cookieVar={cookieVar}
          cookieVar1={cookieVar1}
          cookieVar2={cookieVar2}
          setError={setError}
        />
      ) : (
        <form onSubmit={loginHandleSubmit(handleLoginSubmit)} className="">
          <div className="message mb-5">
            <div className="text-black font-bold">Sign-In to your account</div>
            <p className="text-sm font-normal text-gray-800 mt-3">
              Continue where you left off by logging in, we keep track of your
              every progress.
            </p>
          </div>
          <div className=" mt-6 mb-2">
            <Label
              htmlFor="email"
              className="block text-black font-bold text-sm mb-2"
            >
              Email
            </Label>
            <Controller
              name="email"
              control={loginControl}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    type="email"
                    id="email"
                    placeholder="johndoe@example.com"
                    error={fieldState.error?.message}
                    className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg text-sm border-none"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-sm text-red-500 my-1 font-semibold">
                      {fieldState.error?.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="mb-2">
            <Label
              htmlFor="password"
              className="block text-black font-bold text-sm mb-2"
            >
              Password
            </Label>
            <Controller
              name="password"
              control={loginControl}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    error={fieldState.error?.message}
                    className="w-full px-4 py-1 bg-gray-100 lowercase text-black rounded-lg text-sm border-none"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-sm text-red-500 my-1 font-semibold">
                      {fieldState.error?.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex justify-end w-full text-right items-center mb-5 text-xs">
            <a
              href="/forgot-password"
              className="text-green-500 font-bold text-sm underline"
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-800 disabled:bg-green-800 hover:bg-green-700 text-white py-3 px-4 rounded-lg"
          >
            {isLoading ? (
              <InfinitySpin width="100" color="#ffffff" />
            ) : (
              "Log In"
            )}
          </Button>
        </form>
      )}
    </>
  );
};

export default Login;
