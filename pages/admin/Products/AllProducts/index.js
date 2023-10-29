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

const tableheading = [
  {
    heading: "Name Ar",
  },
  {
    heading: "Name En",
  },
  {
    heading: "Desc Ar",
  },
  {
    heading: "Desc En",
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
    heading: "Sku",
  },
  {
    heading: "Ean Code",
  },
  {
    heading: "Sold Quantity",
  },

  {
    heading: "Sort Order",
  },
  {
    heading: "Created",
  },
  {
    heading: "Updated",
  },
  {
    heading: "Instores",
  },
  {
    heading: "Action",
  },
];

const products = [
  {
    id: 1,
    nameAr: "lorem1",
    nameEn: "lorem1",
    descAr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    descEn:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    category: "lorem",
    image: item1,
    status: "lorem",
    brand: "ldjdsjs",
    sku: "37732",
    code: "65444",
    sortOrder: "5",
    Created: "12/3/2022",
    Updated: "12/3/2022",
    instores: "40000",
  },
  {
    id: 2,
    name: "lorem2",
    nameEn: "lorem1",
    descAr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    descEn:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    category: "lorem",
    image: item1,
    status: "lorem",
    brand: "ldjdsjs",
    sku: "37732",
    code: "65444",
    sortOrder: "5",
    quantity: "10",
    Created: "12/3/2022",
    Updated: "12/3/2022",
    instores: "40000",
  },
  {
    id: 3,
    name: "lorem3",
    nameEn: "lorem1",
    descAr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    descEn:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    category: "lorem",
    image: item1,
    status: "lorem",
    brand: "ldjdsjs",
    sku: "37732",
    code: "65444",
    sortOrder: "5",
    Created: "12/3/2022",
    instores: "40000",
  },
  {
    id: 4,
    name: "lorem4",
    nameEn: "lorem1",
    descAr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    descEn:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    category: "lorem",
    image: item1,
    status: "lorem",
    brand: "ldjdsjs",
    sku: "37732",
    code: "65444",
    sortOrder: "5",
    Created: "12/3/2022",
    instores: "40000",
  },
];

function ProductsAdmin() {
  const [tablecontent, settablecontent] = useState([]);
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const { data: allProduct, isLoading , refetch , isRefetching} = useQuery(
    "adminAllProduct",
    fetchadminAllProduct,
    { staleTime: 1, refetchOnMount: true, refetchOnWindowFocus: false }
  );

  async function fetchadminAllProduct() {
    try {
      return await Api.get(`/api/admin/get-products`);
    } catch {}
  }

  const closepopup = () => {
    openchange(false);
  };

  if (isLoading == true) {
   return <div className="w-full h-full">
      <TawasyLoader width={400} height={400} />
    </div>;
  }

  if (allProduct) {
    console.log(allProduct);
  }

  return (
    <div>
        <div className="md:px-6">
          <div className="w-full h-screen mx-auto">
            <div className="m-5 p-5">
              <h2 className="text-2xl text-stone-500 pb-5 ">All Products</h2>
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
                        placeholder="Search a Product "
                      />
                    </div>
                  </form>
                </div>

                <div
                  className="w-[50%] flex justify-end "
                >
                  <button className="bg-skin-primary text-white py-1 px-3 rounded-md"
                    onClick={() => {
                      router.push("/admin/Products/addNewProduct");
                    }}
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>

            { allProduct && allProduct.data.products.length > 0 ? <div className="mt-6 h-[70%]  overflow-auto">
              <table className="w-max overflow-auto table-auto">
                <thead className="">
                  <tr className="text-sm font-semibold text-center border-b-2 border-blue-500 uppercase">
                    <th>Id</th>
                    {tableheading.map((index) => (
                      <th className=" px-4 py-4 " key={index.heading}>{index.heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-lg h-[10%] font-normal text-gray-700 text-center">
                  { allProduct.data.products && allProduct.data.products.map((names) => {
                    return (
                      <AdminProduct
                        product={names}
                        key={names.id}
                        refetch={() => {
                          refetch();
                        }}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div> : <div className="w-max mx-auto" > There are no Products. </div>}
          </div>
        </div>
    </div>
  );
}

export default withLayoutAdmin(ProductsAdmin);
