import React, { useState, useEffect, useRef } from "react";
import withLayoutAdmin from "@/components/UI/adminLayout";
import CategoryAdmin from "@/components/AdminCategories/CategoryAdmin";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import { Ring } from "@uiball/loaders";

const tableheading = [
  {
    heading: "Name Ar",
  },
  {
    heading: "Name En",
  },
  {
    heading: "Sort Order",
  },

  {
    heading: "Created At",
  },
  {
    heading: "Updated At",
  },
  {
    heading: "Action",
  },
];

const categories = [
  {
    id: 1,
    nameAr: "lorem1",
    nameEn: "lorem1",
    sortOrder: "5",
    store_type: "item1",
    created_at: "5/4/2013",
    updated_at: "5/4/2013",
  },
  {
    id: 2,
    nameAr: "lorem2",
    nameEn: "lorem2",
    sortOrder: "25",
    store_type: "item1",
    created_at: "5/4/2013",
    updated_at: "5/4/2013",
  },
  {
    id: 3,
    nameAr: "lorem3",
    nameEn: "lorem3",
    sortOrder: "25",
    store_type: "item1",
    created_at: "5/4/2013",
    updated_at: "5/4/2013",
  },
  {
    id: 4,
    nameAr: "lorem4",
    nameEn: "lorem3",
    sortOrder: "25",
    store_type: "item1",
    created_at: "5/4/2013",
    updated_at: "5/4/2013",
  },
  {
    id: 5,
    nameAr: "lorem5",
    nameEn: "lorem3",
    sortOrder: "25",
    store_type: "item1",
    created_at: "5/4/2013",
    updated_at: "5/4/2013",
  },
];

function Categories() {
  const [open, openchange] = useState(false);
  const router = useRouter();
  // const [storeTypes, setStoreTypes] = useState();
  // const [selectedStoreType, setSelectedStoreType] = useState();
  const Api = createAxiosInstance(router);
  const [loading, setLoading] = useState();
  const arNameRef = useRef();
  const enNameRef = useRef();
  const sortRef = useRef();
  const {
    data: categories,
    isLoading,
    refetch,
  } = useQuery("categories", fetchCategories, {
    staleTime: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  async function fetchCategories() {
    try {
      return await Api.get(`/api/admin/get-categories`);
    } catch (error) {}
  }

  const functionopenpopup = async () => {
    openchange(true);
    // setLoading(true);
    // try {
    //   const response = await Api.get(`/api/admin/store-types/all`);
    //   console.log(response.data.data);
    //   setStoreTypes(response.data.data);
    //   setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    // }
  };

  const closepopup = () => {
    openchange(false);
  };

  async function addCategory(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Api.post(`/api/admin/category/create`, {
        name_ar: arNameRef.current.value,
        name_en: enNameRef.current.value,
        sort_order: sortRef.current.value,
      });
      refetch();
      setLoading(false);
      openchange(false);
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  }

  return (
    <div className="md:px-6">
      <div className="h-screen">
        <div className="m-5 p-5">
          <h2 className="text-2xl text-stone-500 pb-5 ">Categories</h2>
          <div className="flex">
            <div className="w-[50%]">
              <form className="w-full ">
                <div className="flex bg-gray-50 pt-1 pb-1 w-[80%] items-center rounded-lg mb-4 mr-4 border-2">
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
                    placeholder="Search a Category "
                  />
                </div>
              </form>
            </div>

            <div className="w-[50%] flex justify-end ">
              <button
                onClick={functionopenpopup}
                className="bg-skin-primary text-white py-1 px-3 rounded-md"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>

        {categories && (
          <div className="w-full h-[70%] overflow-x-auto ">
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
                {categories.data.categories &&
                  categories.data.categories.map((category) => {
                    return (
                      <CategoryAdmin
                        names={category}
                        key={category.id}
                        refetch={() => {
                          refetch();
                        }}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="md">
        <DialogTitle className=" border-b-2 border-gray-200">
          <h3 className="py-2 pl-3 text-gray-600">Create New Category</h3>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <form onSubmit={addCategory}>
              <div className="md:grid md:grid-cols-2 sm:grid-cols-1 items-center">
                <div className="w-full px-4 py-3">
                  <input
                    type="text"
                    className="outline-none appearance-none border-b-2 border-gray-300 focus:border-[#FD6500] w-full transition-all duration-700"
                    placeholder="Arabic Name"
                    inputMode="name ar"
                    ref={arNameRef}
                    required
                  />
                </div>
                <div className="w-full px-4 py-3">
                  <input
                    type="text"
                    className="outline-none appearance-none border-b-2 border-gray-300 focus:border-[#FD6500] w-full transition-all duration-700"
                    placeholder="English Name"
                    inputMode="name en"
                    ref={enNameRef}
                    required
                  />
                </div>
                <div className="w-full px-4 py-3">
                  <input
                    type="number"
                    className="outline-none appearance-none border-b-2 border-gray-300 focus:border-[#FD6500]  w-full transition-all duration-700"
                    placeholder="Sort Order"
                    inputMode="sort order"
                    ref={sortRef}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-start pt-6">
                <button
                  className="bg-skin-primary w-[20%] rounded-md text-white px-8 py-2"
                  type="submit"
                >
                  {loading == true ? (
                    <div className="w-full flex justify-center">
                      <Ring size={20} speed={2} lineWeight={5} color="white" />
                    </div>
                  ) : (
                    `Add Category`
                  )}
                </button>
              </div>
            </form>
          </Stack>
        </DialogContent>

        <DialogActions className="grid md:grid-cols-2 grid-cols-1 "></DialogActions>
      </Dialog>
    </div>
  );
}

export default withLayoutAdmin(Categories);
