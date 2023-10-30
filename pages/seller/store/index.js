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
import { GiConsoleController } from "react-icons/gi";

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
        <div className=" relative lg:h-[400px] md:h-[300px]  h-[200px] w-full box-border ">
          <Image
            src={sellerStoreData.store.image}
            alt={sellerStoreData.store.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
            className={`w-full h-full object-cover select-none pointer-events-none `}
          />
        </div>
      )}
       

       <div className="md:flex md:justify-between items-center mx-auto w-[90%] ">
        { sellerStoreData && (
          <div className="flex md:flex-row flex-col md:justify-start justify-center items-center my-10 ">
            <div className=" md:w-[200px] w-[200px] md:h-[200px] h-[200px]">
              <Image
                className=" shadow md:w-[90%] md:h-[90%] object-cover rounded-md"
                src={sellerStoreData.store.logo}
                alt={sellerStoreData.store.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            <div className="mx-6">
              <h1 className="text-4xl text-gray-800 font-medium capitalize">
              {sellerStoreData.store.name}
              </h1>
              <div className="flex flex-col justify-center items-center w-full pb-5">
                <div>
                  <div>
            
                  </div>
                  <div className="flex flex-col md:flex-row justify-start items-center gap-2 w-full">
                    <div className="md:text-2xl text-lg text-gray-500 font-medium">
                      <h3 className="my-2 capitalize">
                       opening days :
                      </h3>
                      {sellerStoreData.store.opening_days?.map(
                        (day, index) => {
                          return (
                            <span className="text-gray-400 mt-4">
                              {index !==
                             sellerStoreData.store.opening_days.length - 1
                                ? `${day} ,`
                                : day}
                            </span>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {sellerStoreData && (
          <div className="flex flex-col md:items-end items-center">
            <div>
              <h2 className="md:text-xl text-lg text-gray-600 font-medium my-2">
                Opening Time :
                <span className="text-gray-400 text-2xl  ">
              {" "}
              {convertTo12HourFormat(sellerStoreData.store.opening_time)}
            </span>
              </h2>
            </div>
            <div>
              <h2 className="md:text-xl text-lg text-gray-600 font-medium my-3">
                closing Time :
                <span className="text-gray-400 text-2xl  ">
              {convertTo12HourFormat(sellerStoreData.store.closing_time)}
            </span>
              </h2>
            </div>
          </div>
        )}
      </div>

      {/* <div className="flex flex-col justify-around items-stretch w-full">
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
      </div> */}

      <div className="flex justify-center bg-gray-200 w-full py-3 mb-10  ">
        <ul className="flex md:justify-center justify-start md:items-center items-start md:w-full w-[90%] mx-auto gap-6 md:overflow-auto overflow-x-scroll">
        {sellerStoreData && (
          <FilterCategories
            categories={sellerStoreData?.categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        )}
        </ul>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 gap-4 w-[90%] mx-auto ">
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




