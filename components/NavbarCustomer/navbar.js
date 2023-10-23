import Image from "next/image";
import React, { useState, useEffect } from "react";
import TawasyLogo from "../.../../../public/images/tawasylogowhite.png";
import Link from "next/link";
import { BsFillBagFill } from "react-icons/bs";
import Cart from "../CartCustomer/cart";
import { CgProfile } from "react-icons/cg";
import styles from "../../components/componentsStyling/sellerStyles.module.css";
import { propTypesSelected } from "@material-tailwind/react/types/components/select";
import { useRouter } from "next/router";

function Navbar() {

  const router = useRouter();
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("AT");
    const user = localStorage.getItem(`user`);
    if (token && user && user == `customer`) {
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
      <div className="flex bg-skin-primary justify-around lg:h-[80px] md:h-[60px] sm:h-[50px] h-[40px] pt-2 pb-2 w-full  z-20 fixed ">
        <div className="flex justify-start md:pl-16 md:w-[50%] w-[20%] h-auto pl-10 ">
          <Image
            src={TawasyLogo}
            alt="logo"
            className="md:w-[15%] w-[100%] h-auto"
          />
        </div>
        <div className="md:w-[50%] w-[80%] flex justify-end items-center px-10">
          {isLoggedIn == true && (
            <div className="flex items-center gap-4 ">
              <Link className="text-white" href="/customer/Orders">
                My Orders
              </Link>
              <button onClick={handleCartButtonClick}>
                <BsFillBagFill className="text-white w-[20px] h-[20px]  " />
              </button>

              <button onClick={() => {router.push(`/customer/MyProfile`)}}>
                <CgProfile className="text-white w-[25px] h-[25px] mb-[-3px]" />
              </button>
            </div>
          )}
          {/* <Link className="text-white md:mr-6 mr-2 mt-[10px]" href="#">
            Become A Seller
          </Link> */}
          {/* <button className="text-white border-white px-3 py-1 rounded-sm mr-3">
              Become A Seller
            </button> */}
          { isLoggedIn == false && <Link href={'/login'} className="text-white h-[80%] flex items-center justify-center border-[1px] border-white md:px-6 px-1 hover:bg-white hover:text-skin-primary rounded-md justify-self-end">
            Login
          </Link>}
        </div>
      </div>
      <Cart show={showCartSidebar} onClose={() => setShowCartSidebar(false)} />
    </>
  );
}

export default Navbar;
