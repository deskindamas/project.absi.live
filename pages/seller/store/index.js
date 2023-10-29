import React, { useState, useEffect } from "react";
import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import SellerStore from "@/components/SellerStore/sellerStore";
// import Logo from "../../../public/images/logo-store.jpg";
import Logo from '../../../public/images/lego.png'
import Image from "next/image";
import Storeimage from "../../../public/images/storeimage.jpg";
import FilterCategories from "@/components/SellerStore/filterCategory/filterCategories";
// import styles from "../../../components/componentsStyling/sellerStyles.module.css";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import styles from "../../../components/componentsStyling/sellerStorePage.module.css";

export function convertTo12HourFormat(time24) {
  const timeParts = time24.split(":");
  const dateObj = new Date(0, 0, 0, timeParts[0], timeParts[1], timeParts[2]);
  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const time12 = `${hours}:${minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  })} ${ampm}`;

  return time12;
}

const Store = () => {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const {
    data: sellerStoreData,
    isLoading,
    isError,
    error,
    refetch , 
    isRefetching, 
  } = useQuery(`sellerStore`, fetchSellerStoreData, {
    staleTime: Infinity,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  async function fetchSellerStoreData() {
    const response = await Api.get(`/api/seller/store/products`);
    return response.data.data;
  }

  const [selectedCategory, setSelectedCategory] = useState(null);

  const onSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  useEffect(() => {
    if (sellerStoreData && sellerStoreData.categories.length > 0) {
      setSelectedCategory(sellerStoreData.categories[0].name);
    }
  }, [sellerStoreData]);

  let selectedCategoryData;

  if (sellerStoreData && selectedCategory) {
    selectedCategoryData = sellerStoreData.category.find(
      (category) => category.name === selectedCategory
    );
    console.log(selectedCategoryData);
  }

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={700} height={700} />
      </div>
    );
  }

 

  return (
    <div className="md:px-7 w-full h-full flex flex-col justify-start items-center ">
      {sellerStoreData && (
        <div className=" relative w-full box-content">
          <Image className="w-full h-[300px] " src={sellerStoreData.store.image} alt="store" width={130} height={130} />
          {/* <Image className="w-full " src={Storeimage} alt="store" /> */}
          <div className="pb-6">
            {/* <Image
              className=" shadow absolute z-10 md:bottom-20  right-10 rounded-full outline-none outline-2 w-[10%] h-[25%] outline-skin-primary object-cover "
              src={Logo}
              alt="store"
            /> */}
            <Image
            className=" shadow absolute z-10 md:bottom-20 object-cover  right-10 rounded-full"
            src={sellerStoreData.store.logo}
            alt="store"
            width={250}
            height={250}
          />
            <h1 className={styles.storeName}>{sellerStoreData.store.name}</h1>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-around items-stretch w-full">
        <div className="flex justify-around items-center border-b-2 border-skin-primary py-2 my-2">
          <div className="flex justify-start items-center w-full gap-2 px-4   ">
            <h2 className="text-2xl text-skin-primary font-medium  ">
              Opening Time :
            </h2>
            <span className="text-gray-400 text-2xl  ">
              {" "}
              {convertTo12HourFormat(sellerStoreData.store.opening_time)}
            </span>
          </div>
          <div className="flex justify-start items-center w-full gap-2 px-4  ">
            <h2 className="text-2xl text-skin-primary font-medium  ">
              Closing Time :
            </h2>
            <span className="text-gray-400 text-2xl  ">
              {convertTo12HourFormat(sellerStoreData.store.closing_time)}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center w-full pb-5">
          <h2 className="items-start text-xl text-gray-600 font-medium">
            Opening Days :
            {sellerStoreData.store.opening_days?.map((day, index) => {
              return (
                <span className="text-gray-400 uppercase px-2">
                  {index !== sellerStoreData.store.opening_days.length -1 ? `${day} ,` : day}
                </span>
              );
            })}
          </h2>
          <div> </div>
        </div>
      </div>

      <div className="flex justify-center bg-gray-200 w-full pt-3 pb-3 mb-10">
        {sellerStoreData && (
          <FilterCategories
            categories={sellerStoreData?.categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        )}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 ">
        {sellerStoreData &&
          selectedCategoryData &&
          selectedCategoryData.products.map((product) => (
            <SellerStore store={product} refetch = {() => {refetch();}} />
          ))}
      </div>
    </div>
  );
};

export default withLayout(Store);
