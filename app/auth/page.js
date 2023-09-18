"use client";
import React from "react";
import { useTheme } from "../../contexts/themeContext";
import Auth from "../../components/main/AuthUi/Auth";
import { FormProvider } from "../../contexts/formContext";

export default function Page() {
  const { isDarkMode, baseColor } = useTheme();
  return (
    <FormProvider>
      <div
        className={`w-full h-screen flex justify-center items-center ${
          isDarkMode ? `${baseColor} text-white` : ""
        }`}
      >
        <Auth />
      </div>
    </FormProvider>
  );
}
