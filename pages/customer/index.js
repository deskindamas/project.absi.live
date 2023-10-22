import TiltCard from "@/components/UI/TileCard";
import TawasyLoader from "@/components/UI/tawasyLoader";
import image from "../../public/images/supermarket.jpeg";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import StoreTypeComponent from "@/components/customerCommponents/StoreTypeComponent/StoreTypeComponent";
import Image from "next/image";
import { ResponsiveCarousel } from "@/components/CarouselCustomer/carousel";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";

function CustomerPage() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const { data, isLoading, isError, error } = useQuery(
    `mainPage`,
    fetchMainPage,
    { refetchOnMount: true, refetchOnWindowFocus: false, staleTime: Infinity }
  );

  async function fetchMainPage() {
    try {
      return await Api.get(`/api/store-types`);
    } catch (error) {}
  }

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={400} height={400} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Tawasy Shopping</title>
        <meta />
      </Head>
      <div className="w-full h-full">
        {data && (
          <div className="flex flex-col justify-start items-center h-full w-full gap-4 ">
            <div className="mx-auto w-full  ">
              <ResponsiveCarousel />
            </div>

            <div className=" font-mohave text-4xl text-skin-primary py-5 ">
              Discover Our Store Types
            </div>
            <div className=" w-[70%] h-[60%] grid grid-cols md:grid-cols-4 sm:grid-cols-3  grid-cols-1 gap-y-6 gap-x-6 pb-4 ">
              {data?.data?.data.map((storeType) => {
                return (
                  <StoreTypeComponent
                    key={storeType.id}
                    storeType={storeType}
                  />
                );
              })}
              {/* <StoreTypeComponent />
            <StoreTypeComponent />
            <StoreTypeComponent />
            <StoreTypeComponent />
            <StoreTypeComponent />
            <StoreTypeComponent />
            <StoreTypeComponent /> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default withLayoutCustomer(CustomerPage);
