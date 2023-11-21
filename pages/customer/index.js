import TiltCard from "@/components/UI/TileCard";
import TawasyLoader from "@/components/UI/tawasyLoader";
import image from "../../public/images/app_view_iphone_en.png";
import images from "../../public/images/12084790_20943943.jpg";
import imagee from "../../public/images/6163184_2502.jpg";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import StoreTypeComponent from "@/components/customerCommponents/StoreTypeComponent/StoreTypeComponent";
import Image from "next/image";
import { ResponsiveCarousel } from "@/components/CarouselCustomer/carousel";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useRef, useState } from "react";
import { MdArrowForward, MdClose } from "react-icons/md";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { FadingCarousel } from "@/components/FadingCarouselCustomer/FadinCarousel";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { params, locale } = context;
  const Api = createAxiosInstance();
  const response = await Api.get(`/api/store-types`, {
    headers: { "Accept-Language": locale || "en" },
  });
  if (!response.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data: response.data,
    },
  };
}

function CustomerPage({ data }) {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const searchRef = useRef();
  // const [searchedProducts, setSearchedProducts] = useState();
  const [searchedResults, setSearchedResults] = useState();
  const [searchType, setSearchType] = useState(`storeType`);
  const [inSearch, setInSearch] = useState(false);
  const [searching, setSearching] = useState(false);
  const { t } = useTranslation("");

  // const { data, isLoading, isError, error } = useQuery(
  //   `mainPage`,
  //   fetchMainPage,
  //   { refetchOnMount: true, refetchOnWindowFocus: false, staleTime: 1 }
  // );

  // let searchResult ;

  async function fetchMainPage() {
    try {
      return await Api.get(`/api/store-types`);
    } catch (error) {}
  }

  async function search(e) {
    e.preventDefault();
    // console.log(searchType);
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
            // console.log(storeTypes);
            const components = (
              <div className="flex flex-col justify-start items-center h-full w-full gap-4 ">
                <p className=" text-4xl text-skin-primary py-5">
                  {/* {`Store Types`} : */}
                  {t("home.storeTypes")} :
                </p>
                {storeTypes.message ? (
                  <div className="w-[80%] mx-auto text-lg text-center">
                    {storeTypes.message}
                  </div>
                ) : (
                  <div
                    className=" w-[70%] grid grid-cols md:grid-cols-4 sm:grid-cols-3  grid-cols-1 gap-y-6 gap-x-6 pb-20 "
                    dir="ltr"
                  >
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
                <p className=" text-4xl text-skin-primary py-5">
                  {/* {`Stores`} : */}
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
            const { data: brandStores } = await Api.post(
              `/api/brands/search`,
              {
                query: searchRef.current.value,
              },
              {
                noSuccessToast: true,
              }
            );
            const components = (
              <div className="flex flex-col justify-start items-center h-full w-full gap-4 ">
                <p className="text-4xl text-skin-primary py-5">
                  {/* {`Stores`} : */}
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

  // if(data){
  //   console.log(data);
  // }

  // if (isLoading) {
  //   return (
  //     <div className="w-full h-full">
  //       <TawasyLoader width={400} height={400} />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="w-full h-full">
        {data && (
          <div className="relative flex flex-col justify-start items-center h-full w-full gap-4 ">
            {data && data.ads && (
              <div className="mx-auto w-full max-h-[540px] pb-3 " dir="ltr">
                <FadingCarousel ads={data.ads} />
                {/* <ResponsiveCarousel ads={data.ads} /> */}
              </div>
            )}

            <div
              className="absolute top-[13%] w-[80%] flex justify-center items-center gap-2 mx-auto "
              dir="ltr"
            >
              <form
                onSubmit={search}
                className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg px-2 border-2 border-transparent focus-within:border-skin-primary transition-all duration-700 "
              >
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
                  {/* <option value="storeType">{`Store Type`}</option>
                  <option value="category">{`Category`}</option>
                  <option value="brand">{`Brand`}</option> */}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="w-full bg-gray-100 outline-none rounded-lg text-sm h-10"
                  type="text"
                  ref={searchRef}
                  // placeholder={`Search`}
                  placeholder={t("home.search")}
                  onClick={() => {
                    setInSearch(true);
                  }}
                />
                <button type="submit">
                  <MdArrowForward
                    className="hover:border-b-2 border-skin-primary cursor-pointer"
                    onClick={search}
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

            {inSearch === false && (
              <div className="flex flex-col justify-start items-center h-full w-full space-y-5">
                <h2 className=" md:text-4xl text-2xl text-black py-5 ">
                  {/* {`Discover Oxur Store Types`} */}
                  {t("home.discover")}
                </h2>
                {data && data.data ? (
                  <div className=" sm:w-[80%] w-[90%] h-[60%] grid grid-cols 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1  grid-cols-1 gap-y-6 gap-x-6 pb-20 ">
                    {data.data.map((storeType) => {
                      return (
                        <StoreTypeComponent
                          key={storeType.id}
                          storeType={storeType}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="w-max mx-auto text-lg">
                    {" "}
                    {data.message
                      ? data.message
                      : `There are no storeTypes`}{" "}
                  </div>
                )}
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
            <div className="flex flex-col  py-6 w-full md:mb-5 ">
              <h2 className="text-3xl text-gray-600 text-center">Join us</h2>
              <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                <Link
                  href={`/signup?user=seller`}
                  className="flex flex-row space-x-2 justify-start my-3 border border-gray-300 shadow-xl md:w-[35%] md:h-fit "
                >
                  <div className="w-[50%]">
                    <Image
                      src={imagee}
                      alt=""
                      width={150}
                      height={150}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center mx-auto">
                    <h1 className="text-2xl text-gray-600">Sign Up a Seller</h1>
                    <p>Reach more customers and achieve growth with us</p>
                  </div>
                </Link>

                <Link
                  href={`/signup?user=customer`}
                  className="flex flex-row space-x-2 justify-start my-3 border border-gray-300 shadow-xl md:w-[35%] md:h-fit "
                >
                  <div className="w-[50%]">
                    <Image
                      src={images}
                      alt=""
                      width={150}
                      height={150}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center mx-auto">
                    <h1 className="text-2xl text-gray-600">
                      Sign Up a Customer
                    </h1>
                    <p>Reach more customers and achieve growth with us</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex md:flex-row overflow-clip flex-col w-[70%] gap-3 items-center justify-center ">
              <div className="md:w-[350px] w-auto md:h-[300px] h-auto">
                <Image
                  src={image}
                  // className="w-full object-contain object-center transform transition duration-1000 "
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className=" object-cover "
                />
              </div>
              <div className="flex flex-col gap-2 md:mx-7 mx-2 md:my-0 my-2">
                <h1 className="text-3xl text-gray-600 font-medium text-center">
                  Discover the Tawasy app
                </h1>
                <p className="text-gray-500 md:my-3">
                  Get what you need, when you need it.
                </p>
                <button className="border-2 border-skin-primary py-2 px-5 text-skin-primary rounded-md">
                  Download App
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default withLayoutCustomer(CustomerPage);

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }
