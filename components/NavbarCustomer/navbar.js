import Image from "next/image";
import React, { useState, useEffect } from "react";
import TawasyLogo from "../.../../../public/images/tawasylogowhite.png";
import Link from "next/link";
import { BsFillBagFill } from "react-icons/bs";
import Cart from "../CartCustomer/cart";
import styles from "../../components/componentsStyling/sellerStyles.module.css";

function Navbar() {
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("AT");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleCartButtonClick = () => {
    setShowCartSidebar(true);
    // setTranslationX(translationX - 10);
  };

  return (
    <>
      <div className="w-full h-[10%] z-10 fixed">
        <div className="flex bg-skin-primary justify-around items-center w-full pt-2 pb-2 ">
          <div className="w-[15%] h-full ">
            <Image src={TawasyLogo} alt="logo" className="w-[40%] h-[90%]" />
          </div>
          <div className="flex w-[50%] ">
            <div className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="w-full bg-gray-100 outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm h-8"
                type="text"
                placeholder="Search a product "
              />
            </div>
          </div>
          <div className="flex">
            { isLoggedIn == true && <div className="flex items-center" >
              <Link className="text-white mr-4" href="">
                Orders
              </Link>
              <button onClick={handleCartButtonClick}>
                <BsFillBagFill className="text-white w-[20px] h-[20px]  mr-3" />
              </button>
            </div>}
            <button className="text-white border-white px-3 py-1 rounded-sm mr-3">
              Become A Seller
            </button>
            <button className="text-white border-[1px] border-white px-3 hover:bg-white hover:text-skin-primary py-1 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
      <Cart show={showCartSidebar} onClose={() => setShowCartSidebar(false)} />
    </>
  );
}

export default Navbar;
