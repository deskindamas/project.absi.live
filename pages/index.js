import TawasyLoader from "@/components/UI/tawasyLoader";
import withAuth from "@/components/wrapping components/withAuth";
import Cookies from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
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
      if (user === "seller") {
        router.replace("/seller");
      } else if (user === "customer") {
        router.replace("/customer");
      }
    } else {
      router.replace("/customer");
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Tawasy Shopping</title>
        <meta name="description" content="Tawasy Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen">
        <TawasyLoader />
      </div>
    </>
  );
}

export default Home;
// export default withAuth(Home);
