import React, { useState } from "react";
import { ResponsiveCarousel } from "../CarouselCustomer/carousel";
import Image from "next/image";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import logo from '../../public/images/lego.png';
import { MdClose } from "react-icons/md";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { Ring } from "@uiball/loaders";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function ProductCustomer({ product }) {
  const [adding, setAdding] = useState(false);
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const {t} = useTranslation("");
  async function addToCart() {
    setAdding(true);
    try {
      const response = await Api.post(`/api/customer/cart/add`, {
        product_id: product.id,
        store_id: router.query.storeId,
      });
      setAdding(false);
    } catch (error) {}
    setAdding(false);
  }

  return (
    <>
      <div key={product.id} className="mb-4">
        <div
          className="bg-white overflow-hidden drop-shadow-2xl rounded-lg
          w-80  items-center justify-center"
        >
          <div className="w-full bg-cover overflow-hidden">
            <Image
              // src={logo}
              src={product.image}
              className="w-full h-60 transform transition duration-1000 hover:scale-125 hover:rotate-2  "
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className=" mt-4 px-4 py-4">
            <div className="flex flex-col justify-start items-start mb-2 gap-3">
              <h3 className="text-gray-600 text-2xl font-medium ">
                {product.name}
              </h3>
              <p className="text-skin-primary text-2xl font-medium ">
                {product.price} s.p
              </p>
            </div>
            <div className="flex flex-wrap w-[100%] gap-2 mb-2">
              {product.brand && (
                <h3 className="text-skin-primary text-md font-medium border-2 border-skin-primary px-2 py-1 rounded-full ">
                  {product.brand}
                </h3>
              )}
            </div>
            <p className="text-gray-700 text-base font-light py-3">
              {product.description}
            </p>
            <div className="flex justify-center items-center py-4">
              <button
                onClick={addToCart}
                className="items-center py-2 w-full text-sm font-medium text-center text-gray-900 bg-white rounded-full border border-[#ff6600] "
              >
                {adding == true ? (
                  <div className="w-full h-full flex justify-center" >
                    <Ring size={20} lineWeight={5} speed={2} color="#ff6600" />
                  </div>
                ) : (
                  t("store.product.addToCart")
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCustomer;
