import React from "react";
import Image from "next/image";
import images from "@/public/images/kuala.jpg";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import createAxiosInstance from "@/API";
import logo from "@/public/images/tawasylogo.png";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import {
  Magnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  SideBySideMagnifier,
  GlassMagnifier,
} from "react-image-magnifiers-v2";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export async function getServerSideProps(context) {
  const { params, locale } = context;
  const Api = createAxiosInstance();
  const response = await Api.get(`/api/product/${params.productSlug}`, {
    headers: { "Accept-Language": locale || "en" },
  });
  // console.log(response);
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
  const router = useRouter();
  const { t } = useTranslation("");
  return (
    <>
    <NextSeo
      title={` ${product.name} | ${t("titles.home")}`}
      description={product.name}
      canonical={`https://tawasyme.com/customer/Products/${router.query.productSlug}`}
    />
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4 py-10">
        <div className="w-[70%] shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)]  md:my-5 my-2">
          <div className="w-full flex  sm:flex-row flex-col sm:space-x-4 space-y-4 py-2">
            <div className=" m-auto h-auto w-[200px] px-2 ">
              {/* <Image
              src={product.image ? product.image : logo}
              className="w-full object-contain transform transition duration-1000 "
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "200px", height: "200px" }}
            /> */}

              <SideBySideMagnifier
                imageSrc={product.image ? product.image : logo}
                imageAlt={product.name}
                // largeImageSrc={product.image}
                alwaysInPlace={false}
                overlayOpacity={0.5}
                switchSides={router.locale == "ar" ? true : false}
                inPlaceMinBreakpoint={641}
                fillAvailableSpace={true}
                fillAlignTop={true}
                fillGapTop={100}
                fillGapRight={10}
                fillGapBottom={200}
                fillGapLeft={10}
                className="zoom object-contain "
                zoomContainerBorder="1px solid #ccc"
                zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
              />
            </div>
            <div className="w-full flex flex-col space-y-2 justify-center">
              <div className="flex justify-between">
                <h2 className="text-2xl text-gray-600 capitalize">
                  {product.name}
                </h2>
              </div>
              {product.brand && (
                <p className="text-lg text-skin-primary border-2 border-skin-primary w-max px-5 rounded-full">
                  {product.brand}
                </p>
              )}
              <p className="text-gray-500 text-base border-t-2 border-gray-200 py-3 my-2">
                {product.decription && product.description}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-4">
          {product.stores && product.stores.length > 0 ? (
            <div className="w-full flex flex-col space-y-4 ">
              <h2 className="text-2xl w-max mx-auto ">
                {t("product.storeSellers")} :
              </h2>
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-6 w-[90%] mx-auto ">
                {product.stores &&
                  product.stores.map((store) => {
                    return <StoreComponent store={store} key={store.id} />;
                  })}
              </div>
            </div>
          ) : (
            <div className="w-max mx-auto md:text-2xl text-base ">
              {t("product.noStores")}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default withLayoutCustomer(PublicProduct);
