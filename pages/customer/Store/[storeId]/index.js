import React, { useState, useEffect } from "react";
import Logo from "../../../../public/images/item2.jpg";
import Image from "next/image";
import Storeimage from "../../../../public/images/storeimage.jpg";
import FilterCategories from "@/components/SellerStore/filterCategory/filterCategories";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import ItemProduct from "../../../../public/images/kuala.jpg";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import ProductCustomer from "@/components/ProductsCustomer/products";

function Products() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [storeId , setStoreId] = useState();
  const {
    data: store,
    isLoading,
    isError,
    error,
  } = useQuery([`storePage` , storeId], fetchStorePage, {
    staleTime: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled : Boolean(storeId) == true ,
  });

  useEffect(() => {
    const bb = router.query.storeId ;
    if(bb){
      setStoreId(bb);
    }
  } , [router.query.storeId])

  async function fetchStorePage() {
    try {
      return await Api.get(`/api/stores-with-products/${storeId}`)
    } catch {}
  }

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

  if(isLoading){
    return <div className="w-full h-full" >
      <TawasyLoader width={400} height={400}/>
    </div>
  }

  return (
    <div>
      <div className=" w-full h-full flex flex-col justify-start items-center ">
        <div className=" relative lg:h-[400px] md:h-[300px] h-auto w-full box-border ">
          <Image
            // className=" "
            src={Storeimage}
            alt="store"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
            className={`w-full h-full object-cover select-none pointer-events-none `}
          />
          {/* <div className='pb-6'> */}
          <Image
            className=" shadow absolute z-10 lg:bottom-10 md:bottom-5 sm:bottom-3 bottom-1 right-10 rounded-full"
            src={Logo}
            alt="store"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "50%" }}
          />
          {/* </div> */}
        </div>
        <div className="w-full h-full">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-medium text-gray-600 py-6 text-center">
            Super Star
          </h1>
          </div>

        <div className="flex justify-center bg-gray-200 w-full pt-3 pb-3 mb-10">
          <ul className="flex flex-wrap items-center">
            {/* {categories?.map((category) => {
            return (
            <FilterCategories  key={categories?.name} categories={category}   />
            );
          })} */}
          </ul>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-col-1 gap-4 ">
          {products?.map((product) => (
            // <div key={product.id} className="mb-4">
            //   <div
            //     className="bg-white overflow-hidden drop-shadow-md rounded-lg
            //     w-80  items-center justify-center"
            //   >
            //     <div className="w-full bg-cover overflow-hidden">
            //       <Image
            //         src={product.image}
            //         className="w-full h-64 transform transition duration-1000 hover:scale-125 hover:rotate-2  "
            //       />
            //     </div>
            //     <div className=" mt-4 px-4 py-4">
            //       <div className="flex justify-between mb-2">
            //         <h3 className="text-gray-600 text-2xl font-medium ">
            //           {product.name}
            //         </h3>
            //         <p className="text-gray-800 text-lg font-medium ">
            //           {product.price} s.p
            //         </p>
            //       </div>
            //       <p className="text-gray-700 text-base font-light py-3">
            //         {product.descraption}
            //       </p>
            //       <div className="flex justify-center items-center py-4">
            //         <button
            //           className="items-center py-2 
            //          w-full text-sm font-medium 
            //           text-center text-gray-900 
            //           bg-white rounded-full border 
            //           border-[#ff6600] hover:bg-[#ff6600] hover:text-white transition-all duration-500 "
            //         >
            //           Add To Cart
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <ProductCustomer product = {product}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withLayoutCustomer(Products);
