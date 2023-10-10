import React, { useRef, useState } from "react";
import Logo from "../../public/images/tawasylogowhite.png";
import Locations from "@/components/Location/Location";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import styles from "../../components/componentsStyling/customerStyles.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import url from "@/URL";

const SignUp = () => {
  //   const navigate = useNavigate();
  const customerUserNameRef = useRef();
  const customerNumberRef = useRef();
  const sellerUserNameRef = useRef();
  const sellerNumberRef = useRef();
  const [sellerCity, setSellerCity] = useState();
  const [registeree, setRegisteree] = useState(1); // 1 for customer 2 for seller
  
  const router = useRouter();

  function customerSubmit(e) {
    e.preventDefault();
  }

  async function sellerSubmit(e) {
    e.preventDefault();
    // try{
    //   const response = await axios.post(`${url}/api/seller/register` , {
    //     name : sellerUserNameRef.current.value , 
    //     phone_number : sellerNumberRef.current.value , 
    //     location :  ,
    //     city : sellerCity , 
    //   })
    // }catch{

    // }

  }

  const handleCityChange = (value) => {
    setSellerCity(value);
  };

  function handleData (data) {
    console.log(data) ;
  }

  return (
    <>
      <div className="h-screen w-screen bg-[#FD6500]">
        {/* // customer register */}
        { <div className={`flex flex-col justify-start ${registeree === 1 ? ` block transform animate-[wiggle_1s_ease-in-out_infinite] ` : `hidden  translate-x-[-1200px] `} transition-all duration-900 items-center gap-12 mx-auto px-4 pt-28 w-fit`}>
          <Image
            src={Logo}
            alt="Logo"
            width={400}
            height={290}
            className="mx-3"
          />
          <p className="text-white text-2xl font-semibold">
            Register as a customer
          </p>
          <form
            onSubmit={customerSubmit}
            className="w-full flex flex-col gap-6"
          >
            <input
              id="customerusername"
              type="text"
              // value={email}
              ref={customerUserNameRef}
              className="outline-none border-b-2 bg-[#FD6500] border-white placeholder:text-white w-full transition-all duration-700 text-white "
              placeholder="Username"
            />
            <input
              id="customernumber"
              type="text"
              // value={email}
              ref={customerNumberRef}
              className="outline-none border-b-2 bg-[#FD6500] border-white placeholder:text-white w-full transition-all duration-700 text-white "
              placeholder="Phone Number"
            />
            <Locations onLocation = {handleData} />
            <button
              className="px-2 py-1 border-2 bg-white text-[#FD6500] rounded-lg hover:bg-gray-200 "
              type="submit"
            >
              SignUp
            </button>
          </form>
          <div className="flex flex-col justify-start items-center gap-1" >
            <p className="text-md text-white">
              You want to become a seller ?  
              <button className="border-b-2 border-white ml-2 " onClick={() => {setRegisteree(2)}} >
                SignUp as a seller
              </button>
            </p>
            <p className="text-md text-white ">
              Have an existing account ?
              <Link href={"/login"} className="border-b-2 border-white ml-2">
                Login
              </Link>
            </p>
          </div>
        </div>}
        {/* // seller register */}
        { <div className={`flex flex-col justify-start ${registeree === 2 ? ` block transform translate-x-0` : `hidden translate-x-[-1200px] `} transition-all duration-700 items-center gap-12 mx-auto px-4 pt-28 w-fit`}>
          <Image
            src={Logo}
            alt="Logo"
            width={400}
            height={290}
            className="mx-3"
          />
          <p className="text-white text-2xl font-semibold">
            Register as a seller
          </p>
          <form
            onSubmit={sellerSubmit}
            className="w-full flex flex-col gap-6"
          >
            <input
              id="sellerusername"
              type="text"
              // value={email}
              ref={sellerUserNameRef}
              className="outline-none border-b-2 bg-[#FD6500] border-white placeholder:text-white w-full transition-all duration-700 text-white "
              placeholder="Username"
            />
            <input
              id="sellernumber"
              type="text"
              // value={email}
              ref={sellerNumberRef}
              className="outline-none border-b-2 bg-[#FD6500] border-white placeholder:text-white w-full transition-all duration-700 text-white "
              placeholder="Phone Number"
            />
            <div className="flex justify-start items-center gap-3 w-full">
              <label className="text-white px-2 w-max ">City </label>
              <select
                className="w-full outline-none p-1 bg-transparent border-b-2 border-white text-white "
                onChange={(e) => handleCityChange(e.currentTarget.value)}
              >
                <option className="text-black" key={'دمشق'} value={'دمشق'} >دمشق</option>
                <option className="text-black" key={'ريف دمشق'} value={'ريف دمشق'}>ريف دمشق</option>
              </select>
            </div>
            <Locations onLocation = {handleData} />
            <button
              className="px-2 py-1 border-2 bg-white text-[#FD6500] rounded-lg hover:bg-gray-200 "
              type="submit"
            >
              SignUp
            </button>
          </form>
          <div className="flex flex-col justify-start items-center gap-1">
            <p className="text-md text-white">
              You want to become a Customer ?
              <button className="border-b-2 border-white ml-2 " onClick={() => {setRegisteree(1)}} >
                SignUp as a customer
              </button>
            </p>
            <p className="text-md text-white ">
              Have an existing account ?
              <Link href={"/login"} className="border-b-2 border-white ml-2">
                Login
              </Link>
            </p>
          </div>
        </div>}
      </div>
    </>
  );
};

export default SignUp;
