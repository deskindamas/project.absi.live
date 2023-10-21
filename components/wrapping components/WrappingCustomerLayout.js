import React from "react";
import Navbar from "../NavbarCustomer/navbar";
import Footer from "../FooterCustomer/Footer";
import CustomerLayout from "../UI/customerLayout";

const withLayoutCustomer = (WrappedComponent) => {
  return (props) => (

    <CustomerLayout>
      <WrappedComponent {...props} />
    </CustomerLayout>
  );
};

export default withLayoutCustomer;
