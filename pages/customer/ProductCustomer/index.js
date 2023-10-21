import React, { useState, useEffect } from "react";
import Logo from "../../../public/images/item2.jpg";
// import Image from "next/image";
import Storeimage from "../../../public/images/storeimage.jpg";
import FilterCategories from "@/components/SellerStore/filterCategory/filterCategories";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import ItemProduct from "../../../public/images/kuala.jpg";
import ProductCustomer from "@/components/ProductsCustomer/products";
import Image from "next/image";

function Products() {
  const categories = [
    {
      name: "lorem1",
    },
    {
      name: "lorem2",
    },
    {
      name: "lorem3",
    },
    {
      name: "lorem4",
    },
    {
      name: "lorem5",
    },
    {
      name: "lorem6",
    },
    {
      name: "lorem7",
    },
  ];

  const products = [
    {
      id: 1,
      image: ItemProduct,
      name: "Lorem1",
      price: "1400 ",
      descraption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....",
    },
    {
      id: 2,
      image: ItemProduct,
      name: "Lorem2",
      price: "1500 ",
      descraption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....",
    },
    {
      id: 3,
      image: ItemProduct,
      name: "Lorem3",
      price: "1600 ",
      descraption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....",
    },
    {
      id: 4,
      image: ItemProduct,
      name: "Lorem4",
      price: "1400 ",
      descraption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....",
    },
    {
      id: 5,
      image: ItemProduct,
      name: "Lorem5",
      price: "1500 ",
      descraption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....",
    },
    {
      id: 6,
      image: ItemProduct,
      name: "Lorem6",
      price: "1600 ",
      descraption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....",
    },
    {
      id: 7,
      image: ItemProduct,
      name: "Lorem7",
      price: "1700 ",
      descraption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....",
    },
  ];

  return (
    <div>
      <div className=" w-full h-full flex flex-col justify-start items-center ">
        <div className=" relative w-full box-content pb-6">
          <Image
            className="w-full md:h-[500px] h-[200px] object-cover "
            src={Storeimage}
            alt="store"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
          {/* <div className='pb-6'> */}
          <Image
            className=" md:w-auto md:h-auto w-auto h-[35%]  shadow absolute z-10 md:bottom-20 bottom-10 right-10 rounded-full"
            src={Logo}
            alt="store"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
          <h1 className="md:text-5xl text-base font-medium text-white absolute z-10 md:bottom-20 bottom-10  left-10 outline-black outline-2">
            Super Star
          </h1>
          {/* </div> */}
        </div>

        <div className="flex justify-center bg-gray-200 w-full pt-3 pb-3 mb-10">
          <ul className="flex flex-wrap items-center">
            {/* {categories.map((category) => {
            return (
            <FilterCategories  key={categories?.name} categories={category}   />
            );
          })} */}
          </ul>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 ">
          {products.map((product) => (
            <ProductCustomer product = {product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withLayoutCustomer(Products);
