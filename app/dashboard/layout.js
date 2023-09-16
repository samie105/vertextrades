"use client";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/dashboard/Footer";
import Nav from "../../components/dashboard/Nav";
import Sidebar from "../../components/dashboard/Sidebar";
import { UserDataProvider } from "../../contexts/userrContext";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, useTheme } from "../../contexts/themeContext";
import { ScrollArea } from "../../components/ui/scroll-area";

export default function Layout({ children }) {
  const { isDarkMode, baseColor } = useTheme();
  return (
    <UserDataProvider>
      <main className="h-screen overflow-hidden">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          style={{
            padding: "1rem 2rem",
          }}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="fixed top-0 left-0 w-full /text-white z-30 ">
          <Nav />
        </div>
        <div className="fixed bottom-0 left-0 w-full text-white z-30 ">
          <Footer />
        </div>
        <div className="content-container md:flex mt-[66px]  w-full ">
          <div className="side-bar   hidden md:block  /overflow-scroll">
            <ScrollArea className="w-[300px] h-[calc(100vh-70px)] mb-[70px]">
              <Sidebar />
            </ScrollArea>
          </div>
          <div className="main-bar w-full mb-[66px] /overflow-y-scroll  ">
            <ScrollArea
              className={`h-[calc(100vh-66px)] pb-[5rem] md:pb-11 ${
                isDarkMode ? `${baseColor}` : ""
              }`}
            >
              {children}
            </ScrollArea>
          </div>
        </div>
        <Toaster />
      </main>
    </UserDataProvider>
  );
}
