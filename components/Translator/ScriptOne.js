"use client";
import Script from "next/script";
import { useEffect } from "react";

const Scripter = () => {
  useEffect(() => {
    // Define the googleTranslateElementInit function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // Set the default page language
          includedLanguages: "en,es,fr", // Define the languages you want to include
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="beforeInteractive"
      />
      <div id="google_translate_element"></div>
    </>
  );
};

export default Scripter;
