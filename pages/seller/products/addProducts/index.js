import withLayout from "@/components/wrapping components/WrappingSellerLayout"
import React, { useState , useEffect } from 'react';
import AddProduct from "@/components/product/AddProduct/AddSellerProduct";
import {TfiShoppingCartFull } from "react-icons/tfi";

 function AddProducts () {

    const [users, setUsers] = useState([]);
    const [count , setcount]= useState(0);
    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }

    useEffect(() => {
        getUsers();
    }, []);

     const  handleIncrement = () => (
        setcount(count + 1)
    )


 return <div className='md:px-16'>
    <div className='flex justify-between py-10'>
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

     <button className='bg-[#ff6600] px-9 py-3 text-white' >
     Add New Product
     </button>
    </div>
    <select className="border mb-6 border-gray-300 rounded-md text-gray-600 px-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
           focus:ring-0 h-10">
          <option>Filter by</option>
          <option></option>
          <option></option>
        </select>

  <div className="container">
  <div class="grid md:grid-cols-3 grid-col-1 gap-4 ">
  {
    users.map((curElem) => {
     return (
         <AddProduct addproduct = {curElem} />
          )
        })
         }
           </div>

           <button >
              <div  style={{
                color:'white',
                padding:'10px',
                zIndex:'999',
                position: 'fixed',
                bottom:'10px',
                left:'10px',
              }}><TfiShoppingCartFull className='bg-zinc-500 w-[60px] h-[60px] rounded-[50%] p-[15px]'/> </div>
              </button>

           </div>   

          
      </div> 


 
}

export default withLayout(AddProducts) ;