import Image from "next/image";
import React from "react";
import kuala from "@/public/images/kuala.jpg";
import { useTranslation } from "next-i18next";
import logo from "@/public/images/tawasylogo.png";
// import { useRouter } from "next-translate-routes";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { Ring } from "@uiball/loaders";
import Link from "next/link";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { selectedActions } from "@/Store/SelectedSlice";

function SellerSelectProduct({ product }) {
  const { t } = useTranslation("");
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch(); 

  const [adding, setAdding] = useState(false);

  async function saveProduct() {
    setIsLoading(true);
    try {
      const response = await Api.post(
        `/api/seller/select-product/${product.id}`
      );
      dispatch(selectedActions.selectProduct());
    } catch (error) {
      // console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <div className="shadow-lg flex flex-col sm:w-fit max-w-[288px] border-2 md:min-h-[406px] min-h-[381px] border-gray-200 rounded-md ">
      <Link
        href={`/customer/Products/${product.slug}`}
        legacyBehavior
      >
        <a target="_blank" 
        className="bg-cover overflow-hidden flex justify-center items-center min-w-[288px]  min-h-[260px] max-h-[260px]  "
        >
          <Image
            src={product.image ? product.image : logo}
            alt={product.name}
            className="w-full   transform transition duration-1000 object-contain object-center"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "225px", height: "225px" }}
          />
        </a>
      </Link>
      <div className="w-[90%] mx-auto py-3 flex flex-col gap-2 md:h-[100%] h-auto justify-between">
        <h1
          className="capitalize md:text-xl text-base text-gray-600 font-medium md:h-max text-ellipsis line-clamp-3 "
          title={product.name}
        >
          {product.name}
        </h1>
        <div className="flex flex-wrap gap-2 w-[70%] ">
            {product.category && (
              <div className=" px-2 bg-white border-2 border-skin-primary rounded-2xl text-skin-primary  text-start  flex justify-center items-center ">
                {product.category}
              </div>
            )}
            {product.brand && (
              <div className=" px-2 bg-white border-2 w-max border-skin-primary rounded-2xl text-skin-primary flex justify-center items-center ">
                {product.brand}
              </div>
            )}
          </div>
          {product.message &&
          product.message == "Product found in another store type." ? (
            <div className="text-red-500">
              {t("seller.addProduct.notCompatible")}
            </div>
          ) : !isLoading ? (
            <button
              onClick={saveProduct}
              className="cursor-pointer border-2 border-gray-400 text-gray-600 hover:border-skin-primary hover:text-skin-primary px-4 rounded-full text-base transform duration-500 "
            >
                {t("seller.addProduct.selectProduct")}
            </button>
          ) : (
            <div className="bg-skin-primary py-1 flex justify-center items-center rounded-full">
              <Ring size={23} lineWeight={5} speed={2} color="white" />
            </div>
          )}
      </div>
    </div>
  );
}

export default SellerSelectProduct;
