import React, { useState, useEffect } from "react";
import Logo from "../../../../public/images/item2.jpg";
import Image from "next/image";
import Storeimage from "../../../../public/images/storeimage.jpg";
import FilterCategories from "@/components/SellerStore/filterCategory/filterCategories";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import ItemProduct from "../../../../public/images/kuala.jpg";
import { Router, useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import ProductCustomer from "@/components/ProductsCustomer/products";
import { convertTo12HourFormat } from "@/pages/seller/store";
import styles from "../../../../components/componentsStyling/sellerStorePage.module.css";
import { MdArrowForward, MdClose } from "react-icons/md";
import { useRef } from "react";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Products() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [storeId, setStoreId] = useState();
  const { t } = useTranslation("");

  const [searching, setSearching] = useState(false);
  const [inSearch, setInSearch] = useState(false);
  const [searchedResults, setSearchedResults] = useState();
  const searchRef = useRef();
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

  async function search() {
    setSearching(true);
    try {
      const response = await Api.post(
        `api/product/${storeId}/search`,
        {
          query: searchRef.current.value,
        },
        {
          noSuccessToast: true,
        }
      );
      const component =
        response.data.data.length < 1 ? (
          <div className="w-max mx-auto">{response.data.message}</div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-col-1 gap-4 w-[70%] mx-auto">
            {response.data.data.map((product) => {
              return <ProductCustomer key={product.id} product={product} />;
            })}
          </div>
        );
      setSearchedResults(component);
      setSearching(false);
      console.log(`product search`);
      console.log(response.data.data);
    } catch (error) {
      setSearching(false);
    }
    setSearching(false);
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

  // if (store) {
  //   console.log(store.data);
  //   console.log(`asdasd`);
  //   console.log(JSON.parse(store.data.store.opening_days));
  // }

  return (
    <div className="">
      {store && (
        <div className=" relative lg:h-[400px] md:h-[300px]  h-[200px] w-full box-border ">
          <Image
            src={store.data.store.image}
            alt="store"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
            className={`w-full h-full object-cover select-none pointer-events-none `}
          />
        </div>
      )}

      <div className="md:flex md:justify-between items-center mx-auto w-[90%] ">
        {store && (
          <div className="flex md:flex-row flex-col md:justify-start justify-center items-center my-10 ">
            <div className=" md:w-[200px] w-[200px] md:h-[200px] h-[200px]">
              <Image
                className=" shadow md:w-[90%] md:h-[90%] object-cover rounded-md"
                src={store.data.store.logo}
                alt="store"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            <div className="mx-6">
              <h1 className="text-4xl text-gray-800 font-medium capitalize">
                {store.data.store.name}
              </h1>
              <div className="flex flex-col justify-center items-center w-full pb-5">
                <div>
                  <div>
                    {/* <h2 className="md:text-2xl text-lg text-skin-primary font-medium  ">
                  {t("store.address")} :
                </h2> */}
                    <p className="text-gray-400 md:text-2xl text-base py-3 ">
                      {store.data.store.location}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-start items-center gap-2 w-full">
                    <div className="md:text-2xl text-lg text-gray-500 font-medium">
                      <h3 className="my-2 capitalize">
                        {t("store.openingDays")} :
                      </h3>
                      {JSON.parse(store.data.store.opening_days)?.map(
                        (day, index) => {
                          return (
                            <span className="text-gray-400 mt-4">
                              {index !==
                              store.data.store.opening_days.length - 1
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

        {store && (
          <div className="flex flex-col md:items-end items-center">
            <div>
              <h2 className="md:text-xl text-lg text-gray-600 font-medium my-2">
                {t("store.openingTime")} :
                <span className="text-gray-400 md:text-2xl text-lg  ">
                  {convertTo12HourFormat(store.data.store.opening_time)}
                </span>
              </h2>
            </div>
            <div>
              <h2 className="md:text-xl text-lg text-gray-600 font-medium my-3">
                {t("store.closingTime")} :
                <span className="text-gray-400 md:text-2xl text-lg  ">
                  {convertTo12HourFormat(store.data.store.closing_time)}
                </span>
              </h2>
            </div>
          </div>
        )}
      </div>

      <div
        className="w-[80%] flex justify-center items-center gap-2 mx-auto mb-7 "
        dir="ltr"
      >
        <div className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg px-2 border-2 border-transparent focus-within:border-skin-primary transition-all duration-700 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="w-full bg-gray-100 outline-none rounded-lg text-sm h-10  "
            type="text"
            ref={searchRef}
            placeholder={t("store.search")}
            onClick={() => {
              setInSearch(true);
            }}
          />
          <MdArrowForward
            onClick={search}
            className="hover:border-b-2 border-skin-primary cursor-pointer"
          />
        </div>
        {inSearch == true && (
          <MdClose
            className="text-red-500 hover:text-red-600 w-[25px] h-[25px] hover:border-b-2 hover:border-red-600 cursor-pointer "
            onClick={() => {
              setInSearch(false);
            }}
          />
        )}
      </div>

      {inSearch == false && (
        <div className="w-full">
          <div className="flex justify-center bg-gray-200 w-full py-3 mb-10  ">
            <ul className="flex justify-center items-center md:w-full w-[90%] mx-auto gap-6 md:overflow-auto overflow-x-scroll">
              {store && (
                <FilterCategories
                  categories={store.data?.categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={onSelectCategory}
                />
              )}
            </ul>
          </div>

          <div className="flex justify-center w-full">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-col-1 gap-4 w-[90%] mx-auto ">
              {store &&
                selectedCategoryData &&
                selectedCategoryData.products.map((product) => (
                  <ProductCustomer product={product} />
                ))}
            </div>
          </div>
        </div>
      )}

      {inSearch == true &&
        (searching == true ? (
          <div className="w-full h-full">
            <TawasyLoader width={300} height={300} />
          </div>
        ) : (
          <div className="w-full min-h-[500px]">
            {searchedResults && searchedResults}
          </div>
        ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const storeId = context.params.storeId;
  const Api = createAxiosInstance();
  try {
    const storeData = await Api.get(`/api/stores-with-products/${storeId}`);

    return {
      props: {
        storeData: storeData.data,
        ...(await serverSideTranslations(context.locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Error fetching store data:", error);

    return {
      notFound: true,
    };
  }
}

export default withLayoutCustomer(Products);

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }
