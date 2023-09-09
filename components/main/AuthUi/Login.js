"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InfinitySpin } from "react-loader-spinner";
import { z } from "zod";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import VerificationPage from "./VerificationPagetwo";
import { useTheme } from "../../../contexts/themeContext";
import { useFormContext } from "../../../contexts/formContext";

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
  const [cookieVar, setCookieVar] = useState(null);
  const [cookieVar1, setCookieVar1] = useState(null);
  const [cookieVar2, setCookieVar2] = useState(null);
  const { showVerificationPage, setShowVerificationPage } = useFormContext();
  const { formDatas, setFormDatas } = useFormContext();
  const [isLoading, setIsLoading] = useState(false); // Add this line
  const { isDarkMode, baseColor } = useTheme();

  const {
    setValue,
    control: loginControl,
    handleSubmit: loginHandleSubmit,
    setError, // Don't forget to destructure setError
    formState: loginFormState,
  } = useForm({ mode: "onChange", resolver: zodResolver(loginFormSchema) });

  const handleLoginSubmit = async (data) => {
    setFormDatas(data);
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
  useEffect(() => {
    setValue("email", formDatas.email);
    setValue("password", formDatas.password);
  }, [formDatas, setValue]);
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
            <div className=" font-bold">
              <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent font-black">
                Sign-In
              </span>{" "}
              to your account
            </div>
            <p
              className={`text-sm font-normal  mt-3 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Continue where you left off by logging in, we keep{" "}
              <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent font-black">
                track
              </span>{" "}
              of your every progress.
            </p>
          </div>
          <div className=" mt-6 mb-2">
            <Label htmlFor="email" className="block  font-bold text-sm mb-2">
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
                    value={formDatas.email}
                    onChange={(event) => {
                      setFormDatas({
                        ...formDatas,
                        email: event.target.value,
                      });
                    }}
                    placeholder="johndoe@example.com"
                    error={fieldState.error?.message}
                    className={`w-full px-4 py-1 bg-gra-50 ${
                      isDarkMode
                        ? "bg-[#111111] text-gray-200 border-none"
                        : "border text-black"
                    }  h-11 focus:border-none transition-all rounded-lg text-sm`}
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
            <Label htmlFor="password" className="block  font-bold text-sm mb-2">
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
                    value={formDatas.password} // Set the value from formData
                    onChange={(event) => {
                      // Update the formData when the input changes
                      setFormDatas({
                        ...formDatas,
                        password: event.target.value,
                      });
                    }}
                    placeholder="Enter your password"
                    error={fieldState.error?.message}
                    className={`w-full px-4 py-1 bg-gra-50 ${
                      isDarkMode
                        ? "bg-[#111111] text-gray-200 border-none"
                        : "border text-black"
                    }  h-11 focus:border-none transition-all rounded-lg text-sm`}
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
          {/* <div className="flex justify-end w-full text-right items-center mb-5 text-xs">
            <a
              href="/forgot-password"
              className="text-green-500 font-bold text-sm underline"
            >
              Forgot Password?
            </a>
          </div> */}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 font-bold mt-5 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 text-white py-3 px-4 rounded-lg"
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
