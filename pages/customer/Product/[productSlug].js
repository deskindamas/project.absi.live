import React from "react";
import Image from "next/image";
import images from "@/public/images/kuala.jpg";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import createAxiosInstance from "@/API";
import logo from "@/public/images/tawasylogo.png";

export async function getServerSideProps(context) {
  const { params, locale } = context;
  const Api = createAxiosInstance();
  const response = await Api.get(`/api/product/${params.productSlug}`, {
    headers: { "Accept-Language": locale || "en" },
  });
  if (!response.data[`productDetails`]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      product: response.data[`productDetails`],
    },
  };
}

function PublicProduct({ product }) {
  const { t } = useTranslation("");
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 py-10">
      <div className="w-[70%] shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)]  md:my-5 my-2">
        <div className="w-full flex  sm:flex-row flex-col gap-4 py-2">
          <div className=" m-auto ">
            <Image
              src={product.image ? product.image : logo}
              className="w-full object-contain transform transition duration-1000 "
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
          <div className="w-full flex flex-col gap-2 justify-center">
            <div className="flex justify-between">
              <h2 className="text-2xl text-gray-600 capitalize">{product.name}</h2>
            </div>
            <p className="text-lg text-skin-primary border-2 border-skin-primary w-max px-5 rounded-full">
              {product.brand.name}
            </p>
            <p className="text-gray-500 text-base border-t-2 border-gray-200 py-3 my-2">
                {product.decription ? product.description : `No Description`}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4" >
        <h2 className="text-2xl w-max mx-auto " >
            {t("product.storeSellers")} :
        </h2>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[90%] mx-auto " >
              
        </div>
      </div>
    </div>
  );
}

export default withLayoutCustomer(PublicProduct);
