import Image from "next/image";
import Logo from "../../../public/images/tawasylogo.png";
import { AiOutlineStop } from "react-icons/ai";
import { useQuery } from "react-query";
import { useEffect } from "react";
import TawasyLoader from "@/components/UI/tawasyLoader";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";

function pendingPage() {
  let token;
  const router = useRouter() ;
  const Api = createAxiosInstance(router);


  // useEffect(() => {
  //   const at = localStorage.getItem("AT");
  //   token = at;
  // }, [token]);


  function getStoreStatus() {
    return Api.get(`/api/seller/store/status`);
  }
  const { data, isLoading, isError, error } = useQuery(
    `StoreStatus`,
    getStoreStatus,
    { staleTime: 1, refetchOnMount: true, refetchOnWindowFocus: false  , refetchInterval : 10000}
  );

  if (data) {
    if(data.data.status && data.data.status === "approved"){
      localStorage.setItem('Sid' , data.data.store_id);
      router.replace(`/seller`);
    }
  }

  if (isLoading) {
    return (
      <div className="w-screen h-screen" >
        <TawasyLoader />
      </div>
    );
  }
  // we should use useQuery to make a repeatable query about the store status because wen it gets available reRoute to the main dashboard
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-white gap-32 mx-auto px-4 pt-28 w-full">
      <Image src={Logo} alt="Logo" width={400} height={290} className="mx-3" />
      <div className="flex flex-col justify-start items-center gap-3">
        <AiOutlineStop className="text-red-600 text-9xl w-[150px] h-[150px] " />
        <div className="flex flex-col justify-start items-center gap-3">
          <h3 className="text-5xl text-black font-medium">
            Your store is pending
          </h3>
          <h3 className="text-3xl font-medium">
            We will contact you when it becomes available
          </h3>
        </div>
      </div>
    </div>
  );
}

export default pendingPage;
