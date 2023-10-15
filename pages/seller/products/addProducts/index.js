import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import React, { useState, useEffect } from "react";
import AddProduct from "@/components/product/AddProduct/AddSellerProduct";
import { TfiShoppingCartFull } from "react-icons/tfi";
import Link from "next/link";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import TotalAddProduct from "@/components/product/SellerTotalAddProduct/TotalAddProduct";
import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import { MdClose } from "react-icons/md";

const users = [
  {
    id : 1
  },
  {
    id : 2
  },
  {
    id : 3
  },
];

function AddProducts() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const { data, isLoading, isError, error } = useQuery(
    "sharedProducts",
    fetchSharedProducts,
    { staleTime: Infinity, refetchOnMount: true, refetchOnWindowFocus: false }
  );

  async function fetchSharedProducts() {
    return await Api.get(`api/seller/approved-products`);
  }

  // const [users, setUsers] = useState([]);
  // const [count, setcount] = useState(0);
  // const getUsers = async () => {
  //   const response = await fetch("https://api.github.com/users");
  //   const FinalData = await response.json();
  //   setUsers(FinalData);
  // };

  const [open, openchange] = useState(false);

  const functionopenpopup = () => {
    console.log(`selected products`);
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  const transitionBuilder = (animationValues) => {
    const translateX = animationValues.animationProgress * 100;
    return {
      transform: `translateX(${translateX}%)`,
    };
  };

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={400} height={400} />
      </div>
    );
  }

  if (data) {
    console.log(`shared products`);
    console.log(data.data.approvedProducts);
  }

  return (
    <div className="md:px-16 px-5">
      <div className="flex justify-between py-10">
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

        <div className="px-2 py-1 bg-red-500" onClick={functionopenpopup} >
          cart
        </div>

        <Link
          href={"/seller/products/addNewProduct"}
          className="bg-[#ff6600] px-9 py-3 text-white"
        >
          Add New Product
        </Link>
      </div>
      <select
        className="border mb-6 border-gray-300 rounded-md text-gray-600 px-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
           focus:ring-0 h-10"
      >
        <option>Filter by</option>
        <option></option>
        <option></option>
      </select>

      <div className="container">
        {data && (
          <div class="grid md:grid-cols-3 grid-col-1 gap-4 ">
            {data.data.approvedProducts.map((curElem) => {
              return <AddProduct addproduct={curElem} />;
            })}
          </div>
        )}
        {/* <button>
          <div
          onClick={functionopenpopup}
            style={{
              color: "white",
              padding: "10px",
              // zIndex: "999",
              position: "fixed",
              bottom: "10px",
              left: "10px",
              background : "#ff6600"
            }}
          >
            sdsd 
            <TfiShoppingCartFull className="bg-skin-primary w-[60px] h-[60px] rounded-[50%] p-[15px]" onClick={functionopenpopup} />{" "}
          </div>
        </button> */}

        {/* </div>    */}

        <Dialog
          transitionDuration={500}
          transitionBuilder={transitionBuilder}
          fullWidth
          maxWidth="xl"
          open={open}
          onClose={closepopup}
        >
          <DialogTitle className="flex justify-between">
            <h4 className="text-2xl "> Total Select Product:</h4>
            <MdClose onClick={closepopup} className="w-[35px] h-[35px]" />
          </DialogTitle>
          <hr />
          <DialogContent>
            <Stack spacing={2} margin={2}>
              <div className=" mt-5">
                <table className="table w-full">
                  <thead className="text-xl">
                    <tr>
                      <th className="pb-4">Product Name</th>
                      <th className="pb-4">Image</th>
                      <th className="pb-4">Active</th>
                      <th className="pb-4">Price </th>
                      <th className="pb-4"> </th>
                    </tr>
                  </thead>
                  <tbody className="text-lg font-normal text-gray-700 text-center">
                    {users.map((curElem) => (
                      <TotalAddProduct selectproduct={curElem} />
                    ))}
                  </tbody>
                </table>
              </div>
            </Stack>
          </DialogContent>
        </Dialog>
      </div>

      <button onClick={functionopenpopup} >
        <div
          style={{
            color: "white",
            padding: "10px",
            zIndex: "999",
            position: "fixed",
            bottom: "10px",
            left: "10px",
          }}
        >
          <TfiShoppingCartFull className="bg-skin-primary w-[60px] h-[60px] rounded-[50%] p-[15px]" />{" "}
        </div>
      </button>
      {/* </div> */}
    </div>
  );
}

export default withLayout(AddProducts);
