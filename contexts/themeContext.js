"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a theme context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component
const getInitialTheme = () => {
  if (typeof localStorage !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      return storedTheme === "dark";
    }
  }
  return true; // Fallback to 'light' if localStorage is not available or no stored value found
};

export const ThemeProvider = ({ children }) => {
  // Function to get the initial theme preference from local storage

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [systemTheme, setSystemTheme] = useState(false); // Initialize as false
  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      // Store the theme preference in localStorage if available
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", newMode);
      }

      return newMode;
    });
  };

  // useEffect(() => {
  //   // Check if 'window' is defined (Next.js might not have 'window' on the server)
  //   if (typeof window !== "undefined") {
  //     // Listen for changes to the prefers-color-scheme media query
  //     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  //     // Function to handle changes in system dark mode preference
  //     const handleSystemThemeChange = (e) => {
  //       setSystemTheme(e.matches);
  //     };

  //     mediaQuery.addEventListener("change", handleSystemThemeChange);

  //     // Cleanup the event listener when the component unmounts
  //     return () => {
  //       mediaQuery.removeEventListener("change", handleSystemThemeChange);
  //     };
  //   }
  // }, []);

  // // Determine the initial theme based on system preference and local storage
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Only set systemTheme if 'window' is defined (client-side)
  //     setSystemTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  //   }
  // }, []);

  // // Set the initial theme based on systemTheme and local storage
  // useEffect(() => {
  //   setIsDarkMode(systemTheme);
  // }, [systemTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        baseColor: isDarkMode ? "bg-[#0a0a0a]" : "bg-white",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
