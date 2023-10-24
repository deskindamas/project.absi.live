import React, { useState, useEffect } from "react";
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
        heading: "Location",
      },
    {
      heading: "Created",
    },
    {
      heading: "Updated",
    }
  ];

  const orders =[
    {
        id: 1,
        store_name:'lorem1',
        customerName:'lorem1',
        status :'lorem',
        location: 'syria',
        created :"12/3/2022",
        update :"12/3/2022",
    },
    {
      id: 2,
      store_name:'lorem2',
      customerName:'lorem1',
      status :'lorem',
      location: 'syria',
      created :"12/3/2022",
      update :"12/3/2022",
  },
  {
    id: 3,
    store_name:'lorem3',
    customerName:'lorem1',
    status :'lorem',
    location: 'syria',
    created :"12/3/2022",
    update :"12/3/2022",
},
{
  id: 4,
  store_name:'lorem4',
  customerName:'lorem1',
  status :'lorem',
  location: 'syria',
  created :"12/3/2022",
  update :"12/3/2022",
},
{
  id: 5,
  store_name:'lorem5',
  customerName:'lorem1',
  status :'lorem',
  location: 'syria',
  created :"12/3/2022",
  update :"12/3/2022",
},
   
  ]

function RejectedOrdersAdmin() {

  
   return(
    <div className="md:px-6">
      <div className="container">
        <div className="m-5 p-5">
          <h2 className="text-2xl text-stone-500 pb-5 ">
          Rejected Orders
          </h2>
        </div>

        <div className="w-full ">

            <table className="w-full overflow-x-auto table-auto">
                <thead className="">
                <tr className="text-sm font-semibold text-center border-b-2 border-gray-400 uppercase">
                    <th>Id</th>
                    {tableheading.map((index) => (
                      <th key={index.id} >{index.heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-lg font-normal text-gray-700 text-center">
                  {orders.map((order) => {
                    return <OrderAdmin names={order} key={order.id} refetch={() => {refetch();}} />;
                  })}
                </tbody>
              </table>
         
        </div>
      </div>
    </div>
   )
}

export default withLayoutAdmin(RejectedOrdersAdmin);