import React from "react";
import Logo from "../../public/images/tawasylogowhite.png";
import Image from "next/image";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("");


  return (
    <>
    <div  onClick={() => {
                     window.scroll({
                      top: 0,
                      behavior: "smooth"
                    });
                    }} className="bg-[#262626d2] py-2 text-white text-center">
    <p className="cursor-pointer">Return to Top</p>
    </div>
    <div className="bg-[#262626] bottom-0 w-full">
      {/* <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 px-20 py-4 border-b-2 border-gray-200">
       <Link href= "#" >
       <Image src={Logo} alt="logo" className="w-[20%] mx-auto" />
       </Link>

       <div className="flex justify-center">
       <p className="text-white text-lg">{t("footer.syria")}</p>
       </div>

       <div>
       <ul className="flex text-white justify-center">
                <li className="mr-2">
                  <Link href="https://t.me/tawasyshopping">
                    <FaTelegram className="w-[25px] h-[25px]" />{" "}
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="tel:+963987000888" legacyBehavior>
                    <a target="_blank" >
                      <BsFillTelephoneFill className="w-[25px] h-[25px]" />
                    </a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="https://www.facebook.com/tawasyshop" legacyBehavior>
                    <a target="_blank" ><BsFacebook className="w-[25px] h-[25px]" /></a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="https://www.instagram.com/tawasyshopping/" legacyBehavior>
                    <a target="_blank" ><BsInstagram className="w-[25px] h-[25px]" /></a>
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/+963987000888" legacyBehavior >
                    <a target="_blank" >
                      <BsWhatsapp className="w-[25px] h-[25px]" />
                    </a>
                  </Link>
                </li>
              </ul>
       </div>
         
      </div> */}

    <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 text-white text-center px-20 py-4 border-b-2 border-gray-200">
       {/* <Link href= "#" > */}
       <Link href="/customer" className="hover:text-skin-primary">
                {t("footer.home")}
                {/* {`Home Page`} */}
              </Link>
       {/* </Link> */}

       <div className="flex justify-center">
       <Link href="/AboutUs" className="hover:text-skin-primary">
                {t("footer.aboutUs")}
              </Link>
       </div>

       <div>
       <Link href="/ContactUs" className="hover:text-skin-primary">
                {t("footer.contactUS")}
              </Link>
       </div>
         
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 px-20 py-10">

        <div className="text-white items-center text-center">
          {/* <h2 className="mb-4 text-skin-primary">Menu</h2> */}
          {/* <ul className="text-xl">
            <li className="mb-2">
              <Link href="/customer" className="hover:text-skin-primary">
                {t("footer.home")}
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/AboutUs" className="hover:text-skin-primary">
                {t("footer.aboutUs")}
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/ContactUs" className="hover:text-skin-primary">
                {t("footer.contactUS")}
              </Link>
            </li>
          </ul> */}
          <Link href= "/customer" >
       <Image src={Logo} alt="logo" className="w-[30%] mx-auto" />
       </Link>

       <div className="flex justify-center py-4">
       <p className="text-white text-lg">
       Never a Better Time Than Now To Start
       </p>
       </div>

        </div>

        <div className=" flex flex-col items-center space-y-5 ">
        <Link href='#' className="border-2 text-center bg-skin-primary border-skin-primary text-white py-1 w-[40%]">All Products</Link>
        <Link href='#' className="border-2 text-center border-skin-primary text-white py-1 w-[40%]">All Stores</Link>
        </div>

        <div className="text-white items-center text-center">
          {/* <h2 className="mb-3 text-skin-primary">Menu</h2> */}
          <ul className="text-xl">
            <li className="mb-2 ">
              {/* <p>{`Damascus , Syria`}</p> */}
              <p>{t("footer.syria")}</p>
            </li>
            <li className="mb-2">
              <p>Advertise with tawasy</p>
            </li>
            <li className="mb-2">
              <p>sales@tawasyme.com</p>
            </li>
            <div className="mt-4">
              <ul className="flex justify-center">
                <li className="mr-2">
                  <Link href="https://t.me/tawasyshopping">
                    <FaTelegram className="w-[25px] h-[25px]" />{" "}
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="tel:+963987000888" legacyBehavior>
                    <a target="_blank" >
                      <BsFillTelephoneFill className="w-[25px] h-[25px]" />
                    </a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="https://www.facebook.com/tawasyshop" legacyBehavior>
                    <a target="_blank" ><BsFacebook className="w-[25px] h-[25px]" /></a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="https://www.instagram.com/tawasyshopping/" legacyBehavior>
                    <a target="_blank" ><BsInstagram className="w-[25px] h-[25px]" /></a>
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/+963987000888" legacyBehavior >
                    <a target="_blank" >
                      <BsWhatsapp className="w-[25px] h-[25px]" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <div className="flex md:justify-center items-center gap-11 py-3 text-center text-gray-400">
          <div className="flex justify-start items-center gap-1">
            {/* {`Copyrights reserved for Tawasy.`} */}
            {t("footer.copyrights")}
            <MdCopyright />
          </div>
          <div className="">
            {/* <Link className=" border-b-2 border-transparent hover:text-skin-primary hover:border-skin-primary transition-all duration-500" href="/ContactUs">
            {t("footer.contactUS")}
            </Link> */}
          </div>
          <div className="">
            <Link
              href="/PrivacyPolicy"
              className=" border-b-2 border-transparent hover:text-skin-primary hover:border-skin-primary transition-all duration-500"
            >
              {/* {`Privacy Policy`} */}
              {t("footer.privacy")}
            </Link>
          </div>
          <div className="">
            <Link
              href="/TermsAndConditions"
              className=" border-b-2 border-transparent hover:text-skin-primary hover:border-skin-primary transition-all duration-500"
            >
              {/* {`Terms and Conditions`} */}
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
