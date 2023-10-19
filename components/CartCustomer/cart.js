import Image from "next/image";
import React, { useState, useEffect, Fragment } from "react";
import {
  AiOutlineClose,
  AiOutlineIssuesClose,
  AiOutlineMinus,
  AiOutlinePlus,
  AiTwotoneDelete,
} from "react-icons/ai";
import Item from "../../public/images/item1.jpg";
import photo from "../../public/images/kuala.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "../../components/componentsStyling/sellerStyles.module.css";
import { BsFillBagFill } from "react-icons/bs";

const Cart = ({ onClose, className }) => {
  const items = [
    {
      id: 1,
      image: photo,
      name: "Suger",
      price: "130",
      total: "400",
    },
    {
      id: 2,
      image: photo,
      name: "Suger",
      price: "30",
      total: "40",
    },
    {
      id: 3,
      image: Item,
      name: "Suger",
      price: "190",
      total: "410",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
const [buttonText, setButtonText] = useState('Add Coupon');

const handleClick = () => {
  setIsVisible(!isVisible);
  setButtonText(buttonText === 'Add Coupon' ? 'Cancel' : 'Add Coupon');
};

  return (
      <div
        className={`fixed flex top-[7%] z-10 w-full right-0 h-full  bg-slate-200 `}
      >
        <div
          className="w-[60%] bg-[#11111173] "
          onClick={onClose}
        ></div>
        <div className="w-[40%] bg-white">
          <div className="">
            <div className="flex px-4 bg-gray-50 justify-between pt-3 pb-3">
              <h3 className="flex font-medium text-xl text-gray-600 ml-2">
                <BsFillBagFill className=" w-[25px] h-[25px] text-skin-primary mr-2" />{" "}
                Shopping Cart
              </h3>
              <AiOutlineClose
                className="mr-2 w-[25px] h-[25px] text-gray-600"
                onClick={onClose}
              />
            </div>
            <hr className=" mb-4" />
            <div className="px-5">
              {items.map((item) => (
                <div className="py-3 border-b-2 border-gray-300 ">
                  <div className="flex gap-5 h-full  " key={item.id}>
                    <div className="relative w-[20%]">
                      <div className="top-0 -translate-x-2.5 -translate-y-2.5 left-0 z-30  absolute bg-gray-400 border-1 text-center border-black hover:bg-red-600 w-[25px] h-[25px] rounded-full flex justify-center items-center ">
                        <AiOutlineClose className="text-lg text-white " />
                      </div>
                      <Image
                        src={item.image}
                        alt="product"
                        className="rounded-xl"
                      />
                    </div>
                    <div className=" flex flex-col justify-center items-start gap-2  w-[50%]">
                      <h2 className=" text-gray-500 text-lg font-medium ">
                        {item.name}
                      </h2>
                      <p className=" text-gray-700 text-base font-light ">
                        {item.price} S.P
                      </p>
                    </div>

                    <div className=" flex flex-col justify-center items-center gap-2 w-[30%]">
                      <p className=" text-gray-700 text-base font-light">
                        Total :s.p{item.price}
                      </p>
                      <div className="flex w-[70%] justify-around items-center gap-1" >
                        <button>
                          <AiOutlineMinus className="w-[13px] h-[13px] text-black" />
                        </button>
                        <span className=" font-medium text-white bg-gray-500 rounded-lg py-0.5 px-2">
                          5
                        </span>
                        <button>
                          <AiOutlinePlus className="w-[13px] h-[13px] text-black" />
                        </button>
                      </div>
                    </div>

           
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center w-full px-4">
            <button
       className="w-full pt-1 pb-1 border-t-2 border-b-2 border-[#b6b6b6]"
         onClick={handleClick}
       >
        {buttonText}
           </button>
              {isVisible && (
                <div className="w-full mb-5">
                  <input
                    className="w-[80%] pt-2 pb-2 outline-none pl-2 border-b-2 border-x-gray-400"
                    type="text"
                    placeholder="Enter code"
                  />
                  <button className="w-[20%] bg-skin-primary pt-2 pb-2 text-white">
                    Apply
                  </button>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 grid-col-1 gap-2 px-4">
              <div className="pl-2 text-gray-600 font-medium text-lg">
                <h4 style={{ marginBottom: "10px", marginTop: "10px" }}>
                  Total Quantity:
                </h4>
                <h4 style={{ marginBottom: "10px" }}>Total Price:</h4>
                <h4>Final price:</h4>
              </div>
              <div className="pr-2 text-gray-600 font-medium text-lg">
                <h4 style={{ marginBottom: "10px", marginTop: "10px" }}>
                  Delivery Price:
                </h4>
                <h4 style={{ marginBottom: "10px" }}>Discount:</h4>
              </div>
            </div>
            <div className="flex justify-center pb-2 pt-4">
              <button className="text-white bg-[#ff6600] px-16 py-2 rounded-full">
                Submit Order
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Cart;
