import React from 'react';
// import about3 from '../../../public/images/about3.jpg';
import about3 from '../../public/images/about3.jpg';
import about1 from '../../public/images/about1.jpg';
import Image from 'next/image';
import withLayoutCustomer from '@/components/wrapping components/WrappingCustomerLayout';

const AboutUs = () => {

  return (
    <div className='md:flex md:flex-row flex-col justify-center mx-auto p-[50px]'>
    <div className='md:w-[60%] w-[90%]'>
    <div className='md:flex md:flex-row flex-col'>
    <div>
    <Image src={about3} alt='about us'
     width={0}
     height={0}
     sizes="100vw"
     style={{ width: "auto", height: "auto" }}/> 
    </div>
    <div className='flex flex-col justify-center md:items-start items-center'>
    <div className='text-skin-primary md:p-[15px] p-[3px] text-xl font-medium'>
      {`About Us Tawasy Shopping.`} 
      </div>
      <div className='bg-white md:ml-[-80px] ml-0 z-10 md:p-[20px] p-[2px] text-gray-500 text-lg'>
     {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
      </div>
    </div>
    </div>
     </div>
    <div className='md:w-[40%] w-[90%]'>
    <Image src={about1} alt='about us'
     width={0}
     height={0}
     sizes="100vw"
     style={{ width: "auto", height: "auto" }}/> 
    </div>
    </div>
    
  );
};

export default withLayoutCustomer(AboutUs);
