"use client";
import { useEffect, useState } from "react";
import Footer from "../../components/dashboard/Footer";
import Nav from "../../components/dashboard/Nav";
import Sidebar from "../../components/dashboard/Sidebar";
import { UserDataProvider } from "../../contexts/userrContext";
import { ThemeProvider, useTheme } from "../../contexts/themeContext";
import { ScrollArea } from "../../components/ui/scroll-area";
import Script from "next/script";
import { useIsOnline } from "react-use-is-online";
import toast, { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  const { isDarkMode, baseColor } = useTheme();
  const { isOnline } = useIsOnline();
  const [retrying, setRetrying] = useState(false);
  const [retryCounter, setRetryCounter] = useState(0);
  const [loadingToastId, setLoadingToastId] = useState(null);

  useEffect(() => {
    if (!isOnline) {
      // User is offline, show a loading toast with a retry counter
      if (!loadingToastId) {
        setLoadingToastId(
          toast.loading(
            `You are currently offline. Retrying(${retryCounter + 1})...`,
            {
              duration: 10000, // Display for 10 seconds
              position: "top-center",
            }
          )
        );
      } else {
        // Update the existing loading toast with the retry counter
        toast.loading(
          `You are currently offline. Retrying (${retryCounter + 1})...`,
          {
            duration: 10000, // Display for 10 seconds
            position: "top-center",
            id: loadingToastId, // Specify the ID to update the existing toast
          }
        );
      }

      // Start retrying after 10 seconds
      const retryTimer = setTimeout(() => {
        setRetryCounter((prevCounter) => prevCounter + 1);
        setRetrying(true);
      }, 10000);

      return () => {
        clearTimeout(retryTimer);
      };
    } else {
      // User is online, close the loading toast and reset retry counter
      if (isOnline) {
        toast.success("You are back online!", {
          duration: 5000, // Display success message for 5 seconds
          position: "top-center",
          id: loadingToastId,
        });
      }

      if (loadingToastId) {
        toast.dismiss(loadingToastId); // Dismiss the loading toast
      }

      setRetryCounter(0);
      setRetrying(false);
      setLoadingToastId(null);
    }
  }, [isOnline, loadingToastId, retryCounter, retrying]);

  // Rest of your Layout component code...

  return (
    <UserDataProvider>
      <Script
        src="//code.tidio.co/b3cjjxksq7ckrfh5gv2gm8c5wfudo7oe.js"
        strategy="afterInteractive"
        async
      ></Script>
      <main
        className={`h-screen overflow-hidden relative /overflow-y-scroll w-screen ${
          isDarkMode ? `${baseColor}` : ""
        }`}
      >
        {/* React Hot Toast Toaster */}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              backgroundColor: isDarkMode ? "white" : "#111111",
              fontSize: "13px",
              // fontWeight: "bold",
            },
          }}
        />
        {!isOnline && (
          <div className="fixed top-0 left-0 flex z-40 bg-black opacity-80 w-full h-full"></div>
        )}{" "}
        <div className="fixed top-0 left-0 w-full text-white z-30">
          <Nav />
        </div>
        <div className="fixed bottom-0 left-0 w-full text-white z-30">
          <Footer />
        </div>
        <div className="content-container md:flex mt-[66px] w-full">
          <div className="side-bar hidden md:block /overflow-scroll">
            <ScrollArea className="w-[300px] h-[calc(100vh-70px)] mb-[70px]">
              <Sidebar />
            </ScrollArea>
          </div>
          <div
            className={`main-bar w-full mb-[66px] /overflow-y-scroll ${
              isDarkMode ? `${baseColor}` : ""
            }`}
          >
            <ScrollArea
              className={`h-[calc(100vh-66px)] pb-[5rem] md:pb-11 w-screen md:w-full`}
            >
              <div className="">{children}</div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </UserDataProvider>
  );
}
