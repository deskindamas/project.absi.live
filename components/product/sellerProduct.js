import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { Ring } from "@uiball/loaders";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";

function SellerProduct({ product , refetch }) {
  const [isToggled, setIsToggled] = useState(product.availability);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingAvailability, setEditingAvailability] = useState(false);
  const [editingPrice, setEditingPrice] = useState(false);
  const [price, setPrice] = useState(product.price);
  const newPrice = useRef();
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const storeId = Cookies.get("Sid");

  async function handleAvailable() {
    setEditingAvailability(true);
    let availability;
    try {
      if (isToggled == true) {
        availability = false;
      } else if (isToggled == false) {
        availability = true;
      }
      const response = await Api.put(
        `api/seller/store/${storeId}/product/${product.id}/availability`,
        {
          availability: availability,
        }
      );
      // console.log(`availability change`);
      // console.log(response);
    } catch (error) {
      // console.log(error);
      setEditingAvailability(false);
      return;
    }
    setIsToggled(availability);
    setIsToggled(!isToggled);
    setEditingAvailability(false);
  }

  async function savePrice() {
    setEditingPrice(true);
    try {
      const response = await Api.put(
        `api/seller/store/${storeId}/product/${product.id}/price`,
        {
          price: newPrice.current.value,
        }
      );
      setPrice(newPrice.current.value);
      setIsEditing(false);
    } catch (error) {
      // console.log(error);
    }
    // setIsEditing(false);
    setEditingPrice(false);
  }

  async function deleteProduct() {
    setDeleting(true);
    try {
      const response = await Api.delete(
        `api/seller/store/${storeId}/product/${product.id}`
      );
        refetch() ;
      setIsDeleting(false);
      setDeleting(false);
    } catch (error) {
      // setIsDeleting(false);
      setDeleting(false);
      // console.log(error);
    }
  }

  return (
    <>
      <tr
        key={product.id}
        className="py-10 px-0 bg-gray-100 hover:bg-gray-200 font-medium"
      >
        <td className="px-4 py-4">{product.id}</td>
        <td class="px-4 py-4">
          <div class="md:flex-row flex-col items-center space-y-3 lg:space-y-0">
            <button
              onClick={() => setIsEditing(true)}
              class="items-center px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              <FiEdit />
            </button>
            <button
              class="items-center px-2 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
              onClick={() => {
                setIsDeleting(true);
              }}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </td>
        <td className="px-4 py-4"><Link href={`/customer/Products/${product.id}`} legacyBehavior >
              <a target="_blank" className="border-b border-transparent hover:border-gray-400 cursor-pointer" >
              {product.name}
              </a>
          </Link></td>
        {/* <td className="px-4 py-4">{product.description}</td> */}
        <td className="px-4 py-4">{product.category}</td>
        <td className="px-4 py-4">
          <Image  src={product.image} alt="photo" width={100} height={100} className="object-contain"  />
        </td>
        <td onClick={handleAvailable} className="  ">
          {editingAvailability ? (
            <div className="w-min h-min mx-auto ">
              <Ring size={15} lineWeight={5} speed={2} color="#ff6600" />
            </div>
          ) : isToggled ? (
            <BsToggleOn
              className="cursor-pointer"
              style={{
                width: "25px",
                height: "35px",
                color: "#ff6600",
                margin: `auto`,
              }}
            />
          ) : (
            <BsToggleOff
              className="cursor-pointer"
              style={{
                width: "25px",
                height: "35px",
                color: "#ff6600",
                margin: `auto`,
              }}
            />
          )}
        </td>
        <td className="px-4 py-4">{product.brand && product.brand.name}</td>
        {/* <td className="px-4 py-4">{product.sold_quantity}</td> */}
        <td className="px-4 py-4" >{price}</td>
        
      </tr>

      <Dialog
        open={isEditing}
        onClose={() => {
          setIsEditing(false);
        }}
        fullWidth
      >
        <DialogTitle className="flex justify-between border-b-2 border-black ">
          <h4 className="">Edit Product: {product.name}</h4>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={1} margin={3}>
            <input
              className="mb-7 text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
              placeholder={price}
              ref={newPrice}
              required
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="bg-lime-950 px-8 py-3 text-white rounded-lg "
            data-dismiss="modal"
            onClick={savePrice}
          >
            {editingPrice == true ? (
              <div className="flex justify-center items-center">
                <Ring size={25} lineWeight={5} speed={2} color="white" />
              </div>
            ) : (
              "Save"
            )}
          </button>
          <button
            type="button"
            className="bg-zinc-500 px-8 py-3 text-white rounded-lg"
            data-dismiss="modal"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isDeleting}
        onClose={() => {
          setIsDeleting(false);
        }}
        fullWidth
      >
        <DialogTitle className="flex justify-between border-b-2 border-black ">
          <h4 className="">Delete Product:</h4>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={1} margin={3}>
            <div className="flex flex-col justify-start items-start w-full ">
              <p className="text-lg ">
                Are you sure you want to delete this product from your store ?
              </p>
              <p className="text-xl">{product.name}</p>
            </div>
          </Stack>
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="bg-green-700 px-8 py-3 text-white rounded-lg "
            data-dismiss="modal"
            onClick={deleteProduct}
          >
            {deleting == true ? (
              <div className="flex justify-center items-center">
                <Ring size={25} lineWeight={5} speed={2} color="white" />
              </div>
            ) : (
              "Yes"
            )}
          </button>
          <button
            type="button"
            className="bg-zinc-500 px-8 py-3 text-white rounded-lg"
            data-dismiss="modal"
            onClick={() => {
              setIsDeleting(false);
            }}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SellerProduct;
