import Image from "next/image";
import React from "react";
import kuala from "@/public/images/kuala.jpg";
import { useTranslation } from "next-i18next";
import logo from "@/public/images/tawasylogo.png";

function PublicAllProduct({ product }) {
  const { t } = useTranslation("");

  return (
    <div className="shadow-lg flex flex-col sm:w-fit max-w-[288px] border-2 md:min-h-[406px] min-h-[381px] border-gray-200 rounded-md ">
      <div className="bg-cover overflow-hidden flex justify-center items-center  min-h-[260px] max-h-[260px]  ">
        <Image
          src={product.image ? product.image : logo}
          alt={product.name}
          className="w-full  transform transition duration-1000 object-contain object-center"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "225px", height: "auto" }}
        />
      </div>
      <div className="w-[90%] mx-auto py-3 flex flex-col gap-2 md:h-[100%] h-auto justify-between">
        <h1 className="capitalize md:text-xl text-base text-gray-600 font-medium md:h-[60%] text-ellipsis line-clamp-3 " title={product.name} >
          {product.name}
        </h1>
        <p className="text-skin-primary text-lg md:h-[20%] ">{product.brand}</p>
        <button className="capitalize md:h-[20%] border-2 border-skin-primary px-4 rounded-full text-base hover:bg-skin-primary hover:text-white transform duration-500">
          {t("componentStore.ViewStore")}
        </button>
      </div>
    </div>
  );
}

export default PublicAllProduct;
