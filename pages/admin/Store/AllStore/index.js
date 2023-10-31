import React, { useState, useEffect } from "react";
import withLayoutAdmin from "@/components/UI/adminLayout";
import item1 from "../../../../public/images/kuala.jpg";
import StoreAdmin from "@/components/AdminStore/StoreAdmin";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";

const tableheading = [
  {
    heading: "Seller ID",
  },
  {
    heading: "Name Ar",
  },
  {
    heading: "Name En",
  },
  {
    heading: "Opening Time",
  },
  {
    heading: "Closing Time",
  },
  {
    heading: "Status",
  },
  {
    heading: "Image",
  },
  {
    heading: "Logo",
  },
  {
    heading: "Store Type ID",
  },
  {
    heading: "Opening Days",
  },
  {
    heading: "Address",
  },
  {
    heading: "Street",
  },
  {
    heading: "Area",
  },
  {
    heading: "Created",
  },
  {
    heading: "Updated",
  },
  {
    heading: "Action",
  },
];

const stores = [
  {
    id: 1,
    name_ar:
      "lorem1 abu khaled zein aldein sadkjiasd asdhjbas asdh bdb hashdc iujsxjc ",
    name_en: "lorem1",
    opening_time: "10:00",
    closing_time: "5:00",
    status: "lorem1",
    image: item1,
    logo: item1,
    store_type: "lorem1",
    opening_days: "10:00",
    address: "lorem1",
    area: "lorem1",
    street: "lorem1",
    created: "12/3/2022",
    update: "12/3/2022",
  },

  {
    id: 2,
    name_ar: "lorem2",
    name_en: "lorem2",
    opening_time: "10:00",
    closing_time: "5:00",
    status: "lorem1",
    image: item1,
    logo: item1,
    store_type: "lorem1",
    opening_days: "10:00",
    address: "lorem1",
    area: "lorem1",
    street: "lorem1",
    created: "12/3/2022",
    update: "12/3/2022",
  },

  {
    id: 3,
    name_ar: "lorem3",
    name_en: "lorem3",
    opening_time: "10:00",
    closing_time: "5:00",
    status: "lorem1",
    image: item1,
    logo: item1,
    store_type: "lorem1",
    opening_days: "10:00",
    address: "lorem1",
    area: "lorem1",
    street: "lorem1",
    created: "12/3/2022",
    update: "12/3/2022",
  },

  {
    id: 4,
    name_ar: "lorem4",
    name_en: "lorem4",
    opening_time: "10:00",
    closing_time: "5:00",
    status: "lorem1",
    image: item1,
    logo: item1,
    store_type: "lorem1",
    opening_days: "10:00",
    address: "lorem1",
    street: "lorem1",
    area: "lorem1",
    created: "12/3/2022",
    update: "12/3/2022",
  },
];

function AllStoreAdmin() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const { data: stores, isLoading } = useQuery("allStores", fetchAllStores, {
    staleTime: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  async function fetchAllStores () {
    return await Api.get(`/api/admin/stores`);
  }

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={400} height={400} />
      </div>
    );
  }

  return (
    <div className="md:px-6">
      <div className="h-screen">
        <div className="m-5 p-5">
          <h2 className="text-2xl text-stone-500 pb-5 ">All Stores</h2>
        </div>

        <div className="w-full h-[70%] overflow-x-auto ">
          <table className="w-max overflow-x-auto table-auto">
            <thead className="sticky top-0 bg-white border-b-2 border-blue-500">
              <tr className="text-sm font-semibold text-center border-b-2 border-gray-400 uppercase">
                <th>Id</th>
                {tableheading.map((index) => (
                  <th className="px-4 " key={index.id}>
                    {index.heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-lg font-normal text-gray-700 text-center">
              {stores && stores.data.stores && stores.data.stores.map((store) => {
                return (
                  <StoreAdmin
                    names={store}
                    key={store.id}
                    refetch={() => {
                      refetch();
                    }}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default withLayoutAdmin(AllStoreAdmin);
