import withLayoutAdmin from "@/components/UI/adminLayout";
import React from "react";

function AdminDelivery (){
    return(
    <>
    <div className="py-10">
    <h1 className="bg-gray-100 text-center py-3 text-xl">Delivery</h1>
    <div className="flex flex-col justify-center items-center md:py-10">
     <div className=" w-[90%]">

    <div className="flex w-full gap-6 items-center py-4">
     <label className="text-lg w-[20%]">Min Delivery Price :</label>
      <input
      className="my-3 w-[60%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
      type="text"
      placeholder= 'Min Delivery Price'
      required/>
      <div className="w-[20%]">
      <button className="bg-skin-primary text-white px-6 py-1">Save</button>
      </div>
    </div>

    <div className="flex w-full gap-6 items-center py-2">
     <label className="text-lg w-[20%]">Price Per Kilometer:</label>
      <input
      className="my-3 w-[60%] text-black placeholder:text-zinc-500 pl-2 outline-none border-b-2 focus:border-skin-primary transition-all duration-700"
      type="text"
      placeholder= 'Price Per Kilometer'
      required/>
      <div className="w-[20%]">
      <button className="bg-skin-primary text-white px-6 py-1">Save</button>
      </div>
    </div>

    </div>
     </div>
    </div>
         
    </>
    )
}
export default withLayoutAdmin(AdminDelivery);