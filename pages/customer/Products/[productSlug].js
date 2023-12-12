import React, { useState } from "react";
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
import { CarouselProduct } from "@/components/ProductCarousel/CarouselProduct";
import Variations from "@/components/VariationsCustomer/Variations";

const sizes = [
  {
    id : 1,
    name : "sm" ,
  },
  {
    id : 2,
    name : "md" 
  },
  {
    id : 3,
    name : "lg" 
  },
  {
    id : 4,
    name : "xl" 
  },
] ;

const colors = [
  {
    id : 1,
    name : "red" ,
  },
  {
    id : 2,
    name : "green" 
  },
  {
    id : 3,
    name : "white" 
  },
  {
    id : 4,
    name : "black" 
  },
]


const productVariations = {
  success: true,
  variations: [
    {
      id: 15,
      attribute: "Size",
      option: "Large",
      image: null,
    },
    {
      id: 16,
      attribute: "Color",
      option: "Blue",
      image: null,
    },
    {
      id: 17,
      attribute: "Color",
      option: "Red",
      image: null,
    },
    {
      id: 18,
      attribute: "Size",
      option: "Small",
      image: null,
    },
  ],
};


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

  // const [selectedSize, setSelectedSize] = useState();
  // const [selectedColor, setSelectedColor] = useState();

  const router = useRouter();
  const { t } = useTranslation("");

  const groupedVariations = {};
  productVariations["variations"].forEach((variation) => {
    const attribute = variation.attribute;
    if (!groupedVariations[attribute]) {
      groupedVariations[attribute] = [];
    }
    groupedVariations[attribute].push(variation);
  });


  return (
    <>
    <NextSeo
      title={` ${product.name} | ${t("titles.home")}`}
      description={product.name}
      canonical={`https://tawasyme.com/customer/Products/${router.query.productSlug}`}
    />
      <div className="w-full h-full flex flex-col items-center justify-center space-y-4 py-20">
        <div className="md:w-[70%] w-[90%] shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)]  md:my-5 my-2">
          <div className="w-full flex sm:flex-row flex-col sm:space-x-4 space-y-4 py-2">
            
            <div className="m-auto ml-5"> 
            <CarouselProduct />
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

             <Variations publicProduct = {true} />

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

