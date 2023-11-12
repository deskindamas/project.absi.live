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
  }


  useEffect(() => {
    let vars = router.query.type;
    if (vars) {
      setProductsType(vars);
    }

    setLoaded(true);
  }, [router.query.type]);

  if(products) {
    console.log(products);
    console.log(Array.isArray(products));
  }

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
      <div className="items-center w-full  mx-auto my-10 bg-white rounded-lg shadow-md sm:w-11/12">
        <div className="w-full h-full mx-auto">
          <div className="flex sm:flex-row flex-col  justify-between w-full px-4 py-2 items-center">
            <div className="text-xl font-bold">{title}</div>
            <Link
              href={"/seller/products/addProducts"}
              className="px-4 py-2 text-white bg-[#ff6600] rounded-md hover:bg-[#ff6600] focus:outline-none"
            >
              Add Product to store
            </Link>
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
                  { products.map((names) => {
                    return <SellerProduct product={names} key={names.id} refetch={() => {refetch();}} />;
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <p>There are no products.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withLayout(Products);
