import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import createAxiosInstance from "@/API";
import TawasyLoader from "@/components/UI/tawasyLoader";
import withLayoutAdmin from "@/components/UI/adminLayout";
import OrderAdmin from "@/components/AdminOrders/OrderAdmin";

const tableheading = [
  {
    heading: "Store Name",
  },
  {
    heading: "Customer Name ",
  },
  {
    heading: "Status",
  },
  {
    heading: "Shipping Address",
  },
  {
    heading: "Date",
  },
  {
    heading: "Updated",
  },
];


function DeclinedOrdersAdmin() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const {
    data: allOrders,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery("adminDeclinedOrders", fetchDeclinedOrders, {
    staleTime: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  async function fetchDeclinedOrders () {
    try{
      return await Api.get(`/api/admin/declined-orders`);
    }catch(error){

    }
  }

  if(isLoading){
    return <div className="w-full h-full" >
      <TawasyLoader width={400} height={400} />
    </div>
  }

  return (
    <div className="md:px-6">
      <div className="container">
        <div className="m-5 p-5">
          <h2 className="text-2xl text-stone-500 pb-5 ">Declined Orders</h2>
        </div>

        <div className="w-full ">
          { allOrders && allOrders.data.data.length > 0 ? <table className="w-full overflow-x-auto table-auto">
            <thead className="">
              <tr className="text-sm font-semibold text-center border-b-2 border-gray-400 uppercase">
                <th>Id</th>
                {tableheading.map((index) => (
                  <th key={index.id}>{index.heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-lg font-normal text-gray-700 text-center">
              {allOrders && allOrders.data.data.map((order) => {
                return (
                  <OrderAdmin
                    names={order}
                    key={order.id}
                    refetch={() => {
                      refetch();
                    }}
                  />
                );
              })}
            </tbody>
          </table> : <div> There are no declined orders. </div>}
        </div>
      </div>
    </div>
  );
}

export default withLayoutAdmin(DeclinedOrdersAdmin);