import React, { useState, useEffect } from "react";
import item1 from'../../../../public/images/kuala.jpg';
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import Link from "next/link";
import withLayoutAdmin from "@/components/UI/adminLayout";
import AdminPendingProduct from "@/components/AdminProducts/PendingProductAdmin/PendingProduct";



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
      heading: "Sort Order",
    },
      {
        heading: "Action",
      },
  ];

  const products =[
    {
        id: 1,
        nameAr:'lorem1',
        nameEn:'lorem1',
        descAr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        descEn: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        category :'lorem',
        image : item1 ,
        status: 'lorem',
        brand :"ldjdsjs" ,
        sku :'37732',
        code :"65444",
        sortOrder : '5' ,
    },
    {
        id: 2,
        nameAr :'lorem2',
        nameEn:'lorem1',
        descAr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        descEn: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        category :'lorem',
        image : item1 ,
        status: 'lorem',
        brand :"ldjdsjs" ,
        sku :'37732',
        code :"65444",
        sortOrder : '5' ,
    },
    {
        id: 3,
        nameAr :'lorem3',
        nameEn:'lorem1',
        descAr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        descEn: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        category :'lorem',
        image : item1 ,
        status: 'lorem',
        brand :"ldjdsjs" ,
        sku :'37732',
        code :"65444",
        sortOrder : '5' ,
    },
    {
        id: 4,
        nameAr :'lorem4',
        nameEn:'lorem1',
        descAr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        descEn: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        category :'lorem',
        image : item1 ,
        status: 'lorem',
        brand :"ldjdsjs" ,
        sku :'37732',
        code :"65444",
        sortOrder : '5' ,
    },
  ]

function PendingProductsAdmin() {

    const [tablecontent, settablecontent] = useState([]);
    const router = useRouter();
    const Api = createAxiosInstance(router);

    
      const closepopup = () => {
        openchange(false);
      };
    
   return(
    <div>
       <div className="items-center w-full py-4 mx-auto my-10 bg-white rounded-lg shadow-md sm:w-11/12">
        <div className="w-full h-full mx-auto">
        <div className="m-5 p-5">
            <h2 className="text-2xl text-stone-500 pb-5 ">
            Pending Product
            </h2>
            <div className="flex">
            <div className="w-[50%]">
            <form className="w-full ">
            <div className="flex bg-gray-50 pt-1 pb-1 w-[80%] items-center rounded-lg  mr-4 border-2">
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
                placeholder="Search a Pending Product "
              />
            </div>
          </form>
            </div>
            </div>
          </div>
          
            <div className="w-full h-full">
              {/* <TawasyLoader width={300} height={300} /> */}
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-[2000px] overflow-x-auto table-auto">
                <thead className="">
                  <tr className="text-sm font-semibold text-center border-b-2 border-blue-500 uppercase">
                    <th>Id</th>
                    {tableheading.map((index) => (
                      <th key={index.heading} >{index.heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-lg font-normal text-gray-700 text-center">
                  {products.map((names) => {
                    return <AdminPendingProduct product={names} key={names.id} refetch={() => {refetch();}} />;
                  })}
                </tbody>
              </table>
            </div>
        
    
        </div>
      </div>
    </div>
   )
}

export default withLayoutAdmin(PendingProductsAdmin);