import Locations from "@/components/Location/Location";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";

const Order = () => {
  const OrderItem = [
    {
      id: 1,
      name: "iPhone 9 fhfdhhfd didisis shshs shsh shsh",
      quantity: 3,
      price: "230",
      totalPrice: "1900",
    },
    {
      id: 2,
      name: "iPhone 9",
      quantity: 2,
      price: "130",
      totalPrice: "900",
    },
    {
      id: 3,
      name: "iPhone 9",
      quantity: 3,
      price: "630",
      totalPrice: "1900",
    },
    {
      id: 4,
      name: "iPhone",
      quantity: 3,
      price: "230",
      totalPrice: "19600",
    },
    {
      id: 5,
      name: "iPhone 9 fhfdhhfd didisis shshs shsh shsh",
      quantity: 3,
      price: "230",
      totalPrice: "1900",
    },
  ];

  const [openlocation, openchangelocation] = useState(false);
  const functionopenpopuplocation = () => {
    openchangelocation(true);
  };
  const closepopuplocation = () => {
    openchangelocation(false);
  };

  return (
    <>
      <div className="w-[100%] h-full">
        <div className="w-full bg-gray-200 pt-2 mb-7">
          <Link
            href="#"
            className="flex w-full bg-gray-200 text-skin-primary py-2 md:px-16 px-2"
          >
            <BiArrowBack className="w-[25px] h-[25px] mx-2 mt-[2px]" />
            <span className="text-skin-primary text-xl">Orders Details</span>
          </Link>
        </div>

        <div className="md:px-16 px-2 mb-5">
          <h4 className="text-gray-700 text-lg font-medium mb-3">
            Order Id: 1200
          </h4>
          <h4 className="text-gray-700 text-lg font-medium ">
            Store Name: Super star
          </h4>
          <h4 className="flex text-gray-700 text-lg font-medium mt-3">
            <Locations />
            Please Add Location To Deliver
            <IoLocation className="text-skin-primary w-[22px] h-[25px] ml-1" />
          </h4>
        </div>

        <div className="md:px-16 px-2">
          <div className="w-[100%]">
            <div className="grid grid-cols-5  gap-4 text-gray-800 text-xl font-medium bg-gray-200 py-2">
              <div className="col-span-2">
                <h4>Name</h4>
              </div>

              <div className="">
                <h4>Quantity</h4>
              </div>
              <div className="">
                <h4>Price</h4>
              </div>
              <div className="">
                <h4>Total</h4>
              </div>
            </div>

            {OrderItem.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5  gap-4 md:py-10 py-2 text-gray-700 text-lg font-medium border-b-2 border-gray-300"
              >
                <div className="col-span-2">
                  <h3 className="w-full">{item.name}</h3>
                </div>
                <div className="">
                  <h3 style={{ paddingLeft: "20px" }}>{item.quantity}</h3>
                </div>
                <div className="">
                  <h3>${item.price}</h3>
                </div>
                <div className="">
                  <h3>{item.totalPrice}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="my-6">
                <div className="grid md:grid-cols-2 gap-4 font-medium text-gray-800">
                  <div>
                    <div className="py-2 border-b-2 border-skin-primary w-full md:flex md:justify-between items-center">
                      Total Quantity:
                      <p>800</p>
                    </div>
                    <div className="py-2 border-b-2 border-skin-primary w-full md:flex md:justify-between items-center">
                    Total Price:
                      <p>800</p>
                    </div>
                    <div className="py-2 border-b-2 border-skin-primary w-full md:flex md:justify-between items-center">
                    Delivery Price:
                      <p>800</p>
                    </div>
                    <div className="py-2 border-b-2 border-skin-primary w-full md:flex md:justify-between items-center">
                    Discount:
                      <p>800</p>
                    </div>

                    <div className="py-5 border-b-2 border-gray-300 w-full md:flex md:justify-between items-center">
                    Final price:
                      <p>80000</p>
                    </div>

                  </div>
                  <div>
                   <h4 className="py-3">Note:</h4>
                <div className="relative mb-6">
                  <textarea
                    style={{ height: "125px" }}
                    className="peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] 
         leading-[1.6] outline-none transition-all duration-200 
          ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none
           dark:border-neutral-600 focus:border-primary"
                    id="exampleFormControlTextarea13"
                    rows={3}
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea13"
                    className="peer-focus:bg-white pointer-events-none absolute left-3
             top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] 
            text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] 
             peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none "
                  >
                    Message
                  </label>
                </div>
                <button
                  style={{
                    backgroundColor: "#ff6600",
                    textAlign: "center",
                    width: "100%",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    color: "white",
                  }}
                >
                  Submit
                </button>
                    <hr />
                  </div>
                </div>
              </div>

          {/* <div className="my-6">
            <div className="grid grid-cols-2 gap-4 font-medium text-gray-800">
              <div>
                <h4 className="py-2">Total Quantity:</h4>
                <h4 className="py-3">Note:</h4>
                <div className="relative mb-6">
                  <textarea
                    style={{ height: "125px" }}
                    className="peer border-2 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] 
         leading-[1.6] outline-none transition-all duration-200 
          ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none
           dark:border-neutral-600 focus:border-primary"
                    id="exampleFormControlTextarea13"
                    rows={3}
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea13"
                    className="peer-focus:bg-white pointer-events-none absolute left-3
             top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] 
            text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] 
             peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none "
                  >
                    Message
                  </label>
                </div>
              </div>
              <div>
                <h4 className="py-2">Total Price:</h4>
                <h4 className="py-2">Delivery Price:</h4>
                <h4 className="py-2">Discount:</h4>
                <hr />
                <h4 className="py-4">Final price:</h4>
                <button
                  style={{
                    backgroundColor: "#ff6600",
                    textAlign: "center",
                    width: "100%",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    color: "white",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default withLayoutCustomer(Order);
