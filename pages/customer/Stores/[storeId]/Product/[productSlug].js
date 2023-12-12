import React, { useState } from "react";
import Image from "next/image";
import images from "../../../../../public/images/kuala.jpg";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import logo from "@/public/images/tawasylogo.png";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { Ring } from "@uiball/loaders";
import { useDispatch } from "react-redux";
import { cartActions } from "@/Store/CartSlice";
import { convertMoney } from "@/components/SellerOrders/sellerOrder";
import {
  Magnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  SideBySideMagnifier,
  GlassMagnifier,
} from "react-image-magnifiers-v2";
import { NextSeo } from "next-seo";
import { CarouselProduct } from "@/components/ProductCarousel/CarouselProduct";
import Variations from "@/components/VariationsCustomer/Variations";

export async function getServerSideProps(context) {
  const { params, locale } = context;
  const Api = createAxiosInstance();
  const response = await Api.get(
    `/api/stores/${params.storeId}/products/${params.productSlug}`,
    {
      headers: { "Accept-Language": locale || "en" },
    }
  );
  // console.log(response.data);
  if (!response.data[`product`]) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      product: response.data[`product`],
    },
  };
}

function Product({ product }) {
  const [adding, setAdding] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const Api = createAxiosInstance(router);
  async function addToCart() {
    setAdding(true);
    try {
      const response = await Api.post(`/api/customer/cart/add`, {
        product_id: product.id,
        store_id: product.store_id,
      });
      dispatch(cartActions.addProduct());
      setAdding(false);
    } catch (error) {}
    setAdding(false);
  }
  const { t } = useTranslation("");

  return (
    <>
      <NextSeo
        title={`${product.name} | ${t("titles.home")}`}
        description={product.name}
        canonical={`https://tawasyme.com/customer/store/${router.query.storeId}/Product/${router.query.productSlug}`}
      />
      <div className="w-full h-full flex justify-center">
        <div className="sm:w-[70%] w-[90%] shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] px-6 py-6 md:my-14 my-2">
          <div className="w-full flex md:flex-row flex-col md:justify-start items-center gap-4 py-2">
            <div>
             
              <CarouselProduct productDialog = {false} />
            </div>

            <div className="w-full flex flex-col gap-2 justify-center sm:items-start items-center">
              <div className="flex justify-between w-full">
                <h1 className=" md:text-xl sm:text-lg text-lg w-[70%] text-gray-600 capitalize">
                  {product.name}
                </h1>
                <p className="bg-gray-200 sm:text-lg  w-max text-sm h-max sm:flex-none flex py-2 px-2 text-black ">
                  {convertMoney(product.price)} S.P
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.brand && product.brand && (
                  <p className="md:text-base sm:text-base text-sm text-skin-primary border-2 border-skin-primary w-max px-5 rounded-full">
                    {product.brand}
                  </p>
                )}
                {product.category && product.category && (
                  <p className=" md:text-base sm:text-base text-sm text-skin-primary border-2 border-skin-primary w-max px-5 rounded-full">
                    {product.category}
                  </p>
                )}
              </div>
              <Variations publicProduct = {false} />
              {/* <button
                className="bg-skin-primary text-white px-3 py-1 my-1 rounded-md xl:w-[20%] md:w-[70%] w-[90%]"
                onClick={addToCart}
              >
                {adding == true ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <Ring size={23} lineWeight={5} speed={2} color="white" />
                  </div>
                ) : (
                  t("store.product.addToCart")
                )}
              </button> */}
            </div>
          </div>
          <div className="border-t-2 border-gray-200 py-3 my-2">
            <p className="text-gray-500 text-base">
              {product.description && product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayoutCustomer(Product);
