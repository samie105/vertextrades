import "./globals.css";
import "./camera.css";
import "./styles.css";
import "animate.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import { Poppins } from "next/font/google";
import Navbar from "../components/main/navbars/Navbar";
import { ToastContainer } from "react-toastify";

const font = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "Brokersite",
  description: "Broker broker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}> {children}</body>
    </html>
  );
}
