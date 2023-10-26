import { Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import item1 from'../../public/images/kuala.jpg';
import Image from "next/image";


function OrderAdmin({ names  }) {

    const [open, openchange] = useState(false);

    const functionopenpopup = async () => {
        openchange(true);
      };
      const closepopup = () => {
        openchange(false);
      };

    return(
        <>
      <tr
        key={names.id}
        className="even:bg-zinc-200 odd:bg-zinc-50 text-center"
      >
           <td className="pb-5 pt-5">{names.id}</td>
        <td className="pb-5 pt-5">{names.store_name}</td>
        <td className="pb-5">{names.customerName}</td>
        <td className="pb-5">{names.status}</td>
        <td className="pb-5">{names.location}</td>
        <td className="pb-5">{names.created}</td>
        <td className="pb-5">{names.update}</td>
        <td className="pb-5">
          <button
            onClick={functionopenpopup}
            className="bg-transparent border-b-2 border-[#ff6600] "
          >
            Details
          </button>
        </td>
      </tr>

     <Dialog open={open} onClose={closepopup} fullWidth maxWidth="md">
          <DialogTitle className=" border-b-2 border-gray-200">
          <div className="md:mx-5">
          <div className="flex justify-between mx-auto">
          <h4 className="text-xl text-gray-600">Name: lorem</h4>
          <h4>Date : 12/3/2023</h4>
           </div>
           <div className="flex justify-between mx-auto text-lg text-gray-400 font-light">
           <h6>Store Name : Lorem </h6>
           <h4>Phone : 0964328926</h4>
           </div>
            <h6 className="text-lg text-gray-400 font-light">Location1 : Damascus </h6>
            <h6 className="text-lg text-gray-400 font-light">Location2 : Damascus </h6>
            </div>
          </DialogTitle>
        <DialogContent>
            <Stack spacing={2} margin={2}>
             <table className="table w-full">
             <thead className="">
                <tr className="text-sm font-semibold text-center border-b-2 border-skin-primary uppercase">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody className="text-lg font-normal text-gray-700 text-center">
                <tr
              key={names.id}
               className="even:bg-zinc-200 odd:bg-zinc-50 text-center "
               >
                 <td className="pb-5 pt-5">{names.store_name}</td>
                  <td className="pb-5 pt-5 flex justify-center">
                   5  
                   </td>
                  <td className="pb-5 pt-5">7</td>
                  <td className="pb-5 pt-5">4000</td>
                 </tr>

                 <tr
              key={names.id}
               className="even:bg-zinc-200 odd:bg-zinc-50 text-center "
               >
                 <td className="pb-5 pt-5">{names.store_name}</td>
                  <td className="pb-5 pt-5 flex justify-center">
                   5  
                   </td>
                  <td className="pb-5 pt-5">7</td>
                  <td className="pb-5 pt-5">4000</td>
                 </tr>

                 <tr
              key={names.id}
               className="even:bg-zinc-200 odd:bg-zinc-50 text-center "
               >
                 <td className="pb-5 pt-5">{names.store_name}</td>
                  <td className="pb-5 pt-5 flex justify-center">
                   5  
                   </td>
                  <td className="pb-5 pt-5">7</td>
                  <td className="pb-5 pt-5">4000</td>
                 </tr>
                </tbody>

              </table> 

             <div className="w-full flex justify-center border-t-2 border-gray-300 pt-5">
                <div className="flex justify-start w-full ">
                 <div className="w-[50%] px-4">
                <h3 className="border-b-2 border-skin-primary">Status : loreem</h3>
                <h3 className="border-b-2 border-skin-primary">Delivery : loreem</h3>
                 </div>
                 <div className="w-[50%] px-4">
                 <h3 className="border-b-2 border-skin-primary">Total :loreem </h3>
                <h3 className="border-b-2 border-skin-primary">Discount : loreem </h3>
                <h3 className="border-b-2 border-skin-primary">Final : loreem</h3>
                 </div>
                </div>
              </div>  
            </Stack>
        </DialogContent>
        
            <DialogActions className="grid md:grid-cols-2 grid-cols-1 ">
            <button type="button" className="bg-gray-500 text-white px-14 py-2" data-dismiss="modal">Cancel</button>
            </DialogActions>
      </Dialog> 
    </>
    )
}

export default OrderAdmin;