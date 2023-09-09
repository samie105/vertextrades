"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a theme context
const FormContext = createContext();

// Custom hook to use the theme context
export const useFormContext = () => {
  return useContext(FormContext);
};

// ThemeProvider component

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "us",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [showVerificationPage, setShowVerificationPage] = useState(false); //login

  const [formDatas, setFormDatas] = useState({ email: "", password: "" });
  const [currentStep, setCurrentStep] = useState(0);
  const [isInitialSend, setIsInitialSend] = useState(true);
  const [alreadysent, setSent] = useState(false);
  const [lalreadysent, lsetSent] = useState(false); //login

  const [isVerificationStep, setIsVerificationStep] = useState(false); //signup
  return (
    <FormContext.Provider
      value={{
        isVerificationStep,
        setIsVerificationStep,
        formData,
        setFormData,
        showVerificationPage,
        setShowVerificationPage,
        formDatas,
        setFormDatas,
        currentStep,
        setCurrentStep,
        isInitialSend,
        setIsInitialSend,
        alreadysent,
        setSent,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
