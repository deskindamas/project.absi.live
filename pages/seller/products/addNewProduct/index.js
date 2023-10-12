import withLayout from "@/components/wrapping components/WrappingSellerLayout"
import React, { useState , useRef } from 'react';
import ChooseFile from '../../../images/choose_file - Copy.png';
import { Button } from "@mui/material";
import Image from "next/image";

 const AddNewProduct = () => {

 const [users, setUsers] = useState([]);

 const getUsers = async () => {
 const response = await fetch("https://jsonplaceholder.typicode.com/users/");
 const data = await response.json();
 setUsers(data)
 }
 const inputRef = useRef(null);
 const [imag , setimage] = useState("");

 const handleImageClick = () =>{
    inputRef.current.click();
}

const handleImageChange = (event) =>{
    const file = event.target.files[0];
    console.log(file);
     setimage(event.target.files[0]);
  }


 return  <div className='form-product'>
    <div className='container'>
    <div className='flex justify-center'>
    <h2 className='items-center text-2xl pt-9 pb-6 text-zinc-700'>Create New Product</h2>
    </div>
    <form className='flex justify-center'>
   <div className='items-center'>
    <div className='grid md:grid-cols-2 grid-col-1 gap-2'>
    <div className='px-6 py-4'> 
    <input className='md:w-[400px] w-full border-b-2 outline-none  text-xl' name='nameAr' placeholder="name ar"/>
    </div>
    <div className='px-6 py-4'> 
    <input className='md:w-[400px] w-full border-b-2  outline-none text-xl' name='nameEn' placeholder="name en"/>
    </div>
    <div className='px-6 py-4'> 
    <input className='md:w-[400px] w-full border-b-2 outline-none  text-xl' name='descriptionAr' placeholder="description ar"/>
    </div>
    <div className='px-6 py-4'> 
    <input className='md:w-[400px] w-full border-b-2  outline-none  text-xl' name='descriptionEn' placeholder="description en"/>
    </div>
    <div className='px-6 py-4'> 
    <select className="form-select md:w-[400px] w-full border-b-2  text-xl" aria-label="Category" >
    <option  value='lorem1'>lorem1</option>
    <option  value='lorem1'>lorem2</option>
    <option  value='lorem1'>lorem3</option>
     </select> 
    {/* <select className="form-select" aria-label="Category" >
      {
        users.map((category) => {
          return (
        <option key={category.id} value={category.name}>{category.name}</option>
          )
          })
         }
     </select>  */}
    </div>
    <div className='px-6 py-4'> 
    <select className="form-select md:w-[400px] w-full border-b-2 text-xl" aria-label="Category" >
    <option  value='lorem1'>lorem1</option>
    <option  value='lorem1'>lorem2</option>
    <option  value='lorem1'>lorem3</option>
   </select> 
    </div>
    <div className='px-6 py-4' onClick={handleImageClick} > 
    { imag ?
        <Image src={URL.createObjectURL(imag)} alt='upload image' style={{width:"100px", height:'100px'}}/> : 
        <Image className='md:w-[400px] shadow' src={ChooseFile} alt='upload image' style={{width:"60%", height:'40px'}} />
    }
    <input type='file' ref={inputRef} onChange={handleImageChange} style={{display:'none'}}/>
    </div>
    <div className='px-6 py-4'>
    <button className='bg-[#ff6600] text-white md:w-[400px] py-2'>
    Add Product
    </button>
    </div>
    </div>
    </div>
    </form>
    </div>
  </div>

 
}

export default withLayout(AddNewProduct) ;