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
  GlassMagnifier
} from "react-image-magnifiers-v2";

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
        store_id: router.query.storeId,
      });
      dispatch(cartActions.addProduct());
      setAdding(false);
    } catch (error) {}
    setAdding(false);
  }
  const { t } = useTranslation("");

  return (
    <div className="w-full h-full flex justify-center">
      <div className="sm:w-[70%] w-[90%] shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] px-6 py-6 md:my-14 my-2">
        <div className="w-full flex md:flex-row flex-col md:justify-start items-center gap-4 py-2">
          <div className=" max-h-[200px] max-w-[200px] ">
            {/* <Image
              src={product.image ? product.image : logo}
              className="w-full object-contain object-center transform transition duration-1000 "
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "200px", height: "200px" }}
            /> */}
            <SideBySideMagnifier
              imageSrc={product.image}
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
              className = "zoom"
              zoomContainerBorder="1px solid #ccc"
              zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
            />
            {/* <Magnifier imageSrc = {product.image} imageAlt = {product.name} /> */}
            {/* <GlassMagnifier imageSrc={product.image} /> */}
            {/* <GlassMagnifier imageSrc={product.image} magnifierSize={522} /> */}
          </div>

          <div className="w-full flex flex-col gap-2 justify-center sm:items-start items-center">
            <div className="flex justify-between w-full">
              <h1 className=" md:text-2xl sm:text-xl text-lg w-[70%] text-gray-600 capitalize">
                {product.name}
              </h1>
              <p className="bg-gray-200 sm:text-xl  w-max text-sm h-max sm:flex-none flex py-2 px-2 text-black font-medium">
                {convertMoney(product.price)} S.P
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.brand && product.brand && (
                <p className="md:text-lg sm:text-base text-sm text-skin-primary border-2 border-skin-primary w-max px-5 rounded-full">
                  {product.brand}
                </p>
              )}
              {product.category && product.category && (
                <p className=" md:text-lg sm:text-base text-sm text-skin-primary border-2 border-skin-primary w-max px-5 rounded-full">
                  {product.category}
                </p>
              )}
            </div>
            <button
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
            </button>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 py-3 my-2">
          <p className="text-gray-500 text-base">
            {product.description && product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withLayoutCustomer(Product);
