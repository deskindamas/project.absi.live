import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState , useEffect , useRef } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";

function SellerProduct ({product}) {

    const [isToggled , setIsToggled] = useState(product.available);
    const [isEditing , setIsEditing] = useState(false) ;
    const newPrice = useRef();

    function handleAvailable () {
        setIsToggled(!isToggled) ; 
    }

    function savePrice () {
        // connecting to the data base 
        
        setIsEditing(false);
    }

    return <>
        <tr key={product.id} className="py-10 bg-gray-100 hover:bg-gray-200 font-medium">
            <td className="px-4 py-4">{product.id}</td>
          <td className="px-4 py-4">{product.name}</td>
          <td className="px-4 py-4">{product.desc}</td>
          <td className="px-4 py-4">{product.category}</td>
          <td className="px-4 py-4">{product.image}</td>
          <td onClick={handleAvailable}>
                              {isToggled !== true ? (
                            <BsToggleOff
                              style={{
                                width: "18px",
                                height: "25px",
                                color: "#ff6600",
                              }}
                            />
                          ) : (
                            <BsToggleOn
                              style={{
                                width: "18px",
                                height: "25px",
                                color: "#ff6600",
                              }}
                            />
                          )}
                              </td>
          <td className="px-4 py-4">{product.brand}</td>
          <td className="px-4 py-4">{product.created}</td>
          <td className="px-4 py-4">{product.updated}</td>
          <td className="px-4 py-4">{product.quantity}</td>
          <td>{product.price}</td>
          <td className="px-4 py-4">
          <div className="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
          <button onClick={()=>setIsEditing(true)} 
           className="items-center px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
             <FiEdit/>
            </button>
             <button
             className="items-center px-2 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none">
            <RiDeleteBin6Line/>
            </button>
           </div>
            </td>
          </tr>

          <Dialog open={isEditing} onClose={() => {setIsEditing(false)}} fullWidth >
              <DialogTitle className='flex justify-between'>
             <h4 >Edit Product:</h4>
              </DialogTitle>
              <hr/>
              <DialogContent>
              <Stack spacing={2} margin={2}>
              <input className='mb-7 text-zinc-500 pl-2 outline-none border-b-2' 
                    type="numbere"
                    placeholder=" السعر الجديد"
                    ref={newPrice}
                    defaultValue = {product.price}
                    required
                  />
              </Stack>
            </DialogContent>
            <DialogActions>
            <button type="button" className="bg-lime-950 px-8 py-3 text-white" data-dismiss="modal" onClick={savePrice} >Save</button>
              <button type="button" className="bg-zinc-500 px-8 py-3 text-white" data-dismiss="modal" onClick={() => {setIsEditing(false)}} >Cancel</button>
            </DialogActions>
              </Dialog>
    </>

}

export default SellerProduct ;