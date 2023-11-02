import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import React, { useState } from "react";
import item1 from "../../../../public/images/kuala.jpg";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import withLayoutAdmin from "@/components/UI/adminLayout";
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import { useRef } from "react";
import StoreTypeADSAdmin from "@/components/AdminStoreTypeADS/StoreTypeADSAdmin";
import StoreTypeMobileADS from '../../../../components/StoreTypesMobileADS/StoreTypeMobileADS'


const tableheading = [
  {
    heading: "Image",
  },
  {
    heading: "Store Type Id",
  },
  {
    heading: "Created",
  },
];

const StoreType = [
  {
    id: 1,
    image: item1,
    store_typeId: 5,
    Created: "12/3/2022",
  },
  {
    id: 2,
    image: item1,
    store_typeId: 5,
    Created: "12/3/2022",
  },
  {
    id: 3,
    image: item1,
    store_typeId: 5,
    Created: "12/3/2022",
  },
];


function StoreTypeADS() {

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

function handleStoreTypeADSImage(image) {
  setImage(image);
}

const functionopenMobilepopup = () => {
  openmobilechange(true);
};

const closepopupMobile = () => {
  openmobilechange(false);
};


  return (
    <div>
      <div className="md:px-6">
        <div className="w-full h-screen mx-auto">
          <div className="py-7">
            <div className="flex justify-between">
            <h2 className="text-2xl text-stone-500 pb-5 ">
              All Store Type ADS
            </h2>
              <div className="w-[50%] flex justify-end ">
                <button
                  className="bg-skin-primary text-white py-1 px-3 rounded-md"
                  onClick={functionopenpopup}
                >
                  Add Website Store Type ADS
                </button>
                <button
                  className="bg-skin-primary text-white py-1 px-3 rounded-md ml-2"
                  onClick={functionopenMobilepopup}
                >
                  Add Mobile Store Type ADS
                </button>
              </div>
            </div>
          </div>

         <h2 className="text-2xl text-gray-500 bg-slate-50 py-1 px-2">Website Ads </h2>
          <table className="w-full mt-6 h-[70%] overflow-auto table-auto">
            <thead className="h-auto">
              <tr className="text-sm font-semibold text-center border-b-2 border-blue-500 uppercase">
                <th>Id</th>
                {tableheading.map((index) => (
                  <th className=" px-4 py-2" key={index.heading}>
                    {index.heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-lg h-[10%] font-normal text-gray-700 text-center">
              {StoreType.map((names) => {
                return (
                  <StoreTypeADSAdmin
                    storetypeads={names}
                    key={names.id}
                    refetch={() => {
                      refetch();
                    }}
                  />
                );
              })}
            </tbody>
          </table>

          <h2 className="text-2xl text-gray-500 bg-slate-50 py-1 px-2 mt-7">Mobile Ads </h2>
          <table className="w-full mt-6 h-[70%] overflow-auto table-auto">
            <thead className="">
              <tr className="text-sm font-semibold text-center border-b-2 border-blue-500 uppercase">
                <th>Id</th>
                {tableheading.map((index) => (
                  <th className=" px-4 py-4 " key={index.heading}>
                    {index.heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-lg h-[10%] font-normal  text-gray-700 text-center">
              {StoreType.map((names) => {
                return (
                  <StoreTypeMobileADS
                   storetypemobileads={names}
                  key={names.id}
                  refetch={() => {
                    refetch();
                  }}
                  />
                );
              })}
            </tbody>
          </table>
          {/* <div className="w-max mx-auto" > There are no store type ads. </div> */}
        </div>
      </div>

      
      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="md">
        <DialogTitle className=" border-b-2 border-gray-200">
          <h3 className="py-2 pl-3 text-gray-600">Create New Website Store Type ADS</h3>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <form>

             <div className="flex justify-between">
            <div className="px-6 py-2">
                <input
                  className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                  name="store_type Id"
                  type="number"
                  placeholder="store_type Id"
                  ref={storetypeId}
                  required
                />
              </div>

            <div className="px-6 py-2 flex flex-col justify-start items-start box-border pl-3 w-[80%] mx-auto ">
                <div className="w-[200px] h-[100px]">
                  <ImageUpload
                    onSelectImage={handleStoreTypeADSImage}
                    width={150}
                    height={50}
                  />
                </div>
              </div>
             
              </div>
              <div className="flex justify-start">
                <button
                  className="bg-skin-primary w-[20%] rounded-md text-white px-8 py-2"
                  type="submit"
                >
                Save
                </button>
              </div>
            </form>
          </Stack>
        </DialogContent>

        <DialogActions className="grid md:grid-cols-2 grid-cols-1 "></DialogActions>
      </Dialog>

      <Dialog open={openmobile} onClose={closepopupMobile} fullWidth maxWidth="md">
        <DialogTitle className=" border-b-2 border-gray-200">
          <h3 className="py-2 pl-3 text-gray-600">Create New Mobile Store Type ADS</h3>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <form>

             <div className="flex justify-between">
            <div className="px-6 py-2">
                <input
                  className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                  name="store_type Id"
                  type="number"
                  placeholder="store_type Id"
                  ref={storetypeId}
                  required
                />
              </div>

            <div className="px-6 py-2 flex flex-col justify-start items-start box-border pl-3 w-[80%] mx-auto ">
                <div className="w-[200px] h-[100px]">
                  <ImageUpload
                    onSelectImage={handleStoreTypeADSImage}
                    width={150}
                    height={50}
                  />
                </div>
              </div>
             
              </div>
              <div className="flex justify-start">
                <button
                  className="bg-skin-primary w-[20%] rounded-md text-white px-8 py-2"
                  type="submit"
                >
                Save
                </button>
              </div>
            </form>
          </Stack>
        </DialogContent>

        <DialogActions className="grid md:grid-cols-2 grid-cols-1 "></DialogActions>
      </Dialog>

    </div>
  );
}

export default withLayoutAdmin(StoreTypeADS);
