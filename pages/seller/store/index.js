import React, { Fragment ,useState , useEffect } from 'react';
import withLayout from '@/components/wrapping components/WrappingSellerLayout';
import SellerStore from '@/components/SellerStore/sellerStore';
import Logo from '../../../public/images/logo-store.jpg';
import Image from 'next/image';
import Storeimage from '../../../public/images/storeimage.jpg';



const Store = () => {
 
    const categories = [
      {
        id : 1 ,
        name : 'lorem1'
      },
      {
        id : 2 ,
        name : 'lorem2'
      },
      {
        id : 3 ,
        name : 'lorem3'
      },
      {
        id : 4 ,
        name : 'lorem4'
      },
      {
        id : 5,
        name : 'lorem5'
      },
      {
        id : 6 ,
        name : 'lorem6'
      },
      {
        id : 7 ,
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
              <div className='w-full' >
                 <Image className='w-full 'src={Storeimage} alt='store'/>
                <div className='pb-6'>
                <Image className='shadow absolute z-10 top-6 left-10 rounded-[50%]' src={Logo} alt='store'/>
                <h1>Super Star</h1>
                </div>
              </div>
              <div className=''>
              <ul>
              {
                categories.map((categorie) => {
                return (
                  <li key = {categorie.id}> {categorie.name} </li>
                   )
                })
                }
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