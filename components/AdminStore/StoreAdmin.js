import Image from "next/image";
import React, { useRef, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FiEdit, FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
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
import ImageUpload from "../ImageUpload/ImageUpload";


function StoreAdmin({names}){

    
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [logoImage , setLogoImage] = useState();
  const [storeImage , setStoreImage] = useState();
  const newNameAr = useRef();
  const newNameEn = useRef();
  const NewopeningTime = useRef();
  const newClosingTime = useRef();
  const newOpeningDays = useRef();
  const newAddress = useRef();
  const newCode = useRef();
  const newArea = useRef();
  const router = useRouter();


  function handleLogoImage (data) {
    setLogoImage(data);
  }
  
  function handleStoreImage (data) {
    setStoreImage(data);
  }

    return(
          <>
            <tr
        key={names.id}
        className="py-10 bg-gray-100 hover:bg-gray-200 font-medium   "
      >
        <td className="px-4 py-4">{names.id}</td>
        <td className="px-4 py-4" width={`10%`} >{names.name_ar}</td>
        <td className="px-4 py-4" width={`10%`}>{names.name_en}</td>
        <td className="px-4 py-4 " >{names.opening_time}</td>
        <td className="px-4 py-4">{names.closing_time}</td>
        <td className="px-4 py-4 ">
              {names.status}

        </td>
        <td className="px-4 py-4 flex justify-center">
          <Image src={names.image} alt="photo" 
                 width={0}
                 height={0}
                 sizes="100vw"
                 style={{ width: "50%", height: "auto" }}  />
        </td>

        <td className="px-4 py-4">
          <Image src={names.logo} alt="photo" 
                 width={0}
                 height={0}
                 sizes="100vw"
                 style={{ width: "50%", height: "auto" }}  />
        </td>

        <td className="px-4 py-4">{names.store_type}</td>
        <td className="px-4 py-4">{names.opening_days}</td>
        <td className="px-4 py-4">{names.address}</td>
        <td className="px-4 py-4">{names.street}</td>
        <td>{names.area}</td>
        <td>{names.created}</td>
        <td>{names.update}</td>
        <td class="px-4 py-4">
          <div class="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
            <button
              onClick={() => setIsEditing(true)}
              class="items-center px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              <FiEdit2/>
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
        fullWidth  maxWidth="lg"
      >
        <DialogTitle className="flex justify-between border-b-2 border-black">
          <h4 className="text-gray-500 md:pl-6 font-medium">Edit Store : {names.name_en}</h4>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={1} margin={3}>
            <div className="md:grid md:grid-cols-2 gap-6">
            <div className="flex w-full items-center">
            <label className="text-lg w-[30%] px-2">NameAr :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="text"
              placeholder={names.name_ar}
              ref={newNameAr}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="text-lg w-[30%] px-2">NameEn :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="text"
              placeholder={names.name_en}
              ref={newNameEn}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">opening Time  :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="text"
              placeholder={names.opening_time}
              ref={NewopeningTime}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Closing Time :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="text"
              placeholder={names.closing_time}
              ref={newClosingTime}
              required
            />
            </div>
           
            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Store Type :</label>
            <select className="w-[80%] form-select outline-none bg-transparent border-b-2 border-gray-300 "
          aria-label="Store Type"
          name="Store Type">
          <option className="bg-white text-center " disabled selected value>Select a Store Type</option>
          <option className="bg-white" value="">Lorem1</option>
          <option className="bg-white" value="">Lorem2</option>
          <option className="bg-white" value="">Lorem3</option>
          </select>
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Status :</label>
            <select className="w-[80%] form-select outline-none bg-transparent border-b-2 border-gray-300 "
          aria-label="Status"
          name="Status">
          <option className="bg-white text-center " disabled selected value>Select a Status</option>
          <option className="bg-white" value="">Lorem1</option>
          <option className="bg-white" value="">Lorem2</option>
          <option className="bg-white" value="">Lorem3</option>
          </select>
            </div>


            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2"> opening Days :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="text"
              placeholder={names.opening_days}
              ref={newOpeningDays}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Address :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
              placeholder={names.address}
              ref={newAddress}
              required
            />
            </div>

            <div className="flex items-center">
            <label className="w-[30%] text-lg px-2">Area :</label>
            <input
              className="my-3 w-[70%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
              type="numbere"
               placeholder={names.area}
              ref={newArea}
              required
            />
            </div>
  
            <div className="flex items-center">
            <ImageUpload 
            onSelectImage={handleStoreImage}
            width={100}
            height={100}
            defaultImage= {names.image}
            />
            </div>  
             

            <div className="flex items-center">
            <ImageUpload 
            onSelectImage={handleLogoImage}
            width={100}
            height={100}
            defaultImage= {names.logo}
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
          <h4 className="">Delete Store:</h4>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={1} margin={3}>
            <div className="flex flex-col justify-start items-start w-full ">
              <p className="text-lg ">
                Are you sure you want to delete this Store ?
              </p>
              <p className="text-xl pt-4">{names.name_en}</p>
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
    )
}

export default StoreAdmin;