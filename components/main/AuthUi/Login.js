"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
  const [showVerificationPage, setShowVerificationPage] = useState(false);
  const {
    control: loginControl,
    handleSubmit: loginHandleSubmit,
    formState: loginFormState,
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const handleLoginSubmit = (data) => {
    try {
      setFormData(data); // Store the form data in the state
      setShowVerificationPage(true); // Show the verification page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {showVerificationPage ? (
        <VerificationPage formDatas={formDatas} />
      ) : (
        <form onSubmit={loginHandleSubmit(handleLoginSubmit)} className="">
          <div className="message mb-5">
            <div className="text-white font-bold">Sign-In to your account</div>
            <p className="text-sm font-normal text-gray-400 mt-3">
              Continue where you left off by logging in, we keep track of your
              every progress.
            </p>
          </div>
          <div className="mb-5 mt-6">
            <Label htmlFor="email" className="block text-white text-sm mb-2">
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
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg text-sm border-none"
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
          <div className="mb-5">
            <Label htmlFor="password" className="block text-white text-sm ">
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
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg text-sm border-none"
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
          <div className="flex justify-end w-full text-right items-center mb-5 text-sm">
            <a
              href="/forgot-password"
              className="text-green-500 font-bold text-sm underline"
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg"
          >
            Log In
          </Button>
        </form>
      )}
    </>
  );
};

export default Login;
