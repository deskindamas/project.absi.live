import React from 'react';
import Navbar from '../NavbarCustomer/navbar';
import Footer from '../FooterCustomer/Footer';

const withLayoutCustomer = (WrappedComponent) => {
  return (props) => (
    <div  >
    <div className='w-full'>
    <Navbar/>
    </div>
     <WrappedComponent {...props}  />
    <div className='w-full'>
    <Footer/>
    </div>
      </div>
  );
};

export default withLayoutCustomer;