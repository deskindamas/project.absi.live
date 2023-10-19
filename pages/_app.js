import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "@material-tailwind/react";

  const queryClient = new QueryClient() ;

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient} >
        <ThemeProvider>
        <Component {...pageProps} />
        <ToastContainer />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
