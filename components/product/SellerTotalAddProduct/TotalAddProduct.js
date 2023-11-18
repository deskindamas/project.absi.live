import React, { useState, useEffect, useRef } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { TfiSave } from "react-icons/tfi";
import logo from "../../../public/images/tawasylogo.png";
import { Ring } from "@uiball/loaders";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import Link from "next/link";
import { MdCheck, MdClose } from "react-icons/md";

function TotalAddProduct({ selectproduct, refetch }) {
  const [isSaving, setIsSaving] = useState(false);
  const [available, setAvailable] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const priceRef = useRef();
  const router = useRouter();
  const Api = createAxiosInstance(router);

  async function saveProduct() {
    setIsSaving(true);
    try{
      const response = await Api.post(`/api/seller/add-products-to-store/${selectproduct.product_id}` , {
        price : priceRef.current.value ,
        availability : available
      });
      refetch();
      setIsSaving(false);
    }catch(error){
      // console.log(error);
    }
    setIsSaving(false);
  }

  async function unSelectProduct() {
    setIsDeleting(true);
    try {
      const response = await Api.post(
        `/api/seller/unselect-product/${selectproduct.product_id}`
      );
      refetch();
      setIsDeleting(false);
    } catch (error) {
      setIsDeleting(false);
    }
    setIsDeleting(false);
  }

  return (
    <>
      <tr
        key={selectproduct.id}
        className="even:bg-zinc-150 odd:bg-zinc-50 text-center py-1 border-b-2 border-slate-300"
      >
        <td><Link href={`/customer/Products/${selectproduct.product_id}`} legacyBehavior >
            <a target="_blank" className="border-b border-transparent hover:border-gray-400" >
            {selectproduct.name}
            </a>
          </Link></td>
        <td>{selectproduct.brand}</td>
        <td>{selectproduct.category}</td>
        <td>
          {available ? (
            <BsToggleOn
            onClick={() => {setAvailable(false)}}
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
            onClick={() => {setAvailable(true)}}
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
        <td className="flex justify-center items-center">
          <img
            src={selectproduct.image ? selectproduct.image : logo}
            width={75}
            height={75}
            loading="lazy"
            alt={selectproduct.name}
          />
        </td>
        <td className="md:px-0 px-2" >
          <input
            className="border-b-2 outline-none bg-transparent focus:border-skin-primary transition-all duration-700 md:w-[50%] w-full "
            name="price"
            ref={priceRef}
            placeholder="price"
          />
        </td>
        <td className="">
          <div className="h-full w-full flex justify-center items-center gap-2">
            {!isDeleting ? (
              <MdClose
                onClick={unSelectProduct}
                style={{
                  width: "26px",
                  height: "26px",
                  color: "rgb(171, 5, 5)",
                }}
                className="cursor-pointer"
              />
            ) : (
              <Ring size={20} lineWeight={4} speed={2} color="#ff6600" />
            )}
            {!isSaving ? (
              <MdCheck
              onClick={saveProduct}
                style={{ width: "26px", height: "26px", color: "#005500" }}
                className="cursor-pointer"
              />
            ) : (
              <Ring size={20} lineWeight={4} speed={2} color="#ff6600" />
            )}
          </div>
        </td>
      </tr>
    </>
  );
}

export default TotalAddProduct;
