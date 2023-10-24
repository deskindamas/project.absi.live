import Image from "next/image";
import React from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FiEdit, FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function StoreAdmin({names}){
    return(
          <>
            <tr
        key={names.id}
        className="py-10 bg-gray-100 hover:bg-gray-200 font-medium   "
      >
        <td className="px-4 py-4">{names.id}</td>
        <td className="px-4 py-4">{names.name_ar}</td>
        <td className="px-4 py-4">{names.name_en}</td>
        <td className="px-4 py-4 ">{names.opening_time}</td>
        <td className="px-4 py-4">{names.closing_time}</td>
        <td className="  ">
            <div className="w-min h-min mx-auto ">
              {/* <Ring size={15} lineWeight={5} speed={2} color="#ff6600" /> */}
            </div>
            <BsToggleOn
              className="cursor-pointer"
              style={{
                width: "18px",
                height: "25px",
                color: "#ff6600",
                margin: `auto`,
              }}
            />
            <BsToggleOff
              className="cursor-pointer"
              style={{
                width: "18px",
                height: "25px",
                color: "#ff6600",
                margin: `auto`,
              }}
            />
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
          </>
    )
}

export default StoreAdmin;