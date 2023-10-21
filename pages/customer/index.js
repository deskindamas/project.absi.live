import TiltCard from "@/components/UI/TileCard";
import TawasyLoader from "@/components/UI/tawasyLoader";
import image from "../../public/images/supermarket.jpeg";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import StoreTypeComponent from "@/components/customerCommponents/StoreTypeComponent/StoreTypeComponent";
import Image from "next/image";
import { ResponsiveCarousel } from "@/components/CarouselCustomer/carousel";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import Head from "next/head";

function CustomerPage() {
  return (
    <>
      <Head>
        <title>Tawasy Shopping</title>
        <meta />
      </Head>
      <div className="w-full h-full">
        <div className="flex flex-col justify-start items-center h-full w-full gap-4 ">
          <div className="mx-auto w-full  ">
            <ResponsiveCarousel/>
          </div>

          <div className=" font-mohave text-4xl text-skin-primary py-5 ">
            Discover Our Store Types
          </div>
          <div className=" w-[70%] h-[60%] grid grid-cols md:grid-cols-4 sm:grid-cols-3  grid-cols-1 gap-y-6 gap-x-6 pb-4 ">
            <StoreTypeComponent/>
            <StoreTypeComponent/>
            <StoreTypeComponent/>
            <StoreTypeComponent/>
            <StoreTypeComponent/>
            <StoreTypeComponent/>
            <StoreTypeComponent/>
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayoutCustomer(CustomerPage);
