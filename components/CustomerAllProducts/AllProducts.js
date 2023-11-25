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
import { convertMoney } from "../SellerOrders/sellerOrder";
import { useDispatch } from "react-redux";
import { cartActions } from "@/Store/CartSlice";

function PublicAllProduct({ product , storeId }) {
  const { t } = useTranslation("");
  const router = useRouter();
  const dispatch = useDispatch();
  const Api = createAxiosInstance(router);
  const [adding, setAdding] = useState(false);

  async function addToCart() {
    setAdding(true);
    console.log(product.id);
    try {
      const response = await Api.post(`/api/customer/cart/add`, {
        product_id: product.id,
        store_id: storeId,
      });
      dispatch(cartActions.addProduct());
      setAdding(false);
    } catch (error) {}
    setAdding(false);
  }

  console.log(product);

  return (
    <div className="shadow-lg flex flex-col sm:w-fit max-w-[288px] mx-auto border-2 md:min-h-[406px] min-h-[381px] border-gray-200 rounded-md ">
      <Link
        href={
          product.price
            ? `/customer/Stores/${router.query.storeId}/Product/${product.slug}`
            : `/customer/Products/${product.slug}`
        }
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
      </Link>
      <div className="w-[90%] mx-auto py-3 flex flex-col gap-2 md:h-[100%] h-auto justify-between">
        <h1
          className="capitalize md:text-xl text-base text-gray-600 font-medium md:h-[50%] text-ellipsis line-clamp-3 "
          title={product.name}
        >
          {product.name}
        </h1>
        {product.price && (
          <h2 className="text-gray-600 text-xl md:h-[10%]">
            {convertMoney(product.price)} S.P
          </h2>
        )}
        <p className="text-skin-primary text-lg md:h-[20%] ">{product.brand}</p>
        {!product.price && (
          <Link
            href={`/customer/Products/${product.slug}`}
            className="capitalize text-center md:h-[20%] border-2 border-skin-primary px-4 rounded-full text-base hover:bg-skin-primary hover:text-white transform duration-500"
          >
            {t("componentStore.ViewStore")}
          </Link>
        )}
        {product.price && (
          <button
            onClick={addToCart}
            className="capitalize md:h-[20%] border-2 border-skin-primary px-4 rounded-full text-base transform duration-500"
          >
            {adding == true ? (
              <div className="w-full h-full flex justify-center items-center">
                <Ring size={17} lineWeight={5} speed={2} color="#ff6600" />
              </div>
            ) : (
              t("store.product.addToCart")
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default PublicAllProduct;
