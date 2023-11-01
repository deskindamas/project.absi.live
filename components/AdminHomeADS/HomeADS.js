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
import HomeADS from "@/pages/admin/Ads/HomeADS";

function HomeADSAdmin({ ads, refetch }) {

  const [isDeleting, setIsDeleting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [logoImage, setLogoImage] = useState();
  const [brand, setBrand] = useState();
  const [isSaving, setIsSaving] = useState(false);
  const newNameAr = useRef();
  const router = useRouter();
  const Api = createAxiosInstance(router);

  async function openDialog() {
    setIsEditing(true);
  }

  return (
    <>
     <tr
        key={ads.id}
        className="py-10 bg-gray-100 hover:bg-gray-200 font-medium   "
      >
         <td className="px-4 py-4">{ads.id}</td>
        <td className="px-4 py-4 flex justify-center">
          <Image
            src={ads.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "50%", height: "auto" }}
          />
        </td>
        <td className="px-4 py-4">{convertDate(ads.Created)}</td>
        
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
{/* 
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
            Edit Store Type ADS :
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
                  <label className="w-[30%] text-lg px-2">EAN Code :</label>
                  <input
                    className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
                    type="text"
                    placeholder={product.ean_code}
                    ref={newEanCode}
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
      </Dialog>  */}

      {/* <Dialog
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
      </Dialog> */}
    </>
  );
}

export default HomeADSAdmin;
