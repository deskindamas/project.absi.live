import createAxiosInstance from "@/API";
import OrdersCustomer from "@/components/OrdersCustomer/orders";
import TawasyLoader from "@/components/UI/tawasyLoader";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
// import {useTranslation} from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import grayLogo from '../../../public/images/logo-tawasy--gray.png' ;
import { NextSeo } from "next-seo";

const Orders = () => {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  // const { t } = useTranslation("");

  const { data: orders, isLoading , refetch } = useQuery(`Orders`, fetchOrders, {
    staleTime: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  async function fetchOrders() {
    return await Api.get(`/api/customer/orders`);
  }

  const orderdetails = [
    {
      id: 1,
      storeName: "lorem",
      status: "....",
      date: "12/3/2023",
      totalPrice: "4000",
    },
    {
      id: 2,
      storeName: "lorem2",
      status: "....",
      date: "12/4/2023",
      totalPrice: "3000",
    },
    {
      id: 3,
      storeName: "lorem3",
      status: "....",
      date: "12/5/2023",
      totalPrice: "1500",
    },
    {
      id: 3,
      storeName: "lorem3",
      status: "....",
      date: "12/5/2023",
      totalPrice: "400",
    },
  ];

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
        title={`Tawasy Shopping - My Orders`}
        description={`View my Tawasy Shopping Orders`}
      />
      <div className="md:px-28 px-3 py-4">
        <div>
          <h1 className="font-medium text-3xl mb-4 text-gray-500 my-">
            {`All Orders`}
            {/* {t("orders.allOrders")} */}
          </h1>
        </div>
        {/* <div className="flex justify-center items-center w-full">
          <form className="w-full my-4">
            <div className="flex bg-gray-50 pt-1 pb-1 sm:w-2/5 items-center rounded-lg mb-4 mr-4 border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mx-2"
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
                className="w-full  bg-gray-50 outline-none border-transparent text-gray-700 focus:border-transparent focus:ring-0 rounded-lg text-sm h-8"
                type="text"
                placeholder="Search a product "
              />
            </div>
          </form>
        </div> */}
        {orders && orders.data.orders && orders.data.orders.length > 0 ? (
          <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 ">
            {orders.data.orders.map((order) => {
              return <OrdersCustomer key={order.order_id} order={order} refetch = {() => {
                // console.log(`refetching`);
                refetch();
              }} />;
            })}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center text-2xl text-gray-600 ">
            <Image
              src={grayLogo}
              alt="gray Tawasy"
              className="w-[20%] h-auto "
            />
            {`You have no orders yet.`}
            {/* {t("orders.orderDetails.noOrders")} */}
          </div>
        )}
      </div>
    </>
  );
};

export default withLayoutCustomer(Orders);

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }