import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import React, { useState, useEffect } from "react";
import item1 from "../../../../public/images/kuala.jpg";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import createAxiosInstance from "@/API";
import { QueryClient, useQueryClient } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import Link from "next/link";
import AdminProduct from "@/components/AdminProducts/productsAdmin";
import withLayoutAdmin from "@/components/UI/adminLayout";
import StoreTypeADSAdmin from "@/components/AdminStoreTypeADS/StoreTypeADSAdmin";
import HomeADSAdmin from "@/components/AdminHomeADS/HomeADS";

const tableheading = [
  {
    heading: "Image",
  },
  {
    heading: "Created",
  },
];

const StoreType = [
  {
    id: 1,
    image: item1,
    Created: "12/3/2022",
  },
  {
    id: 2,
    image: item1,
    Created: "12/3/2022",
  },
  {
    id: 3,
    image: item1,
    Created: "12/3/2022",
  },
];

function HomeAds() {

  return (
    <div>
        <div className="md:px-6">
          <div className="w-full h-screen mx-auto">
            <div className="m-5 p-5">
              <h2 className="text-2xl text-stone-500 pb-5 ">Home ADS</h2>
              <div className="flex">
                <div className="w-[50%]">
                  <form className="w-full my-auto ">
                    <div className="flex bg-gray-50 pt-1 pb-1 w-[80%] items-center rounded-lg mr-4 border-2">
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
                        placeholder="Search a Home ADS "
                      />
                    </div>
                  </form>
                </div>

                <div
                  className="w-[50%] flex justify-end "
                >
                  <button className="bg-skin-primary text-white py-1 px-3 rounded-md"
                    // onClick={() => {
                    //   router.push("/admin/Products/addNewProduct");
                    // }}
                  >
                    Add 
                  </button>
                </div>
              </div>
            </div>

           <div className="mt-6 h-[70%]  overflow-auto">
              <table className="w-full overflow-auto table-auto">
                <thead className="">
                  <tr className="text-sm font-semibold text-center border-b-2 border-blue-500 uppercase">
                    <th>Id</th>
                    {tableheading.map((index) => (
                      <th className=" px-4 py-4 " key={index.heading}>{index.heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-lg h-[10%] font-normal text-gray-700 text-center">
                  { StoreType.map((names) => {
                    return (
                      <HomeADSAdmin
                       ads={names}
                        key={names.id}
                        refetch={() => {
                          refetch();
                        }}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div> 
            {/* <div className="w-max mx-auto" > There are no store type ads. </div> */}
          </div>
        </div>
    </div>
  );
}

export default withLayoutAdmin(HomeAds);
