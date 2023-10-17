import React from 'react';
import Logo from '../../public/images/tawasylogowhite.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsFillTelephoneFill ,BsInstagram} from 'react-icons/bs';


const Footer =() => {
  return (
        <div className='bg-[#262626]  bottom-0 w-full pb-10 pt-5'>
          <div >
        <div className='flex justify-center pb-5 text-gray-400'>
        <Link className='mr-16' href='#'>Contact us</Link>
         <Link className='mr-16' href='#'>Privacy Policy</Link>
         <Link href='#'>Terms and Conditions</Link>
      
        </div>
        <hr/>
        </div>
        <div className='grid md:grid-cols-4 sm:grid-cols-1 grid-col-1 gap-4 px-20 py-10'>
        <div className='items-center'>
        <Image src={Logo} alt='logo' className='w-[40%] ml-20 mb-4'/>
        <p className='text-white text-center'>Today, shopping has become more enjoyable after we were<br/> 
          able to collect more than 400 important<br/> brands for you to shop from
           </p>
        </div>

        <div className='text-white items-center text-center'>
        <h2 className='mb-4 text-skin-primary'>Menu</h2>
        <ul>
        <li className='mb-2'><Link href='#'>Home</Link></li>
        <li className='mb-2'><Link href='#'>Orders</Link></li>
        <li className='mb-2'><Link href='#'>About Us</Link></li>
        <li className='mb-2'><Link href='#'>Contact Us</Link></li>
        </ul>
        </div>
          
          
        <div className='text-white items-center text-center'>
        <h2 className='mb-4 text-skin-primary'>Lorem</h2>
        <ul>
        <li className='mb-2'><Link href='#'>Home</Link></li>
        <li className='mb-2'><Link href='#'>Orders</Link></li>
        <li className='mb-2'><Link href='#'>About Us</Link></li>
        <li className='mb-2'><Link href='#'>Contact Us</Link></li>
        </ul>
        </div>

        <div className='text-white items-center text-center'>
        <h2 className='mb-3 text-skin-primary'>Menu</h2> 
        <ul>
        <li className='mb-2'><Link href='#'> Damascus - Kafarsouseh</Link></li>
        <li className='mb-2'><Link href='#'>+963987000888</Link></li>
        <li className='mb-2'><Link href='#'>Tawasyme@info.com</Link></li>
        <div className='mt-4'>
         <ul className='flex justify-center'>
         <li className='mr-2'><Link href='#'><FaTelegram className='w-[20px] h-[20px]'/> </Link></li>
          <li className='mr-2'><Link href='#'><BsFillTelephoneFill className='w-[20px] h-[20px]'/> </Link></li>
          <li className='mr-2'><Link href='#'><BsFacebook className='w-[20px] h-[20px]'/> </Link></li>
          <li className='mr-2'><Link href='#'><BsInstagram className='w-[20px] h-[20px]'/> </Link></li>
         </ul>
         </div>
        </ul>
        </div>

        </div>
        </div>
  
      );
}

export default Footer;