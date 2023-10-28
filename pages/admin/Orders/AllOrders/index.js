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

const orders = [
  {
    id: 1,
    store_name: "lorem1",
    customerName: "lorem1",
    status: "lorem",
    location: "syria",
    created: "12/3/2022",
    update: "12/3/2022",
  },
  {
    id: 2,
    store_name: "lorem2",
    customerName: "lorem1",
    status: "lorem",
    location: "syria",
    created: "12/3/2022",
    update: "12/3/2022",
  },
  {
    id: 3,
    store_name: "lorem3",
    customerName: "lorem1",
    status: "lorem",
    location: "syria",
    created: "12/3/2022",
    update: "12/3/2022",
  },
  {
    id: 4,
    store_name: "lorem4",
    customerName: "lorem1",
    status: "lorem",
    location: "syria",
    created: "12/3/2022",
    update: "12/3/2022",
  },
  {
    id: 5,
    store_name: "lorem5",
    customerName: "lorem1",
    status: "lorem",
    location: "syria",
    created: "12/3/2022",
    update: "12/3/2022",
  },
];

function AllOrdersAdmin() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const {
    data: allOrders,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery("adminAllOrders", fetchAllOrders, {
    staleTime: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  async function fetchAllOrders () {
    try{
      return await Api.get(`/api/admin/orders`);
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
          <h2 className="text-2xl text-stone-500 pb-5 ">All Orders</h2>
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
          </table> : <div> There are no orders. </div>}
        </div>
      </div>
    </div>
  );
}

export default withLayoutAdmin(AllOrdersAdmin);
