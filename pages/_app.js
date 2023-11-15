import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "@material-tailwind/react";
import localfont from "next/font/local";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import nProgress, { NProgress } from "nprogress";

const tawasyFont = localfont({
  src: "../public/fonts/local/MYRIAAMI.ttf",
});

const queryClient = new QueryClient();

function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  nProgress.start());

    router.events.on('routeChangeComplete', () =>  nProgress.done());
    router.events.on('routeChangeError', () =>  nProgress.done());
  }, []);

  return (
    <>
      <main className={tawasyFont.className}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <DefaultSeo
              title="Tawasy Shopping"
              description="shopping has become more enjoyable after Tawasy Shopping was
              able to collect more than 400 important
              brands for you to shop from"
            />
            <Component {...pageProps} />
            <ToastContainer  />
          </ThemeProvider>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default appWithTranslation(App);
