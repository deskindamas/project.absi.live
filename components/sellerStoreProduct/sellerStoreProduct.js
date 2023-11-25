import Image from "next/image";
import React, { useEffect, useRef } from "react";
import kuala from "@/public/images/kuala.jpg";
import { useTranslation } from "next-i18next";
import logo from "@/public/images/tawasylogo.png";
// import { useRouter } from "next-translate-routes";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { Ring } from "@uiball/loaders";
import Link from "next/link";
import { useState } from "react";
import Cookies from "js-cookie";
import { MdCheck, MdClose, MdModeEdit } from "react-icons/md";
import { convertMoney } from "../SellerOrders/sellerOrder";

function SellerStoreProduct({ product }) {
  const { t } = useTranslation("");
  const router = useRouter();
  const [price, setPrice] = useState();
  const [editingPrice, setEditingPrice] = useState(false);
  const [savingPrice, setSavingPrice] = useState(false);
  const newPriceRef = useRef();
  const storeId = Cookies.get("Sid");
  const Api = createAxiosInstance(router);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setPrice(product.price);
    }
  }, [product]);

  async function savePrice() {
    setSavingPrice(true);
    try {
      const response = await Api.put(
        `api/seller/store/${storeId}/product/${product.id}/price`,
        {
          price: newPriceRef.current.value,
        }
      );
      setPrice(newPriceRef.current.value);
      setSavingPrice(false);
      setEditingPrice(false);
      refetch();
    } catch (error) {
      // console.log(error);
    }
    setSavingPrice(false);
    setEditingPrice(false);
  }

  return (
    <div className="shadow-lg flex flex-col sm:w-fit max-w-[288px] border-2 md:min-h-[406px] min-h-[381px] border-gray-200 rounded-md ">
      <Link href={`/customer/Products/${product.slug}`} legacyBehavior>
        <a
          target="_blank"
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
          className="capitalize md:text-xl text-base text-gray-600 font-medium md:h-[50%] text-ellipsis line-clamp-3 "
          title={product.name}
        >
          {product.name}
        </h1>
        <p className="text-skin-primary text-lg md:h-[20%] ">{product.brand}</p>
        { price && <div className="flex justify-end gap-3">
          {editingPrice == true ? (
            <input
              type="text"
              className="text-white rounded-md w-24 bg-skin-primary placeholder:text-white focus:outline-none px-2 py-1 text-sm  "
              defaultValue={convertMoney(price)}
              ref={newPriceRef}
            />
          ) : (
            <span className="text-white rounded-md w-24 flex justify-center items-center  bg-skin-primary">
              {convertMoney(price)}
            </span>
          )}
          {editingPrice === true ? (
            <div className="flex items-center">
              {savingPrice === true ? (
                <div className="">
                  <Ring size={18} lineWeight={5} speed={2} color="#ff6600" />
                </div>
              ) : (
                <MdCheck
                  className="w-[25px] h-[25px] text-green-600 hover:text-green-500 "
                  onClick={savePrice}
                />
              )}
              <MdClose
                className="w-[25px] h-[25px] text-red-600 hover:text-red-500"
                onClick={() => {
                  setEditingPrice(false);
                }}
              />
            </div>
          ) : (
            <MdModeEdit
              className="w-[25px] h-[25px] bg-gray-400 text-white p-[3px] rounded-[50%]"
              onClick={() => {
                setEditingPrice(true);
              }}
            />
          )}
        </div>}
      </div>
    </div>
  );
}

export default SellerStoreProduct;
