import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";

  const queryClient = new QueryClient() ;

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient} >
        <Component {...pageProps} />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}
