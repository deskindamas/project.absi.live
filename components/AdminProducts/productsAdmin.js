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
import { convertDate } from "../SellerOrders/sellerOrder";
import TawasyLoader from "../UI/tawasyLoader";

function AdminProduct({ product, refetch }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [logoImage, setLogoImage] = useState();
  const [categories, setCategories] = useState();
  const [brands, setBrands] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState();
  const [savingStatus, setSavingStatus] = useState(false);
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const [isSaving, setIsSaving] = useState(false);
  const [isApproving , setIsApproving] = useState(false);
  const [isDeclining , setIsDeclining] = useState(false);
  const newNameAr = useRef();
  const newNameEn = useRef();
  const newdescAr = useRef();
  const newdescEn = useRef();
  // const newCategory = useRef();
  // const newBrand = useRef();
  const newSku = useRef();
  const newEanCode = useRef();
  const newSortOrder = useRef();
  const router = useRouter();
  const Api = createAxiosInstance(router);

  function handleLogoImage(data) {
    setLogoImage(data);
  }

  async function openDialog() {
    setIsEditing(true);
    setIsLoading(true);
    try {
      const response = await Api.get(`/api/admin/get-categories`);
      // console.log(response);
      // setStoreTypes(response.data.data);
      setCategories(response.data.categories);
    } catch (error) {}
    try {
      const response = await Api.get(`/api/admin/brands`);
      // console.log(response);
      setBrands(response.data);
    } catch (error) {}
    setIsLoading(false);
  }

  async function saveEdits() {
    setIsSaving(true);
    let editData = {};
    const addIfDifferent = (fieldValue, fieldName) => {
      const originalValue = product[fieldName];
      console.log(fieldValue);
      if (
        fieldValue !== undefined &&
        fieldValue.trim() !== "" &&
        fieldValue !== originalValue
      ) {
        editData[fieldName] = fieldValue;
      }
    };
    addIfDifferent(newNameAr.current.value, "name_ar");
    addIfDifferent(newNameEn.current.value, "name_en");
    addIfDifferent(newdescAr.current.value, "description_ar");
    addIfDifferent(newdescEn.current.value, "description_en");
    if (category && category !== product.category) {
      editData.category_name = category;
    }
    if (brand && brand !== product.brand) {
      editData.brand_name = brand;
    }
    addIfDifferent(newSku.current.value, "sku");
    addIfDifferent(newEanCode.current.value, "ean_code");
    addIfDifferent(newSortOrder.current.value, "sort_order");
    if (product.status === "pending") {
      addIfDifferent(status, "status");
    }

    if (logoImage) {
      // editData.image = logoImage;
      try{
        const response2 = await Api.post(`/api/admin/update-product-image/${product.id}`,  {
          new_image : logoImage
        } , {
          headers: { "Content-Type": `multipart/form-data` },
        })
      }catch(error){
        console.log(error);
      }
    }

    console.log(editData);

    try {
      const response = await Api.put(
        `/api/admin/update-product/${product.id}`,
        editData,
        {
          // headers: { "Content-Type": `multipart/form-data` },
        }
      );
      setIsSaving(false);
      if(product.status != 'pending'){
        setIsEditing(false);
      }
      refetch();
    } catch (error) {
      setIsSaving(false);
    } finally {
      // setIsEditing(false);
      setIsSaving(false);
      // setIsEditing(false);
    }
  }

  async function deleteProduct() {
    // setIsDeleting(true);
    setDeleting(true);
    try {
      const response = Api.delete(`/api/admin/delete-product/${product.id}`);
      refetch();
      setDeleting(false);
      setIsDeleting(false);
    } catch (error) {
      setDeleting(false);
    }
  }

  async function declineProduct () {
    setIsDeclining(true);
    try{
      const response = await Api.put(`/api/admin/accept-decline-product/${product.id}` , {
        status : 'declined'
      }) ;
      refetch();
      setIsDeclining(false);
      setIsEditing(false);
    }catch(error){
      setIsDeclining(false);
    }
    setIsDeclining(false);
  }

  async function approveProduct () {
    setIsApproving(true) ;
    try{
      const response = await Api.put(`/api/admin/accept-decline-product/${product.id}` , {
        status : 'approved'
      }) ;
      refetch();
      setIsApproving(false);
      setIsEditing(false);
    }catch(error){
      setIsApproving(false);
    }
  }

  return (
    <>
      <tr
        key={product.id}
        className="py-10 bg-gray-100 hover:bg-gray-200 font-medium   "
      >
        <td className="px-4 py-4">{product.id}</td>
        <td className=" px-4 py-4 w-[10%] ">{product.name_ar}</td>
        <td className="px-4 py-4 w-[10%]">{product.name_en}</td>
        <td className="px-4 py-4 w-[10%] ">{product.description_ar}</td>
        {/* <td className="px-4 py-4 w-[10%] ">
          sdhjkgasd ahjsgdkjahsdgf khjsk jhgbasdjfkh asbhjdfk hbasdkfbvh khvj asldkjhf asdjkha jkhsdbak jhdbaksjhd akjhsbd asd lajksbd 
        </td> */}
        <td className="px-4 py-4 w-[10%]">{product.description_en}</td>
        <td className="px-4 py-4">{product.category}</td>
        <td className="px-4 py-4 flex justify-center">
          <Image
            src={product.image}
            alt={product.name_en}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "50%", height: "auto" }}
          />
        </td>
        <td className=" px-4 py-4 ">{product.status}</td>
        <td className="px-4 py-4">{product.brand && product.brand}</td>
        <td className="px-4 py-4">{product.sku}</td>
        <td className="px-4 py-4">{product.ean_code}</td>
        <td
          className={`${
            router.pathname === "/admin/Products/PendingProduct" && `hidden`
          }`}
        >
          {product.sold_quantity}
        </td>
        <td>{product.sort_order}</td>
        <td className="px-4 py-4">{convertDate(product.created_at)}</td>
        <td className="px-4 py-4">{convertDate(product.updated_at)}</td>
        <td
          className={` px-4 py-4 ${
            router.pathname === "/admin/Products/PendingProduct" && `hidden`
          }`}
        >
          {product.instores}
        </td>
        <td class="px-4 py-4">
          <div class="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
            <button
              onClick={openDialog}
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
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle className="flex justify-between border-b-2 border-black">
          <h4 className="text-gray-500 md:pl-6 font-medium">
            Edit Product : {product.nameEn}
          </h4>
        </DialogTitle>
        <DialogContent>
          {isLoading ? (
            <div className="w-full h-full">
              <TawasyLoader width={300} height={300} />
            </div>
          ) : (
            <Stack spacing={1} margin={3}>
              <div className="md:grid md:grid-cols-2 gap-6">
                <div className="flex w-full items-center">
                  <label className="text-lg w-[30%] px-2">Arabic name :</label>
                  <input
                    className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
                    type="text"
                    placeholder={product.name_ar}
                    ref={newNameAr}
                    required
                  />
                </div>

                <div className="flex items-center">
                  <label className="text-lg w-[30%] px-2">English name :</label>
                  <input
                    className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
                    type="text"
                    placeholder={product.name_en}
                    ref={newNameEn}
                    required
                  />
                </div>

                <div className="flex items-center">
                  <label className="w-[30%] text-lg px-2">descAr :</label>
                  <input
                    className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
                    type="numbere"
                    placeholder={product.description_ar}
                    ref={newdescAr}
                    required
                  />
                </div>

                <div className="flex items-center">
                  <label className="w-[30%] text-lg px-2">descEn :</label>
                  <input
                    className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
                    type="numbere"
                    placeholder={product.description_en}
                    ref={newdescEn}
                    required
                  />
                </div>

                <div className="flex items-center">
                  <label className="w-[30%] text-lg px-2">Category :</label>
                  <select
                    className="w-[80%] form-select outline-none bg-transparent border-b-2 border-gray-300 "
                    aria-label="Category"
                    name="category"
                    defaultValue={product.category}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setCategory(e.target.value);
                    }}
                  >
                    <option className="bg-white" disabled selected value>
                      Select a category
                    </option>
                    {categories &&
                      categories.map((category) => {
                        return (
                          <option className="bg-white" value={category.name_en}>
                            {category.name_en}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="flex items-center">
                  <label className="w-[30%] text-lg px-2">Brand :</label>
                  <select
                    className="w-[80%] form-select outline-none bg-transparent border-b-2 border-gray-300 "
                    aria-label="Category"
                    name="category"
                    defaultValue={product.brand}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setBrand(e.target.value);
                    }}
                  >
                    <option className="bg-white" disabled selected value>
                      Select a category
                    </option>
                    {brands &&
                      brands.map((brand) => {
                        return (
                          <option className="bg-white" value={brand.name}>
                            {brand.name}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="flex items-center">
                  <label className="w-[30%] text-lg px-2">Sku :</label>
                  <input
                    className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
                    type="text"
                    placeholder={product.sku}
                    min={0}
                    ref={newSku}
                    required
                  />
                </div>

                <div className="flex items-center">
                  <label className="w-[30%] text-lg px-2">EAN Code :</label>
                  <input
                    className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
                    type="text"
                    placeholder={product.ean_code}
                    ref={newEanCode}
                    required
                  />
                </div>

                {/* { product.status == "pending" && 
                <div className="flex items-center">
                  <label className="w-[30%] text-lg px-2">Status :</label>
                  <select
                    className="w-[80%] form-select outline-none bg-transparent border-b-2 border-gray-300 "
                    aria-label="Status"
                    name="Status"
                    onChange={
                      (e) => {

                      setStatus(e.target.value);
                    }
                    // changeStatus
                  }
                  >
                    <option className="bg-white" disabled selected value>
                      Select a Status
                    </option>
                    <option className="bg-white" value="approved">
                      Approved
                    </option>
                    <option className="bg-white" value="declined">
                      Declined
                    </option>
                  </select>
                </div>
                 } */}

                {/* <div className="flex items-center">
                  <label className="w-[30%] text-lg px-2">Code :</label>
                  <input
                    className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
                    type="numbere"
                    placeholder={product.code}
                    ref={newCode}
                    required
                  />
                </div> */}

                <div className="flex items-center">
                  <label className="w-[30%] text-lg px-2">Sort Order :</label>
                  <input
                    className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700 "
                    type="text"
                    placeholder={product.sort_order}
                    ref={newSortOrder}
                    required
                  />
                </div>

                <div className="flex items-center">
                  <ImageUpload
                    onSelectImage={handleLogoImage}
                    width={100}
                    height={100}
                    defaultImage={product.image}
                  />
                </div>
              </div>
              <hr className="text-gray-400" />
              <div className="w-full flex justify-center items-center" >
                <button
                  type="button"
                  className="bg-skin-primary px-8 py-3 hover:bg-orange-500 text-white rounded-lg w-[20%] mx-auto "
                  data-dismiss="modal"
                  onClick={saveEdits}
                >
                  {isSaving == true ? (
                    <div className="flex justify-center items-center">
                      <Ring size={20} lineWeight={4} speed={2} color="white" />
                    </div>
                  ) : (
                    "Save Edits "
                  )}
                </button>
              </div>
            </Stack>
          )}
        </DialogContent>
        { product.status == "pending" &&  <DialogActions>
          <button
            type="button"
            className="bg-lime-950 px-8 py-3 text-white rounded-lg "
            data-dismiss="modal"
            onClick={approveProduct}
          >
            {isApproving == true ? (
              <div className="flex justify-center items-center">
                <Ring size={20} lineWeight={4} speed={2} color="white" />
              </div>
            ) : (
              "Approve Product"
            )}
          </button>
          <button
            type="button"
            className="bg-red-500 px-8 py-3 text-white rounded-lg"
            data-dismiss="modal"
            onClick={declineProduct}
          >
            {isDeclining == true ? (
              <div className="flex justify-center items-center">
                <Ring size={20} lineWeight={4} speed={2} color="white" />
              </div>
            ) : (
              "Decline Product"
            )}
          </button>
        </DialogActions>}
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
              <p className="text-xl pt-4">{product.name_en}</p>
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

export default AdminProduct;
