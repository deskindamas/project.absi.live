import React from "react";


function SellersAdmin({ names }) {

  return (
    <>
      <tr
        key={names.id}
        className="py-10 bg-gray-100 hover:bg-gray-200 font-medium   "
      >
         <td className="px-4 py-4">{names.id}</td>
        <td className="px-4 py-4">{names.name}</td>
        <td className="px-4 py-4">{names.phone}</td>
        <td className="px-4 py-4">{names.city}</td>
        <td className="px-4 py-4">{names.lng}</td>
        <td className="px-4 py-4">{names.lat}</td>
        <td className="px-4 py-4  " width={`10%`} >{names.created_at}</td>
        <td className="px-4 py-4" width={`10%`} >{names.updated_at}</td>
      </tr>


    </>
  );
}

export default SellersAdmin;
