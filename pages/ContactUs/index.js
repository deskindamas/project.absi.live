import React, { useState } from "react";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
// import Contact from "../../../public/images/contactus3.jpg";
import Form from "@/components/ContactForm/form";

const ContactUs = () => {
  return (
    <div className="w-full h-full">
      <div
        style={{
          backgroundImage: `url(/images/contactus3.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="bg-[#00000056] pt-[5%] pb-[5%]">
          <h1 className="text-center md:text-4xl text-xl font-medium md:mb-4 mb-2 text-white">
            Contact Us
          </h1>
          <p className="text-white text-center md:text-2xl text-base font-medium my-7 w-[80%] mx-auto">
            {`Have a question? We're here to help. Email us by`}
            <br /> {`filling out the form below. For a quicker response during the`}
            {`week,`}
            <br /> {`you can call us Monday through Friday, between 9:00 a.m. and`}
            {`5:00 p.m.`}
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default withLayoutCustomer(ContactUs);
