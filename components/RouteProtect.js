"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function RouteProtection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    handleRouteChange(`${pathname}`);
  }, [pathname, router, searchParams]);

  return null;
}
