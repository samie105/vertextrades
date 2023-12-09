import Script from "next/script";
import Home from "../components/main/Home";
export default function HomePage() {
  return (
    <>
      <Script
        src="//code.tidio.co/88ekhj3pz9xj8q80dnktes9tdcuoo8hi.js"
        strategy="afterInteractive"
        async
      ></Script>
      <Home />
    </>
  );
}
