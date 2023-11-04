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



function HomeMobileADS({ ads, refetch }) {

  const [open, openchange] = useState(false);
  const [openmobile, openmobilechange] = useState(false);
  const [image, setImage] = useState();
  const storetypeId = useRef();

const functionopenpopup = () => {
  openchange(true);
};
const closepopup = () => {
  openchange(false);
};

function handleADSImage(image) {
  setImage(image);
}

const functionopenMobilepopup = () => {
  openmobilechange(true);
};

const closepopupMobile = () => {
  openmobilechange(false);
};
  return (
    <>
     <tr
        key={ads.id}
        className="py-10 bg-red-100 hover:bg-gray-200 font-medium   "
      >
         <td className="px-4 py-4">{ads.id}</td>
        <td className="px-4 py-4 flex justify-center">
          <Image
            src={ads.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "20%", height: "auto" }}
          />
        </td>
        <td className="px-4 py-4">{convertDate(ads.Created)}</td>
        
        <td class="px-4 py-4">
          <div class="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
            <button
              onClick={functionopenpopup}
              class="items-center px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              <FiEdit />
            </button>

          </div>
        </td>
      </tr>
    
      <Dialog open={open}
        onClick={closepopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle className="flex justify-between border-b-2 border-black">
          <h4 className="text-gray-500 md:pl-6 font-medium">
            Edit ADS :
          </h4>
        </DialogTitle>
        <DialogContent>
            <Stack spacing={1} margin={3}>
              <div className="md:grid md:grid-cols-2 gap-6">

                <div className="flex items-center">
                  <ImageUpload
                    onSelectImage={handleADSImage}
                    width={100}
                    height={100}
                    defaultImage={ads.image}
                  />
                </div>
              </div>
              <hr className="text-gray-400" />
              <div className="w-full flex justify-center items-center" >
                <button
                  type="button"
                  className="bg-skin-primary px-8 py-3 hover:bg-orange-500 text-white rounded-lg w-[40%] mx-auto "
                  data-dismiss="modal"
                  // onClick={saveEdits}
                >
                    <div className="flex justify-center items-center">
                      <Ring size={20} lineWeight={4} speed={2} color="white" />
                    </div>
                </button>
              </div>
            </Stack>
        </DialogContent>
      </Dialog>  

    </>
  );
}

export default HomeMobileADS;
