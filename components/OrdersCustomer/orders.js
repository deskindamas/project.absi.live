
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

function OrdersCustomer({order}) {

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

  const [open, openchange] = useState(false);

  const functionopenpopup = async () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };

  return (
    <>
      <div
        key={order.id}
        onClick={functionopenpopup}
        className="bg-gray-200 rounded-md my-1 px-4"
      >
        <div>
          <div className="flex justify-end">
            <h2 className="bg-skin-primary text-white px-2 py-1 rounded-md mt-[-10px] mr-6">
              {order.date}{" "}
            </h2>
          </div>
          <div className="pb-5">
            <h3 className="font-medium text-xl text-gray-500 mb-2">
              Store Name : {order.storeName}
            </h3>
            <h3 className="font-medium text-lg text-gray-500 mb-2">
              Total price : {order.totalPrice}
            </h3>
            <h3 className="font-medium text-lg text-gray-500">
              Status: {order.status}
            </h3>
          </div>
        </div>
      </div>

      <Dialog open={open} fullWidth maxWidth="lg" onClose={closepopup}>
        <DialogTitle className="flex justify-end">
          <div>
            <MdClose onClick={closepopup} className="w-[25px] h-[25[px]" />
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="w-[100%] h-full">
            <div className="md:px-16 px-2 mb-5">
              <h4 className="text-gray-700 text-lg font-medium mb-3">
                Order Id: 1200
              </h4>
              <h4 className="text-gray-700 text-lg font-medium ">
                Store Name: Super star
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
                      <p>800</p>
                    </div>
                  </div>
                  <div>
    
                    <h4 className="py-3 pl-2">Reason for canceling the order:</h4>
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
                  Cancel
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

export default OrdersCustomer;
