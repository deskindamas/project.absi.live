import React, { useState, useEffect } from "react";
import withLayoutAdmin from "@/components/UI/adminLayout";
import item1 from "../../../../public/images/kuala.jpg";
import StoreAdmin from "@/components/AdminStore/StoreAdmin";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import { useRef } from "react";
import { MdArrowForward, MdClose } from "react-icons/md";

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
  const [searchedResults, setSearchedResults] = useState();
  const searchRef = useRef();
  const [inSearch, setInSearch] = useState(false);
  const [searching, setSearching] = useState(false);
  const { data: stores, isLoading , refetch } = useQuery("allStores", fetchAllStores, {
    staleTime: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  async function fetchAllStores () {
    return await Api.get(`/api/admin/stores`);
  }

  async function search(e) {
    e.preventDefault();
    setSearching(true);
    try {
      const response = await Api.get(`/api/admin/stores/searchByName`, {
        params: { search: searchRef.current.value },
        noSuccessToast: true,
      });
      const component =
        response.data.data.length < 1 ? (
          <div className="w-max mx-auto">{response.data.message}</div>
        ) : (
          <table className="w-full overflow-x-auto table-auto">
            <thead className="">
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
              {response.data.data &&
                response.data.data.map((customer) => {
                  return (
                    <StoreAdmin
                      names={customer}
                      key={customer.id}
                      refetch={() => {
                        refetch();
                      }}
                    />
                  );
                })}
            </tbody>
          </table>
        );
      setSearchedResults(component);
      setSearching(false);
    } catch (error) {
      setSearching(false);
    }
    setSearching(false);
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

        <div
              className="w-[80%] flex justify-center items-center gap-2 mx-auto mb-7 "
              dir="ltr"
            >
              <form
                onSubmit={search}
                className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg px-2 border-2 border-transparent focus-within:border-skin-primary transition-all duration-700 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
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
                  className="w-full bg-gray-100 outline-none rounded-lg text-sm h-10  "
                  type="text"
                  ref={searchRef}
                  placeholder="Search stores by name"
                  onClick={() => {
                    setInSearch(true);
                  }}
                  required
                />
                <button type="submit">
                  <MdArrowForward
                    // onClick={search}
                    className="hover:border-b-2 border-skin-primary cursor-pointer"
                  />
                </button>
              </form>
              {inSearch == true && (
                <MdClose
                  className="text-red-500 hover:text-red-600 w-[25px] h-[25px] hover:border-b-2 hover:border-red-600 cursor-pointer "
                  onClick={() => {
                    setInSearch(false);
                  }}
                />
              )}
            </div>

        <div className="w-full h-[70%] overflow-x-auto ">
          { inSearch == false && <table className="w-max overflow-x-auto table-auto">
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
          </table>}

          {inSearch == true &&
          (searching == true ? (
            <div className="w-full h-full">
              <TawasyLoader width={300} height={300} />
            </div>
          ) : (
            <div className="w-full min-h-[500px]">
              {searchedResults && searchedResults}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default withLayoutAdmin(AllStoreAdmin);
