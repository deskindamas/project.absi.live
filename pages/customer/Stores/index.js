import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import React, { useRef, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import test from "@/public/images/flowers.jpeg";
import testlogo from "@/public/images/tawasylogo.png";
import PublicStoreCard from "@/components/CustomerPublicStores/PublicStore";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import createAxiosInstance from "@/API";
import { useRouter } from "next/router";
import TawasyLoader from "@/components/UI/tawasyLoader";
import { Ring } from "@uiball/loaders";
import { useQuery } from "react-query";
import { NextSeo } from "next-seo";



export async function getServerSideProps(context) {
  const { locale } = context;
  const Api = createAxiosInstance();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function PublicStore() {
  const {t} = useTranslation("");
  const router = useRouter();
  const Api = createAxiosInstance(router) ;
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: stores,
    isLoading,
    isFetching,
  } = useQuery(
    [`allStores`, currentPage],
    () => fetchAllStores(currentPage),
    { staleTime: 1, refetchOnMount: true, refetchOnWindowFocus: false , keepPreviousData : true }
  );

  async function fetchAllStores(currentPage) {
    try {
      return await Api.get(`/api/allstores?page=${currentPage}`);
    } catch (error) {}
  }

  function scroll (id) {
    document.querySelector(`#${id}`).scrollIntoView({behavior : 'smooth' });
  }
  // const searchRef = useRef();
  // const [searchedResults, setSearchedResults] = useState();
  // const [searching, setSearching] = useState(false);
  // const [inSearch, setInSearch] = useState(false);

  
  // async function search() {
  //   setSearching(true);
  //   try {
  //     const response = await Api.post(
  //       `api/allstores`,
  //       {
  //         search_term: searchRef.current.value,
  //       },
  //       {
  //         noSuccessToast: true,
  //       }
  //     );
  //     setSearchedStores(response.data);
  //     setSearching(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // console.log(`stores`);
  // console.log(stores);

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={500} height={500} />
      </div>
    );
  }

  return (
    <>
    <NextSeo 
      title={`${t("titles.allStores")} | ${t("titles.home")}`}
      description={t("descs.allStores")}
      canonical="https://tawasyme.com/customer/Stores"
    />
      <div className="">
        <div className="bg-gray-100 w-full px-5 py-3" id="top" >
          <h1 className="text-3xl text-gray-600 font-medium w-[90%] mx-auto">{t("stores.ALLStore")}</h1>
        </div>

        {/* <div className="flex justify-center items-center pt-5">
          <form className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg px-2 border-2 border-transparent focus-within:border-skin-primary transition-all duration-700 ">
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
            //  ref={searchRef}
              className="w-full bg-gray-100 outline-none rounded-lg text-sm h-10  "
              type="text"
              placeholder="Search Stores by name"
              // onClick={() => {
              //   setInSearch(true);
              // }}
              required
            />
            <button type="submit">
              <MdArrowForward
                // onClick={search}
                className="hover:border-b-2 border-skin-primary cursor-pointer"
              />
            </button>
          </form>
        </div> */}
        {/* {inSearch == true && (
            <MdClose
              className="text-red-500 hover:text-red-600 w-[25px] h-[25px] hover:border-b-2 hover:border-red-600 cursor-pointer "
              onClick={closeSearch}
            />
          )} */}

        <div className="w-[90%] mx-auto py-5 ">
          { stores.data.stores && stores.data.stores.length > 0 ? <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            { stores.data.stores && stores.data.stores.map((store) => {
              return <PublicStoreCard key={store.id} store={store} />;
            })}
          </div> : <div className="w-max mx-auto" >{t("stores.noStores")}</div>}
          {stores && stores.data.stores && stores.data.stores.length > 0 && stores.data.pagination && (
                <div className="w-fit mx-auto flex justify-center items-center h-max gap-4 py-4 ">
                  <button
                    className="px-2 py-1 bg-skin-primary text-white rounded-lg hover:bg-[#ff9100] disabled:opacity-50 disabled:cursor-not-allowed w-max"
                    onClick={() => {
                      setCurrentPage(stores.data.pagination.current_page - 1);
                      scroll(`top`);
                      // setCurrentPage(data.data.pagination.previousPage);
                    }}
                    disabled={
                      stores.data.pagination.current_page ===
                      stores.data.pagination.from
                    }
                  >
                    {t("stores.previousPage")}
                  </button>
                  { isFetching && <Ring size={20} lineWeight={5} speed={2} color="#222222" />}
                  <button
                    className="px-2 py-1 bg-skin-primary text-white rounded-lg hover:bg-[#ff9100] disabled:opacity-50 disabled:cursor-not-allowed w-max"
                    onClick={() => {
                      setCurrentPage(stores.data.pagination.current_page + 1);
                      scroll(`top`);
                    }}
                    disabled={
                      stores.data.pagination.current_page ===
                      stores.data.pagination.last_page
                    }
                  >
                   {t("stores.nextPage")}
                  </button>
                </div>
              )}

        </div>
      </div>
    </>
  );
}

export default withLayoutCustomer(PublicStore);

