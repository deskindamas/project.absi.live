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

function StoreTypeADSAdmin({ storetypeads, refetch }) {


  const [isDeleting, setIsDeleting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [logoImage, setLogoImage] = useState();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const Api = createAxiosInstance(router);

  function handleLogoImage(data) {
    setLogoImage(data);
  }

  async function openDialog() {
    setIsEditing(true);
  }

  return (
    <>
     <tr
        key={storetypeads.id}
        className="py-10 bg-gray-100 hover:bg-gray-200 font-medium   "
      >
        <td className="px-4 py-4">{storetypeads.id}</td>
        <td className="px-4 py-4 flex justify-center">
          <Image
            src={storetypeads.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "50%", height: "auto" }}
          />
        </td>
        <td className="px-4 py-4">{storetypeads.store_typeId}</td>
        <td className="px-4 py-4">{convertDate(storetypeads.Created)}</td>
        
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

                <div className="flex items-center">
                  <ImageUpload
                    onSelectImage={handleLogoImage}
                    width={100}
                    height={100}
                    defaultImage={storetypeads.image}
                  />
                </div>
              </div>
              <hr className="text-gray-400" />
              <div className="w-full flex justify-center items-center" >
                <button
                  type="button"
                  className="bg-skin-primary px-8 py-3 hover:bg-orange-500 text-white rounded-lg w-[20%] mx-auto "
                  data-dismiss="modal"
                  // onClick={saveEdits}
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
        {/* { product.status == "pending" &&  <DialogActions>
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
        </DialogActions>} */}
      </Dialog>  


    <Dialog
        open={isDeleting}
        onClose={() => {
          setIsDeleting(false);
        }}
        fullWidth
      >
        <DialogTitle className="flex justify-between border-b-2 border-black ">
          <h4 className="">Delete Store Type ADS:</h4>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={1} margin={3}>
            <div className="flex flex-col justify-start items-start w-full ">
              <p className="text-lg ">
                Are you sure you want to delete this Delete Store Type ADS ?
              </p>
              <p className="text-xl pt-4">{storetypeads.id}</p>
            </div>
          </Stack>
        </DialogContent>
        {/* <DialogActions>
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
        </DialogActions> */}
      </Dialog> 
    </>
  );
}

export default StoreTypeADSAdmin;
