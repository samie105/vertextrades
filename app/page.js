import Script from "next/script";
import Home from "../components/main/Home";
export default function HomePage() {
  return (
    <>
      <Script
        src="//code.jivosite.com/widget/r5s9qnhA3q"
        strategy="afterInteractive"
        async
      ></Script>
      <Home />
    </>
  );
}
