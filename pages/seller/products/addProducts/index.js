import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import React, { useState, useEffect, useRef } from "react";
import AddProduct from "@/components/product/AddProduct/AddSellerProduct";
import { TfiShoppingCartFull } from "react-icons/tfi";
import Link from "next/link";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import TotalAddProduct from "@/components/product/SellerTotalAddProduct/TotalAddProduct";
import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import {
  MdArrowForward,
  MdClose,
  MdRemove,
  MdRemoveCircleOutline,
  MdRemoveDone,
} from "react-icons/md";

const users = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

function AddProducts() {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const searchRef = useRef();
  const { data, isLoading, isError, error } = useQuery(
    "sharedProducts",
    fetchSharedProducts,
    { staleTime: Infinity, refetchOnMount: true, refetchOnWindowFocus: false }
  );

  async function fetchSharedProducts() {
    return await Api.get(`api/seller/approved-products`);
  }

  const [selectedProducts, setSelectedProducts] = useState();
  const [loadingSelected, setLoadingSelected] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState();
  const [inSearch, setInSearch] = useState(false);
  const [searching, setSearching] = useState(false);

  const [open, openchange] = useState(false);

  async function fetchSelectedProducts() {
    setLoadingSelected(true);
    try {
      const response = await Api.get(`api/seller/selected-products`);
      console.log(response);
      setSelectedProducts(response.data.selected_products);
      setLoadingSelected(false);
    } catch (error) {}
  }

  const functionopenpopup = async () => {
    openchange(true);
    await fetchSelectedProducts();
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

  if (isLoading == true) {
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

  function closeSearch() {
    setInSearch(false);
  }

  async function search() {
    setSearching(true);
    try {
      const response = await Api.post(`/api/seller/search-approved-products`, {
        search_term: searchRef.current.value,
      });
      console.log(`search response`);
      console.log(response);
      setSearchedProducts(response.data);
      setSearching(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="md:px-16 px-5">
      <div className="flex justify-between my-10 pt-10 pb-5 border-b-2 border-skin-primary ">
        <div className="w-[80%] flex justify-start items-center gap-2 ">
          <div className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg mx-2 px-2 border-2 border-transparent focus-within:border-skin-primary transition-all duration-700 ">
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
              className="w-full bg-gray-100 outline-none rounded-lg text-sm h-10"
              type="text"
              ref={searchRef}
              placeholder="Search a product "
              onClick={() => {
                setInSearch(true);
              }}
            />
            <MdArrowForward
              className="hover:border-b-2 border-skin-primary cursor-pointer"
              onClick={search}
            />
          </div>
          {inSearch == true && (
            <MdClose
              className="text-red-500 hover:text-red-600 w-[25px] h-[25px] hover:border-b-2 hover:border-red-600 cursor-pointer "
              onClick={closeSearch}
            />
          )}
        </div>
        <Link
          href={"/seller/products/addNewProduct"}
          className="bg-[#ff6600] px-9 py-3 text-white"
        >
          Add New Product
        </Link>
      </div>
      {/* <select
        className="border mb-6 border-gray-300 rounded-md text-gray-600 px-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
           focus:ring-0 h-10"
      >
        <option>Filter by</option>
        <option></option>
        <option></option>
      </select> */}

      {searching == true ? (
        <div className="w-full h-full">
          <TawasyLoader width={300} height={300} />
        </div>
      ) : (
        <div className="container">
          {data && inSearch == false && (
            <div class="grid md:grid-cols-3 grid-col-1 gap-4 ">
              {data.data.approvedProducts.map((curElem) => {
                return <AddProduct addproduct={curElem} />;
              })}
            </div>
          )}
          {searchedProducts &&
            (searchedProducts.transformedProducts.length > 0 ? (
              <div class="grid md:grid-cols-3 grid-col-1 gap-4 ">
                {searchedProducts.transformedProducts.map((curElem) => {
                  return <AddProduct addproduct={curElem} />;
                })}
              </div>
            ) : (
              <div className="w-full text-center" >{searchedProducts.message}</div>
            ))}
          <Dialog
            transitionDuration={500}
            transitionBuilder={transitionBuilder}
            className="h-full"
            fullWidth
            maxWidth="xl"
            open={open}
            onClose={closepopup}
          >
            <DialogTitle className="flex justify-between">
              <h4 className="text-2xl "> Selected Products:</h4>
              <MdClose onClick={closepopup} className="w-[35px] h-[35px]" />
            </DialogTitle>
            <hr />
            <DialogContent>
              {loadingSelected == false ? (
                <Stack spacing={2} margin={2}>
                  {selectedProducts && !selectedProducts.message ? (
                    selectedProducts.length > 0 ? (
                      <div className=" mt-5">
                        <table className="table w-full" border={4}>
                          <thead className="text-xl">
                            <tr>
                              <th className="pb-4">Id</th>
                              <th className="pb-4">Product Name</th>
                              <th className="pb-4">Description</th>
                              <th className="pb-4">Brand</th>
                              <th className="pb-4">Category</th>
                              <th className="pb-4">Available</th>
                              <th className="pb-4">Image</th>
                              <th className="pb-4">Price </th>
                              <th className="pb-4"> </th>
                            </tr>
                          </thead>
                          <tbody className="text-lg font-normal text-gray-700 text-center">
                            {selectedProducts.map((curElem) => (
                              <TotalAddProduct
                                selectproduct={curElem}
                                refetch={async () => {
                                  await fetchSelectedProducts();
                                }}
                              />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="w-full h-full flex justify-center items-center text-center">
                        <p>
                          You did not select any product to add to your store
                          yet.
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="w-full h-full flex justify-center items-center text-center">
                      <p>
                        You did not select any product to add to your store yet.
                      </p>
                    </div>
                  )}
                </Stack>
              ) : (
                <div className="w-full h-full">
                  <TawasyLoader width={350} height={350} />
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}

      <button
        onClick={(e) => {
          e.preventDefault();
          functionopenpopup();
        }}
      >
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