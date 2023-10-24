import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";

function BrandAdmin({ names }) {
    
  return (
    <>
      <tr
        key={names.id}
        className="py-10 bg-gray-100 hover:bg-gray-200 font-medium   "
      >
         <td className="px-4 py-4">{names.id}</td>
        <td className="px-4 py-4">{names.name}</td>
        <td className="px-4 py-4  " width={`10%`} >{names.created_at}</td>
        <td className="px-4 py-4" width={`10%`} >{names.updated_at}</td>
        <td class="px-4 py-4">
          <div class="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
            <button
              onClick={() => setIsEditing(true)}
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


    </>
  );
}

export default BrandAdmin;
