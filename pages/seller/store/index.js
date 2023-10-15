import React, {useState , useEffect } from 'react';
import withLayout from '@/components/wrapping components/WrappingSellerLayout';
import SellerStore from '@/components/SellerStore/sellerStore';
import Logo from '../../../public/images/logo-store.jpg';
import Image from 'next/image';
import Storeimage from '../../../public/images/storeimage.jpg';
import FilterCategories from '@/components/SellerStore/filterCategory/filterCategories';
import styles from '../../../components/componentsStyling/sellerStyles.module.css';

const Store = () => {
 
    const categories = [
      {
        name : 'lorem1'
      },
      {
         name : 'lorem2'
      },
      {
       
        name : 'lorem3'
      },
      {
        
        name : 'lorem4'
      },
      {
       
        name : 'lorem5'
      },
      {
  
        name : 'lorem6'
      },
      {
    
        name : 'lorem7'
      },
    ]

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
      const response = await fetch("https://api.github.com/users");
      const FinalData = await response.json();
      setUsers(FinalData)
  }

  useEffect(() => {
      getUsers();
  }, []);

  

  return (
           <div className="md:px-7 w-full h-full flex flex-col justify-start items-center ">
              <div className=' relative w-full box-content' >
                 <Image className='w-full 'src={Storeimage} alt='store'/>
                <div className='pb-6'>
                <Image className=' shadow absolute z-10 md:bottom-20  right-10 rounded-full' src={Logo} alt='store'/>
                <h1 className='text-5xl font-semibold text-white absolute z-10 md:bottom-20  left-10 outline-black outline-2' >Super Star</h1>
                </div>
              </div>
              <div className='flex justify-start w-full pb-5'>
              <h2 className='items-start text-xl text-gray-600 font-medium'>Opening Time :   <span className='text-gray-400'> 10 : 00 AM</span> </h2>
              </div>
              <div className='flex justify-start w-full pb-5'>
              <h2 className='items-start text-xl text-gray-600 font-medium'>Closing Time :   <span className='text-gray-400'> 10 : 00 AM</span> </h2>
              </div>
              <div className='flex justify-start w-full pb-16'>
              <h2 className='items-start text-xl text-gray-600 font-medium'>Opening Days :   <span className='text-gray-400'> Sunday , Monday , Tuesday ,Wednesday , Thursday</span> </h2>
              </div>
              <div className='flex justify-center bg-gray-200 w-full pt-3 pb-3 mb-10'>
              <ul className='flex flex-wrap items-center'>
          {categories.map((category) => {
            return (
            <FilterCategories  key={categories?.name} categories={category}   />
            );
          })}
        </ul>
              </div>
              <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 ">
              {
                users.map((curElem) => {
                return (
                 <SellerStore store = {curElem} />
                   )
                })
                }
                   </div>
             </div>   
  );
};


  export default  withLayout(Store);