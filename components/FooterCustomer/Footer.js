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
        <div className='md:flex md:justify-center items-center text-center pb-5 text-gray-400'>
        <div className='mr-[2%] ml-[2%]'><Link className='my-2' href='#'>Contact us</Link></div>
        <div className='mr-[5%] ml-[2%]'> <Link className='my-2' href='#'>Privacy Policy</Link> </div>
        <div className='my-2'><Link href='#'>Terms and Conditions</Link> </div>
        </div>
        <hr/>
        </div>
        <div className='grid md:grid-cols-4 sm:grid-cols-1 grid-col-1 gap-4 px-20 py-10'>
        <div className='items-center'>
        <Image src={Logo} alt='logo' className='w-[40%] ml-24 mb-4'/>
        <p className='text-white text-lg text-center'>Today, shopping has become more enjoyable after we were<br/> 
          able to collect more than 400 important<br/> brands for you to shop from
           </p>
        </div>

        <div className='text-white items-center text-center'>
        <h2 className='mb-4 text-skin-primary'>Menu</h2>
        <ul className='text-xl'>
        <li className='mb-2'><Link href='#'>Home</Link></li>
        <li className='mb-2'><Link href='#'>Orders</Link></li>
        <li className='mb-2'><Link href='#'>About Us</Link></li>
        <li className='mb-2'><Link href='#'>Contact Us</Link></li>
        </ul>
        </div>
          
          
        <div className='text-white items-center text-center'>
        <h2 className='mb-4 text-skin-primary'>Lorem</h2>
        <ul className='text-xl'>
        <li className='mb-2'><Link href='#'>Home</Link></li>
        <li className='mb-2'><Link href='#'>Orders</Link></li>
        <li className='mb-2'><Link href='#'>About Us</Link></li>
        <li className='mb-2'><Link href='#'>Contact Us</Link></li>
        </ul>
        </div>

        <div className='text-white items-center text-center'>
        <h2 className='mb-3 text-skin-primary'>Menu</h2> 
        <ul className='text-xl'>
        <li className='mb-2 '><Link href='#'>Syria , Damascus</Link></li>
        <li className='mb-2'><Link href='#'>+963987000888</Link></li>
        <li className='mb-2'><Link href='#'>sales@tawasyme.com</Link></li>
        <div className='mt-4'>
         <ul className='flex justify-center'>
         <li className='mr-2'><Link href='https://t.me/tawasyshopping'><FaTelegram className='w-[25px] h-[25px]'/> </Link></li>
          <li className='mr-2'><Link href='#'><BsFillTelephoneFill className='w-[25px] h-[25px]'/> </Link></li>
          <li className='mr-2'><Link href='#'><BsFacebook className='w-[25px] h-[25px]'/> </Link></li>
          <li className='mr-2'><Link href='#'><BsInstagram className='w-[25px] h-[25px]'/> </Link></li>
         </ul>
         </div>
        </ul>
        </div>

        </div>
        </div>
  
      );
}

export default Footer;