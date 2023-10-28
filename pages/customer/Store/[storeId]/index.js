import React, { useState, useEffect } from "react";
import Logo from "../../../../public/images/item2.jpg";
import Image from "next/image";
import Storeimage from "../../../../public/images/storeimage.jpg";
import FilterCategories from "@/components/SellerStore/filterCategory/filterCategories";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import ItemProduct from "../../../../public/images/kuala.jpg";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import ProductCustomer from "@/components/ProductsCustomer/products";
import { convertTo12HourFormat } from "@/pages/seller/store";
import styles from '../../../../components/componentsStyling/sellerStorePage.module.css' ;
import url from "@/URL";

function Products() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [storeId, setStoreId] = useState();
  const {
    data: store,
    isLoading,
    isError,
    error,
  } = useQuery([`storePage`, storeId], fetchStorePage, {
    staleTime: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: Boolean(storeId) == true,
  });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  useEffect(() => {
    const bb = router.query.storeId;
    if (bb) {
      setStoreId(bb);
    }
  }, [router.query.storeId]);

  useEffect(() => {
    if (store && store.data.categories.length > 0) {
      setSelectedCategory(store.data.categories[0].name);
    }
  }, [store]);
  
  async function fetchStorePage() {
    try {
      return await Api.get(`/api/stores-with-products/${storeId}`);
    } catch {}
  }

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={400} height={400} />
      </div>
    );
  }



  let selectedCategoryData;

  if (store && selectedCategory) {
    selectedCategoryData = store.data.category.find(
      (category) => category.name === selectedCategory
    );
    console.log(selectedCategoryData);
  }

  if (store) {
    console.log(store.data);
    console.log(`asdasd`);
    console.log(JSON.parse(store.data.store.opening_days));
  }

  return (
    <div>
      <div className=" w-full h-full flex flex-col justify-start items-center ">
        {store && (
          <div className=" relative lg:h-[400px] md:h-[300px] h-auto w-full box-border ">
            <Image
              src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              // src={store.data.store.image}
              // src={Storeimage}
              alt="store"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }} // optional
              className={`w-full h-full object-cover select-none pointer-events-none `}
            />
            <div className="absolute z-10 lg:bottom-10 md:bottom-5 sm:bottom-3 bottom-1 md:right-10 right-2 flex justify-end md:w-[200px] w-[100px] md:h-[200px] h-[100px]">
            <Image
              className=" shadow rounded-full md:w-[90%] md:h-[90%]"
              src= 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
              // src={store.data.store.logo}
              // src={Logo}
              alt="store"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
            </div>
          </div>
        )}

        <div className="flex justify-start w-full ml-6">
        <h1>
         hgops;;pfl
         </h1> 
        </div>

        {store && (
          <div className="flex flex-col justify-around items-stretch w-full pb-5">
            <div className="md:flex md:justify-around flex flex-col justify-around items-start md:items-center gap-3 ">
              <div className="flex justify-start items-center w-full gap-2 px-4   ">
                <h2 className="md:text-2xl text-lg text-skin-primary font-medium  ">
                  Opening Time :
                </h2>
                <span className="text-gray-400 md:text-2xl text-lg  ">
                  {convertTo12HourFormat(store.data.store.opening_time)}
    
                </span>
              </div>
              <div className="flex justify-start items-center w-full gap-2 px-4  ">
                <h2 className="md:text-2xl text-lg text-skin-primary font-medium  ">
                  Closing Time :
                </h2>
                <span className="text-gray-400 md:text-2xl text-lg  ">
                  {convertTo12HourFormat(store.data.store.closing_time)}
                  {/* 645654 */}
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-start items-center w-full gap-2 px-4  ">
                <h2 className="md:text-2xl text-lg text-skin-primary font-medium  ">
                  Address :
                </h2>
                <span className="text-gray-400 md:text-2xl text-base  ">
                  {store.data.store.location}
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-start items-center gap-2 w-full px-4">
                <h2 className="md:text-2xl text-lg text-skin-primary font-medium">
                  Opening Days :
                  {JSON.parse(store.data.store.opening_days)?.map(
                    (day, index) => {
                      return (
                        <span className="text-gray-400 px-2">
                          {index !== store.data.store.opening_days.length - 1
                            ? `${day} ,`
                            : day}
                        </span>
                      );
                    }
                  )}
                </h2>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center bg-gray-200 w-full pt-3 pb-3 mb-10">
          <ul className="flex flex-wrap items-center">
          {store && (
          <FilterCategories
            categories={store.data?.categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        )}
          </ul>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-col-1 gap-4 ">
        {store &&
          selectedCategoryData &&
          selectedCategoryData.products.map((product) => (
            <ProductCustomer product = {product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withLayoutCustomer(Products);
