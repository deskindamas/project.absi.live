import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import test from "@/public/images/flowers.jpeg";
import PublicAllProduct from "@/components/CustomerAllProducts/AllProducts";

const allproducts = [
    {
      id: 1,
      image: test,
      name: "Lorems",
      price : '120',
      descrption : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        image: test,
        name: "Lorems2",
        price : '1220',
        descrption : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 3,
        image: test,
        name: "Lorem3s",
        price : '1203',
        descrption : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 4,
        image: test,
        name: "Lorem34",
        price : '444',
        descrption : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 5,
        image: test,
        name: "Lorem5",
        price : '4544',
        descrption : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 6,
        image: test,
        name: "Lorem6",
        price : '20000',
        descrption : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 7,
        image: test,
        name: "Lorem7",
        price : '20000',
        descrption : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
  
  ];

function AllProducts() {

    return<>
    <div>
    <div className="bg-gray-100 w-full py-3">
    <h1 className="text-3xl text-gray-600 font-medium w-[90%] mx-auto">All Products</h1>
    </div>
    <div className="flex justify-center items-center pt-5">
          <form className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg px-2 border-2 border-transparent transition-all duration-700 ">
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
              placeholder="Search Products by name"
              required
            />
            <button type="submit">
              <MdArrowForward
                // onClick={search}
                className="hover:border-b-2 border-skin-primary cursor-pointer"
              />
            </button>
          </form>
     </div>

     <div className="w-[80%] mx-auto py-5">
     <div className='grid md:grid-cols-5 grid-cols-1 gap-5 gap-y-7 mx-auto  '>
        {
          allproducts.map(product => (

          <PublicAllProduct key={product.name} product = {product}/>
          ))
        }
            </div>
          </div>


    </div>
    </>
}

export default withLayoutCustomer(AllProducts);