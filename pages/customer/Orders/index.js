import OrdersCustomer from "@/components/OrdersCustomer/orders";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import React from "react";

const Orders = () => {
  
  const orderdetails = [
    {
      id: 1,
      storeName: "lorem",
      status: "....",
      date: "12/3/2023",
      totalPrice : "4000"
    },
    {
      id: 2,
      storeName: "lorem2",
      status: "....",
      date: "12/4/2023",
      totalPrice : "3000"
    },
    {
      id: 3,
      storeName: "lorem3",
      status: "....",
      date: "12/5/2023",
      totalPrice : "1500"
    },
    {
      id: 3,
      storeName: "lorem3",
      status: "....",
      date: "12/5/2023",
      totalPrice : "400"
    },
  ];

  return (
    <>
      <div className="md:px-28 px-3 py-4">
        <div>
          <h1 className="font-medium text-3xl mb-4 text-gray-500 my-">All Orders</h1>
        </div>
        <div className="flex justify-center items-center w-full">
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
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 ">
          {orderdetails.map((order) => {
            return (
             <OrdersCustomer order={order}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default withLayoutCustomer(Orders);
