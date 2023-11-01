import React, { useState, useEffect } from "react";
import withLayoutAdmin from "@/components/UI/adminLayout";
import CouponsAdmin from "@/components/AdminCoupons/CouponsAdmin";
import { Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import CustomersAdmin from "@/components/AdminCustomer/CustomerAdmin";
import SellersAdmin from "@/components/AdminSeller/SellerAdmin";

const tableheading = [
    {
      heading: "Name",
    },
    {
        heading: "Phone",
      },
      {
        heading: "City",
      },
    {
        heading: "Longitude",
      },
    {
      heading: "Latitude",
    },
    {
        heading: "Created At",
      },
    {
      heading: "Updated At",
    },
  ];

  const customers =[
    {
        id: 1,
        name : 'lorem' ,
        phone:'1074958621',
        city :'damascus' ,
        lng :'10',
        lat : "10" ,
        created_at: '5/4/2013',
        updated_at:'5/4/2013',
    },
    {
        id: 2,
        name : 'lorem' ,
        phone:'1074958621',
        city :'damascus' ,
        lng :'10',
        lat : "10" ,
        created_at: '5/4/2013',
        updated_at:'5/4/2013',
    },
    {
        id: 3,
        name : 'lorem' ,
        phone:'1074958621',
        lng :'10',
        lat : "10" ,
        created_at: '5/4/2013',
        updated_at:'5/4/2013',
    },
    {
        id: 4,
        name : 'lorem' ,
        phone:'1074958621',
        lng :'10',
        lat : "10" ,
        created_at: '5/4/2013',
        updated_at:'5/4/2013',
    },
   
  ]



function AllCustomer() {
    
    return(
        <div className="md:px-6">
        <div className="h-screen">
          <div className="m-5 p-5">
            <h2 className="text-2xl text-stone-500 pb-5 ">
            Sellers
            </h2>
            <div className="flex">
            <div className="w-[50%]">
            <form className="w-full ">
            <div className="flex bg-gray-50 pt-1 pb-1 w-[80%] items-center rounded-lg mb-4 mr-4 border-2">
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
                placeholder="Search a Seller "
              />
            </div>
          </form>
            </div>
            </div>
          </div>
  
          <div className="w-full h-[70%] overflow-x-auto ">
              <table className="w-full overflow-x-auto table-auto">
                  <thead className="">
                  <tr className="text-sm font-semibold text-center border-b-2 border-gray-400 uppercase">
                      <th>Id</th>
                      {tableheading.map((index) => (
                        <th className="px-4 " key={index.id} >{index.heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-lg font-normal text-gray-700 text-center">
                    {customers.map((customer) => {
                      return <SellersAdmin names={customer} key={customer.id} refetch={() => {refetch();}} />;
                    })}
                  </tbody>
                </table>
           
          </div>
        </div>

      
      </div>
    )
}

export default withLayoutAdmin(AllCustomer);