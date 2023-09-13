import { ToastContainer } from "react-toastify";
import Footer from "../../components/dashboard/Footer";
import Nav from "../../components/dashboard/Nav";
import Sidebar from "../../components/dashboard/Sidebar";
import { UserDataProvider } from "../../contexts/userrContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Brokersite",
  description: "Experience new immense way of trading",
};

export default function Layout({ children }) {
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
        <div className="fixed top-0 left-0 w-full text-white z-30 ">
          <Nav />
        </div>
        <div className="fixed bottom-0 left-0 w-full text-white z-30 ">
          <Footer />
        </div>
        <div className="content-container md:flex mt-[66px]  w-full ">
          <div className="side-bar  w-[300px] hidden md:block h-[calc(100vh-70px)] overflow-scroll mb-[70px]">
            <Sidebar />
          </div>
          <div className="main-bar w-full h-[calc(100vh-66px)] overflow-hidden mb-[66px] overflow-y-scroll pb-16 ">
            {children}
          </div>
        </div>
        <Toaster />
      </main>
    </UserDataProvider>
  );
}
