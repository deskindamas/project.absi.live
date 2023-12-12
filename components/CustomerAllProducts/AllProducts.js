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
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { CarouselProduct } from "../ProductCarousel/CarouselProduct";
import Variations from "../VariationsCustomer/Variations";

const variation = [
  {
    id :1,
    option : "small , red" 
  },
  {
    id :2,
    option : "large , red"
  },
  {
    id :3,
    option : "small , green" 
  },
  {
    id :4,
    option : "small , red" 
  },
  {
    id :5,
    option : "large , red"
  },
  {
    id :6,
    option : "small , green" 
  },
  
]

function PublicAllProduct({ product , storeId }) {
  const { t } = useTranslation("");
  const router = useRouter();
  const dispatch = useDispatch();
  const Api = createAxiosInstance(router);
  const [adding, setAdding] = useState(false);
  const [open, openchange] = useState(false);

  const functionopenpopup = async () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
   

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const isButtonEnabled = selectedOption ? true : false;

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

  // console.log(product);

  return (
    <>
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
        <h1  onClick={functionopenpopup}
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

  <Dialog open={open} onClose={closepopup} fullWidth maxWidth="md">
     <DialogContent>
      <div>
     <div className="flex md:flex-row flex-col gap-4 items-center w-[100%]">
      <div className="md:w-[40%] w-[100%]">
        <CarouselProduct productDialog = {true} product={product} />
      </div>
      <div className="md:w-[60%] w-[100%]">
      <div className="w-full flex flex-col gap-2 justify-center sm:items-start items-center">
      <div className="flex md:flex-row flex-col justify-between w-full">
      <h1 className=" md:text-xl sm:text-lg text-lg w-[70%] text-gray-600 capitalize">
       {product.name}
       </h1>
      <p className="bg-gray-200 sm:text-lg  w-max text-sm h-max sm:flex-none flex py-2 px-2 text-gray-600 ">
       {convertMoney(product.price)} S.P
       </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.brand && product.brand && (
             <p className="md:text-base sm:text-base text-sm text-skin-primary border-2 border-skin-primary w-max px-5 rounded-full">
            {product.brand}
           </p>
         )}
        {product.category && product.category && (
         <p className=" md:text-lg sm:text-base text-sm text-skin-primary border-2 border-skin-primary w-max px-5 rounded-full">
          {product.category}
          </p>
          )}
        </div>

        <form className="my-2">
      <select 
        className="form-select mb-7 text-zinc-500 pl-2 outline-none"
        onChange={handleOptionChange}
      >
        <option disabled selected value>
          Select a Size and color
        </option>
        {variation.map((data) => (
          <option
            key={data.id}
            value={data.option}
            disabled={data.option === selectedOption}
          >
            {data.option}
          </option>
        ))}
      </select>

      <button
        className={`bg-skin-primary text-white w-[70%] py-1 rounded-md ${isButtonEnabled ? '' : 'cursor-not-allowed'}`}
        onClick={addToCart}
        disabled={!isButtonEnabled}
      >
        Add to Cart
      </button>
    </form>
           
        </div>

      </div>

      </div>
      </div>
   </DialogContent>
   </Dialog>
       </>
  );
}

export default PublicAllProduct;
