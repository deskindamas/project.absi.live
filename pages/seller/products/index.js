import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  DialogActions,
} from "@mui/material";
import SellerProduct from "@/components/product/sellerProduct";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import createAxiosInstance from "@/API";
import { QueryClient, useQueryClient } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import Link from "next/link";

// const data = [
//   {
//     id: 1,
//     desc: "asdasd",
//     name: "Leanne Graham",
//     username: "desc",
//     category: "Sincere@april.biz",
//     image: "Kulas Light",
//     available: true,
//     quantity: "4",
//     price: "92994",
//     brand: "1-770-736-8031 x56442",
//   },
//   {
//     id: 2,
//     desc: "asdafda ssdfsadf sdafasdfsdf asd fsadfsadfs adfsadf sdfdbdsdfs hgjdsafgjkh afdsghjf dsaghjk jakhgsf dasasd",
//     name: "Leannasdasdasde Graham",
//     username: "desc",
//     category: "Sincere@april.biz",
//     image: "Kulas Light",
//     available: false,
//     quantity: "4",
//     price: "92994",
//     brand: "1-770-736-8031 x56442",
//   },
// ];

const data = [
  {
    id: 14,
    name: "HiLife - Steam Iron Aluminum Soleplate Purple  2200W HLIA22WB",
    description: "",
    image: "images/products/1111111112013_1.jpg",
    category: "Home & Kitchen Appliances",
    brand: "adidas - اديداس",
    price: "20000",
    ean_code: 0,
    availability: 1,
    sold_quantity: 0,
    created_at: null,
    updated_at: null,
  },
  {
    id: 16,
    name: "HiLife - Proessional Hair Straighterner 30 Watts Black HLHS30W ",
    description: "",
    image: "images/products/1111111112015.jpg",
    category: "Home & Kitchen Appliances",
    brand: "adidas - اديداس",
    price: "50000",
    ean_code: 0,
    availability: 1,
    sold_quantity: 0,
    created_at: null,
    updated_at: null,
  },
];

const tableheading = [
  {
    heading: "Name",
  },
  {
    heading: "Desc",
  },
  {
    heading: "Category",
  },
  {
    heading: "Image",
  },
  {
    heading: "Status",
  },
  {
    heading: "Brand",
  },
  {
    heading: "Sold quantity",
  },
  {
    heading: "Price",
  },
  {
    heading: "Delete",
  },
];

function Products() {
  const [tablecontent, settablecontent] = useState([]);
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [open, openchange] = useState(false);
  const Api = createAxiosInstance(router);
  const [productsType, setProductsType] = useState();
  const [loaded, setLoaded] = useState(false);
  const {
    data: products,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useQuery([`products`, productsType, router.query.type], fetchProducts, {
    staleTime: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    // enabled: Boolean(productsType),
    // enabled : loaded ,
    enabled: true,
  });

  async function fetchProducts() {
    console.log(`fetching`);
    switch (productsType) {
      case "activeProducts":
        const available = await Api.get(`api/seller/available-products`);
        if (available.data.availableProducts) {
          return available.data.availableProducts;
        } else {
          return [];
        }
      case "disabledProducts":
        const unavailable = await Api.get(`api/seller/unavailable-products`);
        if (unavailable.data.unavailableProducts) {
          return unavailable.data.unavailableProducts;
        } else {
          return [];
        }
      case "allProducts":
        const all = await Api.get(`api/seller/all-products`);
        if (all.data[`All Products`]) {
          return all.data[`All Products`];
        } else {
          return [];
        }
      case undefined:
        const alld = await Api.get(`api/seller/all-products`);
        if (alld.data[`All Products`]) {
          return alld.data[`All Products`];
        } else {
          return [];
        }
    }
    // }else{
    //   const alld = await Api.get(`api/seller/all-products`);
    //   if (alld.data[`All Products`]) {
    //     return alld.data[`All Products`];
    //   } else {
    //     return [];
    //   }
    // }
  }

  // useEffect(() => {
  //   refetch();
  // } , [router])

  useEffect(() => {
    let vars = router.query.type;
    if (vars) {
      setProductsType(vars);
    }

    setLoaded(true);
  }, [router.query.type]);

  const closepopup = () => {
    openchange(false);
  };

  let title;

  if (productsType) {
    switch (productsType) {
      case "activeProducts":
        title = "Active Products";
        break;
      case "disabledProducts":
        title = "Disabled Products";
        break;
      case "allProducts":
        title = "All Products";
        break;
    }
  } else {
    title = "All Products";
  }

  return (
    <div>
      <div className="items-center w-full py-4 mx-auto my-10 bg-white rounded-lg shadow-md sm:w-11/12">
        <div className="w-full h-full mx-auto">
          <div className="flex justify-between w-full px-4 py-2 items-center">
            <div className="text-xl font-bold">{title}</div>
            <Link
              href={"/seller/products/addProducts"}
              className="px-4 py-2 text-white bg-[#ff6600] rounded-md hover:bg-[#ff6600] focus:outline-none"
            >
              اضافة منتج جديد
            </Link>
          </div>
          {/* <ul className="flex flex-row space-x-2 sm:space-x-6 md:space-x-12 mt-4 mx-4 items-center border-b border-gray-300 overflow-auto text-sm">
            <li class=" text-blue-500 group text-lg">
              <a href="#">All Products</a>
              <div className="h-1 bg-blue-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
            </li>
            <li className="group text-lg">
              <a href="#">Pending Products</a>
              <div className="h-1 bg-blue-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
            </li>
            <li className="group text-lg">
              <a href="#">Disabled Products</a>
              <div className="h-1 bg-blue-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
            </li>
            <li className="group text-lg">
              <a href="#">Active Products</a>
              <div className="h-1 bg-blue-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"></div>
            </li>
          </ul> */}
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:justify-between w-full px-4 mb-2 mt-4 items-center ">
            <div className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg">
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
                className="w-full bg-gray-100 outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm h-10"
                type="text"
                placeholder="Search a product "
              />
            </div>
            <div className="flex-row space-x-2 items-center ">
              <select
                className="border border-gray-300 rounded-md text-gray-600 px-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
           focus:ring-0 h-10"
              >
                <option>Filter by</option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
          {isLoading || isRefetching ? (
            <div className="w-full h-full">
              <TawasyLoader width={300} height={300} />
            </div>
          ) : products && Array.isArray(products) && products.length > 0 ? (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full overflow-x-auto table-auto">
                <thead className="">
                  <tr className="text-sm font-semibold text-center border-b-2 border-blue-500 uppercase">
                    <th>Id</th>
                    {tableheading.map((index) => (
                      <th key={index.heading}>{index.heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-lg font-normal text-gray-700 text-center">
                  {products.map((names) => {
                    return <SellerProduct product={names} key={names.id} refetch={() => {refetch();}} />;
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <p>There are no products in this category</p>
            </div>
          )}

          {/* <div class="flex flex-col items-center w-full px-4 py-4 text-sm text-gray-500 justify-center mx-auto">
            <div class="flex items-center justify-between space-x-2">
              <a href="#" class="hover:text-gray-600">
                Previous
              </a>
              <div class="flex flex-row space-x-1">
                <div class="flex px-2 py-px text-white bg-blue-400 border border-blue-400">
                  1
                </div>
                <div class="flex px-2 py-px border border-blue-400 hover:bg-blue-400 hover:text-white">
                  2
                </div>
              </div>
              <a href="#" class="hover:text-gray-600">
                Next
              </a>
            </div>
          </div> */}
        </div>

        <Dialog open={open} onClose={closepopup} fullWidth>
          <DialogTitle className="flex justify-between">
            <h4>Edit Product:</h4>
          </DialogTitle>
          <hr />
          <DialogContent>
            <Stack spacing={2} margin={2}>
              <input
                className="mb-7 text-zinc-500 pl-2 outline-none border-b-2"
                type="numbere"
                placeholder=" السعر الجديد"
                required
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <button
              type="button"
              className="bg-lime-950 px-8 py-3 text-white"
              data-dismiss="modal"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-zinc-500 px-8 py-3 text-white"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default withLayout(Products);
