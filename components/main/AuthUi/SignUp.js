import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

const signupFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  username: z.string().nonempty("Username is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  confirmPassword: z.string().nonempty("Confirm Password is required"),
});

const Signup = () => {
  const {
    control: signupControl,
    handleSubmit: signupHandleSubmit,
    formState: signupFormState,
    setError: signupSetError,
  } = useForm({ resolver: zodResolver(signupFormSchema) });

  const handleSignupSubmit = (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        signupSetError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        return;
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={signupHandleSubmit(handleSignupSubmit)} className="">
      <div className="message mb-5">
        <div className="text-white font-bold">Create a new account</div>
        <p className="text-sm font-normal text-gray-400 mt-3">
          Continue where you left off by logging in, we keep track of your every
          progress.
        </p>
      </div>
      <div className="mb-5 mt-6">
        <Label
          htmlFor="name"
          className="block text-white text-sm mb-2 capitalize"
        >
          Legal Full Name
        </Label>
        <Controller
          name="name"
          control={signupControl}
          render={({ field, fieldState }) => (
            <>
              <Input
                type="text"
                id="name"
                placeholder="John Doe"
                error={fieldState.error?.message}
                className="w-full px-4 py-3 bg-gray-800 text-white capitalize rounded-lg text-sm border-none"
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
        <Label htmlFor="email" className="block text-white text-sm mb-2">
          Email
        </Label>
        <Controller
          name="email"
          control={signupControl}
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
        <Label htmlFor="username" className="block text-white text-sm mb-2">
          Username
        </Label>
        <Controller
          name="username"
          control={signupControl}
          render={({ field, fieldState }) => (
            <>
              <Input
                type="text"
                id="username"
                placeholder="johndoe345"
                error={fieldState.error?.message}
                className="w-full px-4 py-3 bg-gray-800 text-white text-sm rounded-lg border-none"
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
        <Label htmlFor="password" className="block text-white text-sm mb-2">
          Password
        </Label>
        <Controller
          name="password"
          control={signupControl}
          render={({ field, fieldState }) => (
            <>
              <Input
                type="password"
                id="password"
                placeholder="Create a password"
                error={fieldState.error?.message}
                className="w-full px-4 py-3 bg-gray-800 text-white text-sm rounded-lg border-none"
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
        <Label
          htmlFor="confirmPassword"
          className="block text-white text-sm mb-2"
        >
          Confirm Password
        </Label>
        <Controller
          name="confirmPassword"
          control={signupControl}
          render={({ field, fieldState }) => (
            <>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                error={fieldState.error?.message}
                className="w-full px-4 py-3 bg-gray-800 text-white text-sm rounded-lg border-none"
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
      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg"
      >
        Sign Up
      </Button>
    </form>
  );
};

export default Signup;
