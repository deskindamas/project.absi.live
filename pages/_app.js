import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "@material-tailwind/react";
import localfont from "next/font/local";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

const tawasyFont = localfont({
  src: "../public/fonts/local/DanburyPersonalUseRegular-rgK38.otf",
});
// import localfont from '../public/fonts/local/DanburyPersonalUseRegular-rgK38.otf' ;

const queryClient = new QueryClient();

 function App({ Component, pageProps }) {
  return (
    <>
      {/* <main className={tawasyFont.className} > */}
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <DefaultSeo
              title="Tawasy Shopping"
              description="shopping has become more enjoyable after Tawasy Shopping was
              able to collect more than 400 important
              brands for you to shop from"
            />
            <Component {...pageProps} />
            <ToastContainer />
          </ThemeProvider>
        </QueryClientProvider>
      {/* </main> */}
    </>
  );
}

export default appWithTranslation(App);