import Image from "next/image";
import React from "react";
import logo from "@/public/images/tawasylogo.png";

function PublicAllProduct({ product }) {
  return (
    <div className="shadow-lg flex flex-col w-fit border-2 border-gray-200 rounded-md ">
      <div className="bg-cover overflow-hidden flex justify-center items-center w-[225px] h-[225px]  md:max-h-[260px] ">
        <Image
          src={product.image ? product.image : logo}
          alt={product.name}
          className="w-full  transform transition duration-1000 object-contain object-center"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="w-[90%] mx-auto py-3 flex flex-col gap-2">
     <h1 className="capitalize text-xl text-gray-600 font-medium">{product.name}</h1>    
     <p className="text-skin-primary text-lg">Adidas</p>
     <button 
     className="capitalize border-2 border-skin-primary px-4 rounded-full text-base hover:bg-skin-primary hover:text-white transform duration-500">
     view store</button>
      </div>
    </div>
  );
}

export default PublicAllProduct;
