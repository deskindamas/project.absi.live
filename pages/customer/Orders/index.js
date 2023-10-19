import withLayoutCustomer from '@/components/wrapping components/WrappingCustomerLayout';
import React, { useState, useEffect } from 'react';


const Orders = () => {
     
    return(<>
    <div className='bg-gray-200'>
    <div >
     <h1>All Orders</h1> 
    </div>
    <div>
    <form className="w-full my-4">
      <div className="flex bg-gray-50 pt-1 pb-1 sm:w-2/5 items-center rounded-lg mb-4 mr-4 border-2">
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
                placeholder="Search a product "
              />
            </div>
       </form> 
    </div>
    <div className=''>
    
    </div>
    </div>
    </>
   
    );
}

export default withLayoutCustomer(Orders);