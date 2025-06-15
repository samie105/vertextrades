import "./globals.css";
import "./camera.css";
import "./styles.css";
import "animate.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import GoogleTranslate from "../components/Translator/GoogleTranslator";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "../contexts/themeContext";
import Messsenger from "../components/Chat/messsenger";
const font = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "Vertex Trades | Best Digital Currency Platform ",
  description:
    "A broker with thousands of assets leading the way in the world of trading",
};

// Get the user's preferred language from browser or saved preference
function getUserLanguage() {
  if (typeof window !== 'undefined') {
    return window.navigator.language || 'en';
  }
  return 'en';
}

export default function RootLayout({ children }) {
  return (
    <html lang={getUserLanguage()}>
      <ThemeProvider>
        <body className={font.className}>
          <Script src="/plugins/jquery.min.js" strategy="beforeInteractive" />
          <Script
            src="/plugins/jquery.easing.1.3.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/plugins/jquery.mobile.customized.min.js"
            strategy="beforeInteractive"
          />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
