import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import logo from '@/public/images/tawasylogo.png' ;

function PublicStoreCard({ store }) {

  return (
    <div className="shadow flex flex-col ">
      <div className="bg-cover overflow-hidden flex justify-center items-center w-auto md:max-h-[260px] ">
        <Image
          src={store.image ? store.image : logo}
          alt={store.name}
          className="w-full  transform transition duration-1000 "
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex justify-between items-center w-[90%] mx-auto py-3">
        <div>
          <h1>{store.name}</h1>
          <p>{store.location}</p>
        </div>
        {/* <div className="shadow-md w-[100px] h-[100px] p-4 self-center rounded-full "> */}
          <Image
            src={store.logo ? store.logo : logo}
            alt={store.name}
            className="w-full object-contain transform transition object-center duration-1000 shadow-md rounded-full "
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100px", height: "100px" }}
          />
        {/* </div> */}
      </div>
    </div>
  );
}

export default PublicStoreCard;
