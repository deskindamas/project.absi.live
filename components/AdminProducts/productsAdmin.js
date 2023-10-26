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
import Image from "next/image";
import ImageUpload from "../ImageUpload/ImageUpload";

function AdminProduct({ product , refetch }) {
    
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [logoImage , setLogoImage] = useState();
  const newNameAr = useRef();
  const newNameEn = useRef();
  const newdescAr = useRef();
  const newdescEn = useRef();
  const newCategory = useRef();
  const newBrand = useRef();
  const newSku = useRef();
  const newCode = useRef();
  const newSortOrder = useRef();
  const router = useRouter();


  function handleLogoImage (data) {
    setLogoImage(data);
  }
  return (
      
    <>
      <tr
        key={product.id}
        className="py-10 bg-gray-100 hover:bg-gray-200 font-medium   "
      >
        <td className="px-4 py-4">{product.id}</td>
        <td className="px-4 py-4">{product.nameAr}</td>
        <td className="px-4 py-4">{product.nameEn}</td>
        <td className="px-4 py-4  " width={`10%`} >{product.descAr}</td>
        <td className="px-4 py-4" width={`10%`} >{product.descEn}</td>
        <td className="px-4 py-4">{product.category}</td>
        <td className="px-4 py-4 flex justify-center">
          <Image src={product.image} alt="photo" 
                 width={0}
                 height={0}
                 sizes="100vw"
                 style={{ width: "50%", height: "auto" }}  />
        </td>
        <td className="  ">
       {product.status}
        </td>
        <td className="px-4 py-4">{product.brand && product.brand}</td>
        <td className="px-4 py-4">{product.sku}</td>
        <td className="px-4 py-4">{product.code}</td>
         <td className={`${router.pathname === "/admin/Products/PendingProduct" && `hidden`}`}>{product.quantity}</td>
        <td>{product.sortOrder}</td>
        <td>{product.Created}</td>
        <td>{product.Updated}</td>
        <td className={`${router.pathname === "/admin/Products/PendingProduct" && `hidden`}`} >{product.instores}</td>
        <td class="px-4 py-4">
          <div class="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
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
      </tr>
  
      <Dialog
        open={isEditing}
        onClose={() => {
          setIsEditing(false);
        }}
        fullWidth  maxWidth="md"
      >
        <DialogTitle className="flex justify-between border-b-2 border-black">
          <h4 className="text-gray-500 md:pl-6 font-medium">Edit Product : {product.nameEn}</h4>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={1} margin={3}>
            <div className="md:grid md:grid-cols-2 gap-6">
            <div className="flex w-full items-center">
            <label className="text-lg w-[30%] px-2">NameAr :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="text"
              placeholder={product.nameAr}
              ref={newNameAr}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="text-lg w-[30%] px-2">NameEn :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="text"
              placeholder={product.nameEn}
              ref={newNameEn}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">descAr  :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
              placeholder={product.descAr}
              ref={newdescAr}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">descEn :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
              placeholder={product.descEn}
              ref={newdescEn}
              required
            />
            </div>
           
            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Category :</label>
            <select className="w-[80%] form-select outline-none bg-transparent border-b-2 border-gray-300 "
          aria-label="Category"
          name="category">
          <option className="bg-white"  disabled selected value>Select a store type</option>
          <option className="bg-white" value="">Lorem1</option>
          <option className="bg-white" value="">Lorem2</option>
          <option className="bg-white" value="">Lorem3</option>
          </select>
            </div>


            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Brand :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
              placeholder={product.brand}
              ref={newBrand}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Sku :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
              placeholder={product.sku}
              ref={newSku}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Code :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
              placeholder={product.code}
              ref={newCode}
              required
            />
            </div>

            
            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Status :</label>
            <select className="w-[80%] form-select outline-none bg-transparent border-b-2 border-gray-300 "
          aria-label="Status"
          name="Status">
          <option className="bg-white"  disabled selected value>Select a Status</option>
          <option className="bg-white" value="">Lorem1</option>
          <option className="bg-white" value="">Lorem2</option>
          <option className="bg-white" value="">Lorem3</option>
          </select>
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Code :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
              placeholder={product.code}
              ref={newCode}
              required
            />
            </div>

            
            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Sort Order :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
              placeholder={product.sortOrder}
              ref={newSortOrder}
              required
            />
            </div>
  
            <div className="flex items-center">
            <ImageUpload 
            onSelectImage={handleLogoImage}
            width={100}
            height={100}
            defaultImage= {product.image}
            />
            </div>
        


           </div>
          </Stack>
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="bg-lime-950 px-8 py-3 text-white rounded-lg "
            data-dismiss="modal"
          > Save
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
                Are you sure you want to delete this Product ?
              </p>
              <p className="text-xl pt-4">{product.nameEn}</p>
            </div>
          </Stack>
        </DialogContent>
        <DialogActions>
          <button
            type="button"
            className="bg-green-700 px-8 py-3 text-white rounded-lg "
            data-dismiss="modal"
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

export default AdminProduct;
