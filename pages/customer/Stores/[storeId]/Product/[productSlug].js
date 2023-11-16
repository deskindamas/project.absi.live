import React from "react";
import Image from "next/image";
import images from '../../../../../public/images/kuala.jpg';
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";

export async function getServerSideProps(context) {
    const { params, locale } = context;
    const Api = createAxiosInstance();
    const response = await Api.get(`/api/stores/${params.storeId}/products/${params.productSlug}`, {
      headers : { 'Accept-Language': locale || 'en',}
    });
    if (!response.data[`productDetails`]) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        product : response.data
      },
    };
  }


function Product() {
   
  // const router = useRouter();
  // const Api = createAxiosInstance(router);
  const {t} = useTranslation("");
    
  
  // const { data: products, isLoading , refetch } = useQuery(`products`, fetchProducts, {
  //   staleTime: 1,
  //   refetchOnMount: true,
  //   refetchOnWindowFocus: false,
  // });

  // async function fetchProduct() {
  //   return await Api.get(`/api/customer/`);
  // }

    return(
        <div className="w-full h-full flex justify-center">
     <div className="w-[70%] shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] px-6 py-6 md:my-14 my-2">
    <div className="w-full flex md:flex-row flex-col gap-4 py-2">
    <div className="">
    <Image
     src = {images}
     className="w-full  transform transition duration-1000 "
     width={0}
     height={0}
     sizes="100vw"
     style={{ width: "auto", height: "auto" }}
            />
    </div>

    <div className="w-full flex flex-col gap-2 justify-center">
    <div className="flex justify-between">
    <h2 className="text-2xl text-gray-600 capitalize">lorem</h2>
    <p className="bg-gray-200 py-2 px-2 text-gray-500 font-medium">120 S. P</p>
    </div>
    <p className="text-lg text-gray-400 border-2 border-skin-primary w-max px-5 rounded-full">adidas</p>
    <button className="bg-skin-primary text-white px-3 py-1 my-1 rounded-md md:w-[20%] w-[90%]">{t("products.AddtoCart")}</button>
    </div>
    </div>
    <div className="border-t-2 border-gray-200 py-3 my-2">
    <p className="text-gray-500 text-base">
    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a 
      type specimen book. It has survived not only five centuries, but also the leap into
       electronic typesetting, remaining essentially unchanged.`}
    </p>
    </div>
    </div>
     </div>
    )
}

export default withLayoutCustomer(Product);