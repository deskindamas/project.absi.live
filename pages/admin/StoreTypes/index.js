import React, { useRef, useState } from "react";
import withLayoutAdmin from "@/components/UI/adminLayout";
import item1 from '../../../public/images/kuala.jpg';
import StoreTypeAdmin from "@/components/AdminStoreType/StoreTypeAdmin";
import { Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import ChooseFile from '../../images/choose_file - Copy.png';


const tableheading = [
    {
      heading: "Name Ar",
    },
    {
        heading: "Name En",
      },
    {
      heading: "Sort Order",
    },
    {
        heading: "Image",
      },
      {
        heading: "Created At",
      },
    {
      heading: "Updated At",
    },
      {
        heading: "Action",
      },
  ];

  const storeTypes = [
    {
      id: 1,
      nameAr: "lorem1",
      nameEn: "lorem1",
      sortOrder: "5",
      image: item1,
      created_at: '5/4/2013',
      updated_at:'5/4/2013',
    },
    {
        id: 2,
        nameAr: "lorem2",
        nameEn: "lorem2",
        sortOrder: "25",
        image: item1,
        created_at: '5/4/2013',
        updated_at:'5/4/2013',
      },
      {
        id: 3,
        nameAr: "lorem3",
        nameEn: "lorem3",
        sortOrder: "25",
        image: item1,
        created_at: '5/4/2013',
        updated_at:'5/4/2013',
      },
      {
        id: 4,
        nameAr: "lorem4",
        nameEn: "lorem3",
        sortOrder: "25",
        image: item1,
        created_at: '5/4/2013',
        updated_at:'5/4/2013',
      },
      {
        id: 5,
        nameAr: "lorem5",
        nameEn: "lorem3",
        sortOrder: "25",
        image: item1,
        created_at: '5/4/2013',
        updated_at:'5/4/2013',
      },
 
  ];


function StoreType() {

  const [open, openchange] = useState(false);

  const functionopenpopup = async () => {
      openchange(true);
    };
    const closepopup = () => {
      openchange(false);
    };
    
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setImage(file);
    };

    const handleImageClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };
  
    const inputRef = useRef(null);
  

    return(
        <div className="md:px-6">
        <div className="h-screen">
          <div className="m-5 p-5">
            <h2 className="text-2xl text-stone-500 pb-5 ">
            Store Type
            </h2>
            <div className="flex">
            <div className="w-[50%]">
            <form className="w-full ">
            <div className="flex bg-gray-50 pt-1 pb-1 w-[80%] items-center rounded-lg mb-4 mr-4 border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mx-2"
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
                className="w-full  bg-gray-50 outline-none border-transparent text-gray-700 focus:border-transparent focus:ring-0 rounded-lg text-sm h-8"
                type="text"
                placeholder="Search a Store Type "
              />
            </div>
          </form>
            </div>

            <div className="w-[50%] flex justify-end ">
              <button  onClick={functionopenpopup} className="bg-skin-primary text-white py-1 px-3 rounded-md">Add Store Type</button>
            </div>
            </div>
          </div>
  
          <div className="w-full h-[70%] overflow-x-auto ">
              <table className="w-full overflow-x-auto table-auto">
                  <thead className="">
                  <tr className="text-sm font-semibold text-center border-b-2 border-gray-400 uppercase">
                      <th>Id</th>
                      {tableheading.map((index) => (
                        <th className="px-4 " key={index.id} >{index.heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-lg font-normal text-gray-700 text-center">
                    {storeTypes.map((storeType) => {
                      return <StoreTypeAdmin names={storeType} key={storeType.id} refetch={() => {refetch();}} />;
                    })}
                  </tbody>
                </table>
           
          </div>
        </div>

        <Dialog open={open} onClose={closepopup} fullWidth maxWidth="md">
          <DialogTitle className=" border-b-2 border-gray-200">
          <h3 className="py-2 pl-3 text-gray-600">Create New Store Type</h3>
          </DialogTitle>
        <DialogContent>
            <Stack spacing={2} margin={2}>
            <form>
          <div className="md:grid md:grid-cols-2 sm:grid-cols-1 items-center">
         <div className="w-full px-4 py-3">
        <input
          type="text"
          className="outline-none appearance-none border-b-2 border-gray-300 focus:border-[#FD6500] w-full transition-all duration-700"
          placeholder="name_ar"
          inputMode="name ar" 
          required
        />
         </div>

         <div className="w-full px-4 py-3">
        <input
          type="text"
          className="outline-none appearance-none border-b-2 border-gray-300 focus:border-[#FD6500] w-full transition-all duration-700"
          placeholder="name_en"
          inputMode="name en" 
          required
        />
         </div>

         <div className="w-full px-4 py-3">
        <input
          type="text"
          className="outline-none appearance-none border-b-2 border-gray-300 focus:border-[#FD6500]  w-full transition-all duration-700"
          placeholder="sort_order"
          inputMode="sort order" 
          required
        />
         </div>
          
        
       <div className="w-full px-4 py-3"
        onClick={handleImageClick}
        style={{ marginTop: "20px" }}>
        {image ? (
        <img
        src={URL.createObjectURL(image)}
        alt="upload image" style={{ width: "100px", height: "100px" }} />
         ) : (
         <img
          src={ChooseFile}
          alt="upload image"
           style={{ width: "60%", height: "40px" }}/> )}
           <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
            </div>
            </div>
        
          <div className="flex justify-start pt-6">
          <button className="bg-skin-primary rounded-md text-white px-8 py-2">Add Store Type</button>
          </div>
           </form>
            </Stack>
        </DialogContent>
        
            <DialogActions className="grid md:grid-cols-2 grid-cols-1 ">

            </DialogActions>
      </Dialog> 
      </div>
    )
}

export default withLayoutAdmin(StoreType);