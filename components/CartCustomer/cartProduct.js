import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import image from "../../public/images/kuala.jpg";
import Image from "next/image";
import { convertMoney } from "../SellerOrders/sellerOrder";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useState } from "react";
import { Ring } from "@uiball/loaders";
import { useTranslation } from "next-i18next";

function CartProduct({ product, storeid, refetch }) {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const { t } = useTranslation("");
  const [isAdding, setIsAdding] = useState(false);
  const [isReducing, setIsReducing] = useState(false);
  //   const [quantity, setQuantity] = useState(product.quantity);
  let quantity = product.quantity;

  async function increaseQuantity() {
    setIsAdding(true);
    try {
      const response = await Api.post(`/api/customer/cart/add`, {
        product_id: product.product.id,
        store_id: storeid,
      });
      console.log(response);
      // setQuantity((prev) => {return prev+1});
      refetch();
      setIsAdding(false);
    } catch (error) {
      setIsAdding(false);
    }
    setIsAdding(false);
  }

  async function reduceQuantity() {
    setIsReducing(true);
    try {
      const response = await Api.post(`/api/customer/cart/remove`, {
        product_id: product.product.id,
      });
      console.log(response);
      refetch();
      setIsReducing(false);
    } catch (error) {
      setIsReducing(false);
    }
    setIsReducing(false);
  }

  return (
    <div className={`py-3 border-b-2 border-gray-300`}>
      <div className="flex gap-5 h-full  " key={product.product.id}>
        <div className="relative w-[20%]">
          {/* <div className="top-0 -translate-x-2.5 -translate-y-2.5 left-0 z-30  absolute bg-gray-400 border-1 text-center border-black hover:bg-red-600 w-[25px] h-[25px] rounded-full flex justify-center items-center ">
            <AiOutlineClose className="text-lg text-white " />
          </div> */}
          <Image
            // src={`https://as1.ftcdn.net/v2/jpg/01/05/57/38/1000_F_105573812_cvD4P5jo6tMPhZULX324qUYFbNpXlisD.jpg`}
            src={product.product.image}
            alt="product"
            className="rounded-xl object-contain "
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className=" flex flex-col justify-center items-start gap-2  w-[50%]">
          <h2 className=" text-gray-500 text-lg font-medium ">
            {product.product.name}
          </h2>
          <p className=" text-skin-primary text-base font-light ">
            {product.price} S.P
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-2 w-[30%]">
          <div className=" text-skin-primary flex items-center text-lg font-light">
            <div>{t("orders.totalPrice")} :</div>
            <div>{convertMoney(product.lineTotal)} S.P</div>
          </div>
          <div className="flex w-[70%] justify-around items-center">
            <button>
              {isReducing == true ? (
                <Ring size={20} lineWeight={5} speed={2} color="#ff6600" />
              ) : quantity != 1 ? (
                <AiOutlineMinus
                  className={`w-[24px] h-[24px] text-gray-500  transition-all duration-800 ${
                    isAdding == true
                      ? `cursor-not-allowed`
                      : `hover:text-skin-primary hover:border-b-2 hover:border-skin-primary`
                  } `}
                  onClick={reduceQuantity}
                />
              ) : (
                <AiOutlineDelete
                  className={`w-[24px] h-[24px] text-gray-500  transition-all duration-800 ${
                    isAdding == true
                      ? `cursor-not-allowed`
                      : `hover:text-red-600 hover:border-b-2 hover:border-red-500`
                  } `}
                  onClick={reduceQuantity}
                />
              )}
            </button>
            <span className=" font-medium text-gray-500 border-b-2 border-gray-500 px-2 ">
              {quantity}
            </span>
            <button>
              {isAdding == true ? (
                <Ring size={20} lineWeight={5} speed={2} color="#ff6600" />
              ) : (
                <AiOutlinePlus
                  className={`w-[24px] h-[24px] text-gray-500  transition-all duration-800 ${
                    isReducing
                      ? `cursor-not-allowed`
                      : `hover:text-skin-primary hover:border-b-2 hover:border-skin-primary`
                  } `}
                  onClick={increaseQuantity}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
