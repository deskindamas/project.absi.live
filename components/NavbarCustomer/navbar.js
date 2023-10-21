import Image from "next/image";
import React, { useState, useEffect } from "react";
import TawasyLogo from "../.../../../public/images/tawasylogowhite.png";
import Link from "next/link";
import { BsFillBagFill } from "react-icons/bs";
import Cart from "../CartCustomer/cart";
import styles from "../../components/componentsStyling/sellerStyles.module.css";
import { propTypesSelected } from "@material-tailwind/react/types/components/select";

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
  };

  return (
    <>
      <div className="flex bg-skin-primary justify-around  pt-2 pb-2 w-full h-[60px]  z-20 fixed ">
        <div className="flex justify-start md:pl-16 pl-1 md:w-[50%] w-[20%] h-full ">
          <Image
            src={TawasyLogo}
            alt="logo"
            className="md:w-[15%] w-[100%] h-[100%]"
          />
        </div>
        <div className="md:w-[50%] w-[80%] flex justify-center">
          {isLoggedIn == true && (
            <div className="flex items-center">
              <Link className="text-white mr-4" href="">
                Orders
              </Link>
              <button onClick={handleCartButtonClick}>
                <BsFillBagFill className="text-white w-[20px] h-[20px]  mr-3" />
              </button>
            </div>
          )}
          <Link className="text-white md:mr-6 mr-2 mt-[10px]" href="">
            Become A Seller
          </Link>
          {/* <button className="text-white border-white px-3 py-1 rounded-sm mr-3">
              Become A Seller
            </button> */}
          <button className="text-white border-[1px] border-white md:px-6 px-1 py-1 rounded-md">
            Login
          </button>
        </div>
      </div>
      <Cart show={showCartSidebar} onClose={() => setShowCartSidebar(false)} />
    </>
  );
}

export default Navbar;
