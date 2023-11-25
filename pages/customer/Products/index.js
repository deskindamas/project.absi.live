import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import test from "@/public/images/flowers.jpeg";
import PublicAllProduct from "@/components/CustomerAllProducts/AllProducts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import products from "@/pages/seller/products";
import createAxiosInstance from "@/API";
import { useState } from "react";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import { Ring } from "@uiball/loaders";

export async function getServerSideProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function AllProducts() {
  const { t } = useTranslation("");
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery(
    [`allProducts`, currentPage],
    () => fetchAllProducts(currentPage),
    { staleTime: 1, refetchOnMount: true, refetchOnWindowFocus: false , keepPreviousData : true }
  );

  async function fetchAllProducts(currentPage) {
    try {
      return await Api.get(`/api/allproducts?page=${currentPage}`);
    } catch (error) {}
  }


  function scroll (id) {
    document.querySelector(`#${id}`).scrollIntoView({behavior : 'smooth' });
  }

  if(products){
    console.log(products)
  }

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={500} height={500} />
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="bg-gray-100 w-full py-3" id="top">
          <h1 className="text-3xl text-gray-600 font-medium w-[90%] mx-auto" >
            {t("products.ALLProducts")}
          </h1>
        </div>
        {/* <div className="flex justify-center items-center pt-5">
          <form className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg px-2 border-2 border-transparent transition-all duration-700 ">
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
              placeholder={t("products.SearchALLProducts")}
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

        <div className="w-[90%] mx-auto py-5">
          {products.data.products && products.data.products.length > 0 ? (
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-7 mx-auto  ">
              {products.data.products &&
                products.data.products.map((product) => (
                  <PublicAllProduct key={product.id} product={product} />
                ))}
            </div>
            
          ) : (
            <div> There are no products . </div>
          )}
          {products && products.data.pagination && (
                <div className="w-fit mx-auto flex justify-center items-center h-max gap-4 py-4 ">
                  <button
                    className="px-2 py-1 bg-skin-primary text-white rounded-lg hover:bg-[#ff9100] disabled:opacity-50 disabled:cursor-not-allowed w-max"
                    onClick={() => {
                      setCurrentPage(products.data.pagination.current_page - 1);
                      scroll(`top`);
                      // setCurrentPage(data.data.pagination.previousPage);
                    }}
                    disabled={
                      products.data.pagination.current_page ===
                      products.data.pagination.from
                    }
                  >
                    Previous Page
                  </button>
                  { isFetching && <Ring size={20} lineWeight={5} speed={2} color="#222222" />}
                  <button
                    className="px-2 py-1 bg-skin-primary text-white rounded-lg hover:bg-[#ff9100] disabled:opacity-50 disabled:cursor-not-allowed w-max"
                    onClick={() => {
                      setCurrentPage(products.data.pagination.current_page + 1);
                      scroll(`top`);
                      // setCurrentPage(data.data.pagination.nextPage);
                    }}
                    disabled={
                      products.data.pagination.current_page ===
                      products.data.pagination.last_page
                    }
                  >
                    Next Page
                  </button>
                </div>
              )}
        </div>
      </div>
    </>
  );
}

export default withLayoutCustomer(AllProducts);
