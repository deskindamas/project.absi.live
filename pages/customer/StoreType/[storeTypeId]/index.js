import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import Image from "next/image";
import { ResponsiveCarousel } from "@/components/CarouselCustomer/carousel";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import createAxiosInstance from "@/API";
import TawasyLoader from "@/components/UI/tawasyLoader";
import { MdArrowForward, MdClose } from "react-icons/md";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getServerSideProps(context) {
  // const router = useRouter();
  const { params , locale } = context;
  const Api = createAxiosInstance();
    const response = await Api.get(`/api/store-types/${params.storeTypeId}` , {
      headers : { 'Accept-Language': locale || 'en',}
    });
    console.log(response);
    console.log(response.status);
    if (!response.data.data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
        stores: response.data,
      },
    };
}

const StoreType = ({ stores }) => {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [searching, setSearching] = useState(false);
  const [inSearch, setInSearch] = useState(false);
  const [searchedResults, setSearchedResults] = useState();
  const searchRef = useRef();
  const { t } = useTranslation("");

  const [storeTypeId, setStoreTypeId] = useState();
  // const {
  //   data: stores,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery([`stores`, storeTypeId], fetchStores, {
  //   staleTime: 1,
  //   refetchOnMount: true,
  //   refetchOnWindowFocus: false,
  //   enabled: Boolean(storeTypeId) == true,
  // });

  async function fetchStores() {
    try {
      return await Api.get(`/api/store-types/${storeTypeId}`);
    } catch (error) {}
  }

  useEffect(() => {
    const sti = router.query.storeTypeId;
    if (router.query.storeTypeId) {
      setStoreTypeId(sti);
    }
  }, [router.query.storeTypeId]);

  async function search(e) {
    e.preventDefault();
    setSearching(true);
    try {
      const { data: stores } = await Api.post(
        `/api/stores/search`,
        {
          query: searchRef.current.value,
        },
        {
          noSuccessToast: true,
        }
      );
      const component =
        stores.message && stores.data.length < 1 ? (
          <div className="w-[80%] mx-auto text-lg text-center">
            {stores.message}
          </div>
        ) : (
          <div
            className={`w-[70%] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-col-1 gap-4 mx-auto`}
          >
            {stores?.data?.map((store) => {
              return <StoreComponent key={store.id} store={store} />;
            })}
          </div>
        );
      setSearchedResults(component);
      setSearching(false);
    } catch (error) {
      setSearching(false);
    }
    setSearching(false);
  }

  // if (isLoading) {
  //   return (
  //     <div className="w-full h-full">
  //       <TawasyLoader width={400} height={400} />
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* { stores && <NextSeo
        title={`Tawasy Shopping - ${stores.data.data.store_type.name}`}
        description={`Tawasy Shopping store type ${stores.data.data.store_type.name}`}
        openGraph={{
          title: stores.data.data.store_type.name,
          description: "shop from our stores that cover a whole combination of categories from our store types",
          images: [
            {
              url: stores.data.store.image,
              alt: stores.data.store.name, 
            },
          ],
          type: 'store type', 
          url: `https://tawasy.com/customer/StoreType/${storeTypeId}`,
        }}
      />} */}
      {stores && stores.data.ads && (
        <div className="mx-auto w-full  " dir="ltr">
          <ResponsiveCarousel ads={stores.data.ads} />
        </div>
      )}
      <div className="md:mx-20 shadow-lg shadow-gray-500 pb-5 mb-6 ">
        {stores && (
          <div className="flex w-full h-full px-5 py-2 bg-gray-200 my-7">
            <div className="w-full">
              <h1 className="md:text-3xl text-xl font-medium text-black">
                {stores.data.store_type.name}
              </h1>
            </div>
          </div>
        )}

        <div
          className="w-[80%] flex justify-center items-center gap-2 mx-auto mb-7 "
          dir="ltr"
        >
          <form
            onSubmit={search}
            className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg px-2 border-2 border-transparent focus-within:border-skin-primary transition-all duration-700 "
          >
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
              // placeholder={`Search`}
              placeholder={t("store.search")}
              onClick={() => {
                setInSearch(true);
              }}
            />
            <button type="submit">
              <MdArrowForward
                // onClick={search}
                className="hover:border-b-2 border-skin-primary cursor-pointer"
              />
            </button>
          </form>
          {inSearch == true && (
            <MdClose
              className="text-red-500 hover:text-red-600 w-[25px] h-[25px] hover:border-b-2 hover:border-red-600 cursor-pointer "
              onClick={() => {
                setInSearch(false);
              }}
            />
          )}
        </div>

        <div className="">
          {inSearch == false && (
            <div
              className={`w-[70%] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-col-1 gap-4 mx-auto `}
            >
              {stores &&
                stores.data.stores.map((store) => {
                  return <StoreComponent key={store.id} store={store} />;
                })}
            </div>
          )}
          {inSearch == true && (
            <div className="min-h-[300px]">
              {inSearch == true &&
                (searching ? (
                  <div className="w-max h-auto mx-auto ">
                    <TawasyLoader width={300} height={300} />
                  </div>
                ) : (
                  searchedResults && searchedResults
                  // </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const storeTypeId = context.params.storeTypeId;
//   const Api = createAxiosInstance();
//   try {
//     const storeData = await Api.get(`/api/store-types/${storeTypeId}`);

//     return {
//       props: {
//         storeData: storeData.data,
//         ...(await serverSideTranslations(context.locale, ["common"])),
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching store data:", error);

//     return {
//       notFound: true,
//     };
//   }
// }

export default withLayoutCustomer(StoreType);

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }

// export async function getStaticPaths () {
//   const Api = createAxiosInstance();
//   const response = await Api.get(`/api/store-types`);
//   // console.log(response);
//   const paths = response.data.data.map((storeType) => {
//     return {
//       params : {
//         storeTypeId : `${storeType.id}`
//       }
//     }
//   })
//   return {
//     paths,
//     fallback : true
//   }
// }
