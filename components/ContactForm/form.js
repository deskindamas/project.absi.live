import React from "react";
import { GiVibratingSmartphone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { BsFacebook, BsTelephonePlusFill } from 'react-icons/bs';


function Form(){
    return(
        <div className='flex justify-center'>
        <div className=''>
        <ul className='text-white'>
        <li>
        <a className='flex' href=''><GiVibratingSmartphone className='icon'/><span> +963987000888</span></a>
        </li>
        <li>
        <a className='flex' href=''><MdEmail className='icon'/><span>Tawasyme@info.com</span></a>
        </li>
        <li>
        <a className='flex' href=''><BsTelephonePlusFill className='icon'/><span> + 11 4635247</span></a>
        </li>
        <li>
        <a className='flex' href=''><BsFacebook className='icon'/><span>tawasyshop</span></a>
        </li>
        </ul>
        </div>
        <div className='bg-gray-300 py-8 px-4'>
        <h1 style={{color:"black" , fontSize:'20px' , marginBottom :" 40px"}}>Have a question?</h1>
         <div className='flex'>
         <input
          type='text'
          name='name'
          className='form-control formInput'
          placeholder='Name'
          />
           <input
          type='email'
          name='email'
          className='form-control formInput'
          placeholder='Email address'
          />
         </div>
        </div>
        </div>
    )
}
export default Form;