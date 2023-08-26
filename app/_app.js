import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const checkUserAuthentication = () => {
    const token = localStorage.getItem("token");
    console.log("Token: ", token); // Debug line
    return !!token;
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log("URL: ", url); // Debug line
      const userIsAuthenticated = checkUserAuthentication();
      console.log("Is Authenticated: ", userIsAuthenticated); // Debug line

      if (!userIsAuthenticated && url.startsWith("/dashboard")) {
        console.log("Redirecting to /login"); // Debug line
        router.replace("/");
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
