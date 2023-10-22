import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import Image from "next/image";
import { ResponsiveCarousel } from "@/components/CarouselCustomer/carousel";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import createAxiosInstance from "@/API";
import TawasyLoader from "@/components/UI/tawasyLoader";

const StoreType = () => {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [storeTypeId, setStoreTypeId] = useState();
  const {
    data: stores,
    isLoading,
    isError,
    error,
  } = useQuery([`stores`, storeTypeId], fetchStores, {
    staleTime: Infinity,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: Boolean(storeTypeId) == true,
  });

  async function fetchStores() {
    try{
      return await Api.get(`/api/store-types/11`);
    }catch(error){

    }
  }

  useEffect(() => {
    const sti = router.query.storeTypeId;
    if (router.query.storeTypeId) {
      setStoreTypeId(sti);
    }
  }, [router.query.storeTypeId]);

  if (stores) {
    console.log(stores);
  }

  if(isLoading) {
    return <div className="w-full h-full" >
      <TawasyLoader width={400} height={400} />
    </div>
  }

  return (
    <div>
      <div className="mx-auto w-full  ">
        <ResponsiveCarousel />
      </div>
      <div className="md:mx-20 shadow-lg shadow-gray-500 pb-5 mb-6 ">
        {stores && (
          <div className="flex w-full h-full px-5 py-2 bg-gray-200 my-7">
            <div className="w-full">
              <h1 className="text-3xl font-medium text-black">
                {stores.data.data.store_type.name}
              </h1>
            </div>
          </div>
        )}

        <form className="flex justify-center items-center w-full my-4">
          <div className="flex bg-gray-50 pt-1 pb-1 sm:w-2/5 items-center rounded-lg mb-4 mr-4 border-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="w-full  bg-gray-50 outline-none border-transparent text-gray-700 focus:border-transparent focus:ring-0 rounded-lg text-sm h-8"
              type="text"
              placeholder="Search a product "
            />
          </div>
        </form>

        <div className="">
          <div className=" w-[70%] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-col-1 gap-4 mx-auto">
            {stores &&
              stores.data.data.stores.map((store) => {
                return <StoreComponent store = {store} />;
              })}
            {/* <StoreComponent />
            <StoreComponent />
            <StoreComponent />
            <StoreComponent />
            <StoreComponent />
            <StoreComponent /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayoutCustomer(StoreType);
