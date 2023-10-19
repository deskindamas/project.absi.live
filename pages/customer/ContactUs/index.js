import React, { useState } from 'react';
import withLayoutCustomer from '@/components/wrapping components/WrappingCustomerLayout';
import Contact from '../../../public/images/contactus3.jpg';
import Form from '@/components/ContactForm/form';

const ContactUs = () => {

  return (
    <div className='w-full h-full'>
    <div style={{ 
       backgroundImage:  `url(${Contact})` ,
       backgroundRepeat:"no-repeat", 
       backgroundSize:"cover" ,
        backgroundPosition:"center center"
      }}>
    <div className='bg-[#00000056] pt-[5%] pb-[5%]'>
    <h1 className='text-center text-4xl font-medium mb-4 text-white'>Contact Us</h1>
    <p className='text-white text-center text-xl font-medium mt-2'>Have a question? We're here to help. Email us by<br/> filling out the form below. 
    For a quicker response  during the week,<br/> you can call  us Monday through Friday, between 9:00 a.m. and 5:00 p.m. </p>
    <Form/>
    </div>
    </div>
    </div>
  );
};

export default withLayoutCustomer(ContactUs);
