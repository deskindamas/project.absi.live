import TiltCard from "@/components/UI/TileCard";
import TawasyLoader from "@/components/UI/tawasyLoader";
import image from "../../public/images/supermarket.jpeg";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import StoreTypeComponent from "@/components/customerCommponents/StoreTypeComponent/StoreTypeComponent";
import Image from "next/image";
import { ResponsiveCarousel } from "@/components/CarouselCustomer/carousel";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import { useRef, useState } from "react";
import { MdArrowForward, MdClose } from "react-icons/md";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function CustomerPage() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const searchRef = useRef();
  // const [searchedProducts, setSearchedProducts] = useState();
  const [searchedResults, setSearchedResults] = useState();
  const [searchType, setSearchType] = useState(`storeType`);
  const [inSearch, setInSearch] = useState(false);
  const [searching, setSearching] = useState(false);
  const { t } = useTranslation("");

  const { data, isLoading, isError, error } = useQuery(
    `mainPage`,
    fetchMainPage,
    { refetchOnMount: true, refetchOnWindowFocus: false, staleTime: 1 }
  );

  // let searchResult ;

  async function fetchMainPage() {
    try {
      return await Api.get(`/api/store-types`);
    } catch (error) {}
  }

  async function search() {
    console.log(searchType);
    if (searchRef.current.value) {
      setSearching(true);
      switch (searchType) {
        case `storeType`:
          try {
            const { data: storeTypes } = await Api.post(
              `/api/store-types/search`,
              {
                query: searchRef.current.value,
              },
              {
                noSuccessToast: true,
              }
            );
            console.log(storeTypes);
            const components = (
              <div className="flex flex-col justify-start items-center h-full w-full gap-4 ">
                <p className="font-mohave text-4xl text-skin-primary py-5">
                {t("home.storeTypes")} :
                </p>
                {storeTypes.message ? (
                  <div className="w-[80%] mx-auto text-lg text-center">
                    {storeTypes.message}
                  </div>
                ) : (
                  <div className=" w-[70%] grid grid-cols md:grid-cols-4 sm:grid-cols-3  grid-cols-1 gap-y-6 gap-x-6 pb-20 ">
                    {storeTypes?.map((storeType) => {
                      return (
                        <StoreTypeComponent
                          key={storeType.id}
                          storeType={storeType}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            );
            setSearchedResults(components);
            setSearching(false);
          } catch (error) {
            setSearching(false);
          }
          break;
        case `category`:
          try {
            const { data: categoryStores } = await Api.post(
              `/api/category/search`,
              {
                category_name: searchRef.current.value,
              },
              {
                noSuccessToast: true,
              }
            );
            const components = (
              <div className="flex flex-col justify-start items-center h-full w-full gap-4 ">
                <p className="font-mohave text-4xl text-skin-primary py-5">
                {t("home.stores")} :
                </p>
                {categoryStores.message ? (
                  <div className="w-[80%] mx-auto text-lg text-center">
                    {categoryStores.message}
                  </div>
                ) : (
                  <div className=" w-[70%] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-col-1 gap-4 mx-auto ">
                    {categoryStores?.data?.map((store) => {
                      return <StoreComponent key={store.id} store={store} />;
                    })}
                  </div>
                )}
              </div>
            );
            // console.log(`component result`);
            // console.log(components);
            setSearchedResults(components);
            setSearching(false);
          } catch (error) {
            setSearching(false);
          }
          break;
        case `brand`:
          try {
            const { data: brandStores } = await Api.get(
              `/api/brands/search`,
              {
                params: {
                  query: searchRef.current.value,
                },
              },
              {
                noSuccessToast: true,
              }
            );
            const components = (
              <div className="flex flex-col justify-start items-center h-full w-full gap-4 ">
                <p className="font-mohave text-4xl text-skin-primary py-5">
                {t("home.stores")} :
                </p>
                {brandStores.message && brandStores.data.length < 1 ? (
                  <div className="w-[80%] mx-auto text-lg text-center">
                    {brandStores.message}
                  </div>
                ) : (
                  <div className=" w-[70%] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-col-1 gap-4 mx-auto ">
                    {brandStores?.data?.map((store) => {
                      return <StoreComponent key={store.id} store={store} />;
                    })}
                  </div>
                )}
              </div>
            );
            setSearchedResults(components);
            setSearching(false);
          } catch (error) {
            setSearching(false);
          }
          break;
      }
    } else {
      return;
    }
  }

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={400} height={400} />
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-full">
        {data && (
          <div className="flex flex-col justify-start items-center h-full w-full gap-4 ">
            <div className="mx-auto w-full border-b-2 border-skin-primary pb-3 " dir="ltr" >
              <ResponsiveCarousel />
            </div>

            <div className="w-[80%] flex justify-center items-center gap-2 mx-auto " dir="ltr">
              <div className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg px-2 border-2 border-transparent focus-within:border-skin-primary transition-all duration-700 ">
                <select
                  value={searchType}
                  onChange={(e) => {
                    setSearchType(e.target.value);
                  }}
                  className="bg-gray-100 outline-none text-sm h-10 mx-2 px-2"
                >
                  <option value="storeType">{t("home.storeType")}</option>
                  <option value="category">{t("home.category")}</option>
                  <option value="brand">{t("home.brand")}</option>
                </select>
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
                  className="w-full bg-gray-100 outline-none rounded-lg text-sm h-10"
                  type="text"
                  ref={searchRef}
                  placeholder={t("home.search")}
                  onClick={() => {
                    setInSearch(true);
                  }}
                />
                <MdArrowForward
                  className="hover:border-b-2 border-skin-primary cursor-pointer"
                  onClick={search}
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

            {inSearch === false && (
              <div className="flex flex-col justify-start items-center h-full w-full gap-4">
                <div className=" font-mohave text-4xl text-skin-primary py-5 ">
                {t("home.discover")}
                </div>
                <div className=" w-[70%] h-[60%] grid grid-cols md:grid-cols-4 sm:grid-cols-3  grid-cols-1 gap-y-6 gap-x-6 pb-20 ">
                  {data?.data?.data.map((storeType) => {
                    return (
                      <StoreTypeComponent
                        key={storeType.id}
                        storeType={storeType}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            {inSearch && (
              <div className="min-h-[500px] h-auto w-full ">
                {/* {searchedResults && searchedResults} */}
                {searching ? (
                  <div className="w-full h-auto">
                    <TawasyLoader width={300} height={300} />
                  </div>
                ) : (
                  searchedResults && searchType && searchedResults
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default withLayoutCustomer(CustomerPage);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}