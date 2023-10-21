import React, { useState } from "react";
import { ResponsiveCarousel } from "../CarouselCustomer/carousel";
import Image from "next/image";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { MdClose } from "react-icons/md";

function ProductCustomer({ product }) {
  const [open, openchange] = useState(false);

  const functionopenpopup = async () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };

  return (
    <>
      <div key={product.id} className="mb-4">
        <div
          className="bg-white overflow-hidden drop-shadow-md rounded-lg
          w-80  items-center justify-center"
        >
          <div className="w-full bg-cover overflow-hidden">
            <Image
              onClick={functionopenpopup}
              src={product.image}
              className="w-full h-60 transform transition duration-1000 hover:scale-125 hover:rotate-2  "
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className=" mt-4 px-4 py-4">
            <div className="flex justify-between mb-2">
              <h3 className="text-gray-600 text-2xl font-medium ">
                {product.name}
              </h3>
              <p className="text-gray-800 text-lg font-medium ">
                {product.price} s.p
              </p>
            </div>
            <div className="flex flex-wrap w-[100%] gap-2 mb-2">
                  <h3 className="text-gray-600 text-lg font-medium ">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-lg font-medium ">
                    {product.name}
                  </p>
                </div>
            <p className="text-gray-700 text-base font-light py-3">
              {product.descraption}
            </p>
            <div className="flex justify-center items-center py-4">
              <button
                className="items-center py-2 
         w-full text-sm font-medium 
          text-center text-gray-900 
          bg-white rounded-full border 
          border-[#ff6600] hover:bg-[#ff6600] hover:text-white transition-all duration-500 "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ProductCustomer;
