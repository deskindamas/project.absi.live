import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import test from "@/public/images/flowers.jpeg";
import testlogo from "@/public/images/tawasylogo.png";
import PublicStoreCard from "@/components/CustomerPublicStores/PublicStore";

const stores = [
  {
    id: 1,
    image: test,
    logo: testlogo,
    name: "Lorems",
  },
  {
    id: 2,
    image: test,
    logo: testlogo,
    name: "Lorems2",
  },
  {
    id: 3,
    image: test,
    logo: testlogo,
    name: "Lorems3",
  },
  {
    id: 4,
    image: test,
    logo: testlogo,
    name: "Lorems4",
  },
  {
    id: 5,
    image: test,
    logo: testlogo,
    name: "Lorems5",
  },
];

function PublicStore() {
  return (
    <>
      <div className="">
        <div className="bg-gray-100 w-full px-5 py-3">
          <h1 className="text-3xl text-gray-600 font-medium">All Stores</h1>
        </div>
        <div className="flex justify-center items-center pt-5">
          <form className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg px-2 border-2 border-transparent focus-within:border-skin-primary transition-all duration-700 ">
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
              placeholder="Search Stores by name"
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

        <div className="w-[90%] mx-auto py-5 ">
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
            {stores.map((store) => {
              return <PublicStoreCard key={store.name} store={store} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayoutCustomer(PublicStore);
