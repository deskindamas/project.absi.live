import React ,{useState , useEffect} from "react";
import Logo from '../../../public/images/item2.jpg';
import Image from 'next/image';
import Storeimage from '../../../public/images/storeimage.jpg';
import FilterCategories from "@/components/SellerStore/filterCategory/filterCategories";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import ItemProduct from '../../../public/images/kuala.jpg';


function Products() {

    
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
       
      const products =[
        { 
          id : 1 ,
          image : ItemProduct ,
          name : 'Lorem1' ,
          price : '1400 ',
          descraption : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....'
        },
        { 
            id : 2 ,
            image : ItemProduct ,
            name : 'Lorem2' ,
            price : '1500 ',
            descraption : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....'
          },
          { 
            id : 3 ,
            image : ItemProduct ,
            name : 'Lorem3' ,
            price : '1600 ',
            descraption : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....'
          },
          { 
            id : 4 ,
            image : ItemProduct ,
            name : 'Lorem4' ,
            price : '1400 ',
            descraption : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....'
          },
          { 
            id : 5 ,
            image : ItemProduct ,
            name : 'Lorem5' ,
            price : '1500 ',
            descraption : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....'
          },
          { 
            id : 6 ,
            image : ItemProduct ,
            name : 'Lorem6' ,
            price : '1600 ',
            descraption : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....'
          },
          { 
            id : 7 ,
            image : ItemProduct ,
            name : 'Lorem7' ,
            price : '1700 ',
            descraption : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.....'
          },
      ]

  return (
    <div >
             <div className=" w-full h-full flex flex-col justify-start items-center ">
              <div className=' relative w-full box-content pb-6' >
                 <Image className='w-full md:h-[500px] h-[200px] object-cover 'src={Storeimage} alt='store'/>
                {/* <div className='pb-6'> */}
                <Image className=' md:w-auto md:h-auto w-auto h-[35%]  shadow absolute z-10 md:bottom-20 bottom-10 right-10 rounded-full' src={Logo} alt='store'/>
                <h1 className='md:text-5xl text-base font-medium text-white absolute z-10 md:bottom-20 bottom-10  left-10 outline-black outline-2' >Super Star</h1>
                {/* </div> */}
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
              
              <div className='grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 '>
             
              {products.map((product) => (
                  
                  <div key={product.id} className="mb-4">
                <div className="bg-white overflow-hidden drop-shadow-md rounded-lg
                w-80  items-center justify-center">
                 <div className="w-full bg-cover overflow-hidden">
                <Image src={product.image} className="w-full h-64 transform transition duration-1000 hover:scale-125 hover:rotate-2  " />
                </div>
                <div className=" mt-4 px-4 py-4">
                <div className="flex justify-between mb-2">
                 <h3 className="text-gray-600 text-2xl font-medium ">
                {product.name}
                  </h3>
                  <p className="text-gray-800 text-lg font-medium " >{product.price} s.p</p>
                  </div>
                  <p className="text-gray-700 text-base font-light py-3">
                {product.descraption}
                  </p>
                  <div className="flex justify-center items-center py-4">
                   <button className="items-center py-2 
                     w-full text-sm font-medium 
                      text-center text-gray-900 
                      bg-white rounded-full border 
                      border-[#ff6600] hover:bg-[#ff6600] hover:text-white transition-all duration-500 "
                        >
                      Add To Cart
                     </button>
                     </div>
                    </div>
                    </div>
                   </div>
                  ))}

            </div>
        </div>   
    </div>
  );
}

export default withLayoutCustomer(Products);


