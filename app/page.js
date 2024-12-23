import Script from "next/script";
import Home from "../components/main/Home";
import Messsenger from "../components/Chat/messsenger";
export default function HomePage() {
  return (
    <>
      <Messsenger /> <Home />
    </>
  );
}
