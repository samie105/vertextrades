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
import { usePathname } from "next/navigation";
import { AnimatePresence, motion as m } from "framer-motion";

export default function Layout({ children }) {
  const pathname = usePathname();
  const { isDarkMode, baseColor } = useTheme();
  const { isOnline } = useIsOnline();
  const [retrying, setRetrying] = useState(false);
  const [retryCounter, setRetryCounter] = useState(0);
  const [loadingToastId, setLoadingToastId] = useState(null);
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  useEffect(() => {
    const showLoadingToast = () => {
      const message = "You are currently offline. Retrying...";
      if (!loadingToastId) {
        const id = toast.loading(message, {
          duration: Infinity, // Display until manually dismissed
          position: "top-center",
        });
        setLoadingToastId(id);
      }
    };

    if (!isOnline) {
      showLoadingToast();
    } else {
      if (loadingToastId) {
        toast.success("You are back online!", {
          duration: 2000, // Display success message for 2 seconds
          position: "top-center",
          id: loadingToastId,
        });
        // toast.dismiss(loadingToastId);
        setLoadingToastId(null);
      }
    }
  }, [isOnline, loadingToastId]);

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
        <div className="content-container fixed md:flex pt-16 w-full">
          <div className="side-bar hidden md:block /overflow-scroll">
            <ScrollArea className="w-[300px] h-[calc(100vh-70px)] mb-[70px]">
              <Sidebar />
            </ScrollArea>
          </div>
          <div
            className={`main-bar w-full mb-[66px] overflow-hidden /overflow-y-scroll ${
              isDarkMode ? `${baseColor}` : ""
            }`}
          >
            <ScrollArea
              className={`h-[calc(100vh-66px)] pb-[5rem] overflow-hidden md:pb-11 w-screen md:w-full`}
            >
              <AnimatePresence>
                <div key={pathname}>{children}</div>
              </AnimatePresence>
            </ScrollArea>
          </div>
        </div>
      </main>
    </UserDataProvider>
  );
}
