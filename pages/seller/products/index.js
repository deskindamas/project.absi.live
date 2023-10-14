import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import React, { useState , useEffect } from 'react';
import {FiEdit} from 'react-icons/fi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { BsToggleOff ,BsToggleOn} from 'react-icons/bs';
import { Dialog , DialogTitle, DialogContent , Stack , DialogActions} from '@mui/material';
import SellerProduct from "@/components/product/sellerProduct";
import { useRouter } from "next/router";

const data = [
    {
      "id": 1,
      "desc" : 'asdasd',
      "name": "Leanne Graham",
      "username": "desc",
      "category": "Sincere@april.biz",
        "image": "Kulas Light",
        "available": true,
        "quantity": "4",
        "price": "92994",
      "brand": "1-770-736-8031 x56442",
      "updated": "hildegard.org",
        "created": "Romaguera-Crona",
    },
    {
        "id": 2,
        "desc" : 'asdafda ssdfsadf sdafasdfsdf asd fsadfsadfs adfsadf sdfdbdsdfs hgjdsafgjkh afdsghjf dsaghjk jakhgsf dasasd',
        "name": "Leannasdasdasde Graham",
        "username": "desc",
        "category": "Sincere@april.biz",
          "image": "Kulas Light",
          "available": false,
          "quantity": "4",
          "price": "92994",
        "brand": "1-770-736-8031 x56442",
        "updated": "hildegard.org",
          "created": "Romaguera-Crona",
      },
  ]


function Products () {

    const tableheading = [
 
        {
          heading : "Name"
        },
        {
          heading : "Desc"
        },
        {
          heading : "Category"
        },
        {
          heading : "Image"
        },
        {
          heading : "Status"
        },
        {
          heading : "Brand"
        },
        {
          heading : "Created"
        },
        {
          heading : "Updated"
        },
        {
          heading : "Sold quantity"
        },
        {
            heading : "Price"
          },
        {
          heading : "Delete"
        },
    
      
      ] ;
      const [tablecontent, settablecontent] = useState([]);

      const router = useRouter () ; 
      
      useEffect(() => {
        const fetchRows = async () => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
          const data = await response.json();
          console.log(data);
          settablecontent(data);
        };
        fetchRows();
      }, []);
    
      const [isToggled, setIsToggled] = useState(false);
      const handleClick = (id) => {
        setIsToggled({
          ...isToggled,
          [id]: !isToggled[id],
        });
      };

      const [open, openchange] = useState(false);

      const closepopup = () => {
        openchange(false);
      };

      const [edit, setEdit] = useState(false);

      const editPrice = (id) =>
      {
       openchange(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resposne=> resposne.json())
        .then(res=>setEdit(res))
      }
    

    return < div>
    <div className="items-center w-full py-4 mx-auto my-10 bg-white rounded-lg shadow-md sm:w-11/12">
  <div className="container mx-auto">
    <div className="flex justify-between w-full px-4 py-2 items-center">
      <div className="text-xl font-bold">
        قائمة المنتجات
      </div>
      <button className="px-4 py-2 text-white bg-[#ff6600] rounded-md hover:bg-[#ff6600] focus:outline-none">
        اضافة منتج جديد
      </button>
    </div>
    <ul
      className="flex flex-row space-x-2 sm:space-x-6 md:space-x-12 mt-4 mx-4 items-center border-b border-gray-300 overflow-auto text-sm">
      <li class=" text-blue-500 group text-lg">
        <a href="#">All Products</a>
        <div
          className="h-1 bg-blue-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out">
        </div>
      </li>
      <li className="group text-lg">
        <a href="#">Pending Products</a>
        <div
          className="h-1 bg-blue-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out">
        </div>
      </li>
      <li className="group text-lg">
        <a href="#">Disabled Products</a>
        <div
          className="h-1 bg-blue-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out">
        </div>
      </li>
      <li className="group text-lg">
        <a href="#">Active Products</a>
        <div
          className="h-1 bg-blue-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out">
        </div>
      </li>
    </ul>
    <div
      className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:justify-between w-full px-4 mb-2 mt-4 items-center ">
      <div className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          className="w-full bg-gray-100 outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm h-10"
          type="text" placeholder="Search a product " />
      </div>
      <div className="flex-row space-x-2 items-center ">
        <select className="border border-gray-300 rounded-md text-gray-600 px-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
           focus:ring-0 h-10">
          <option>Filter by</option>
          <option></option>
          <option></option>
        </select>
  
      </div>
    </div>
    <div className="mt-6 overflow-x-auto">
      <table className="w-full overflow-x-auto table-auto">
          <thead className="">
          <tr className="text-sm font-semibold text-center border-b-2 border-blue-500 uppercase">
            <th>Id</th>
               {tableheading.map((index)=> {
            return (
           <th key={index.heading}>{index.heading}</th>
                 );
                 }) }
          </tr>
        </thead>

        <tbody className="text-lg font-normal text-gray-700 text-center">
        {/* {tablecontent.map((names,index)=> */}
        {data.map((names,index)=>
      
        <SellerProduct product = {names} />
        )}

        </tbody>
      </table>
    </div>
    <div className="flex flex-col items-center w-full px-4 py-4 text-sm text-gray-500 justify-center mx-auto">
      <div className="flex items-center justify-between space-x-2">
        <a href="#" className="hover:text-gray-600">Previous</a>
        <div className="flex flex-row space-x-1">
          <div className="flex px-2 py-px text-white bg-blue-400 border border-blue-400">1</div>
          <div className="flex px-2 py-px border border-blue-400 hover:bg-blue-400 hover:text-white">2</div>
        </div>
        <a href="#" className="hover:text-gray-600">Next</a>
      </div>
    </div>
  </div>

         <Dialog open={open} onClose={closepopup} fullWidth >
              <DialogTitle className='flex justify-between'>
             <h4 >Edit Product:</h4>
              </DialogTitle>
              <hr/>
              <DialogContent>
              <Stack spacing={2} margin={2}>
              <input className='mb-7 text-zinc-500 pl-2 outline-none border-b-2' 
                    type="numbere"
                    placeholder=" السعر الجديد"
                    required
                  />
              </Stack>
            </DialogContent>
            <DialogActions>
            <button type="button" className="bg-lime-950 px-8 py-3 text-white" data-dismiss="modal">Save</button>
              <button type="button" className="bg-zinc-500 px-8 py-3 text-white" data-dismiss="modal">Cancel</button>
            </DialogActions>
              </Dialog>

</div>
    </div>

}

export default withLayout(Products) ; 