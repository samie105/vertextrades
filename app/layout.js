import "./globals.css";
import "./camera.css";
import "./styles.css";
import "animate.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
const font = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "Brokersite",
  description: "Broker broker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Script
          src="//code.tidio.co/b3cjjxksq7ckrfh5gv2gm8c5wfudo7oe.js"
          strategy="lazyOnload"
          async
        ></Script>
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
    </html>
  );
}
