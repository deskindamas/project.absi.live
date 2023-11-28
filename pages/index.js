import TawasyLoader from "@/components/UI/tawasyLoader";
import withAuth from "@/components/wrapping components/withAuth";
import Cookies from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsLoading(true);
    const token = Cookies.get("AT");
    const user = Cookies.get("user");
    if (token) {
      if (user) {
        if (user === "seller") {
          router.replace("/seller");
        } else if (user === "customer") {
          router.replace("/customer");
        }
      } else {
        router.replace("/customer");
      }
    } else {
      router.replace("/customer");
    }
    setIsLoading(false);
  }, []);

  return (
    // <>
    <div className="w-screen h-screen">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BB3V9Y8M5T" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-BB3V9Y8M5T');
        `}
      </Script>
      <TawasyLoader />
    </div>
    // </>
  );
}

export default Home;
// export default withAuth(Home);
