import React from "react";
import Logo from "../../public/images/tawasylogowhite.png";
import Image from "next/image";
import Link from "next/link";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("");

  return (
    <div className="bg-[#262626]  bottom-0 w-full">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-col-1 gap-4 px-20 py-10">
        <div className="items-center">
          <Image src={Logo} alt="logo" className="w-[40%] mx-auto" />
          <p className="text-white text-lg text-center md:block hidden ">
            Today, shopping has become more enjoyable after we were
            <br />
            able to collect more than 400 important
            <br /> brands for you to shop from
          </p>
        </div>

        <div className="text-white items-center text-center">
          {/* <h2 className="mb-4 text-skin-primary">Menu</h2> */}
          <ul className="text-xl">
            <li className="mb-2">
              <Link href="/customer" className="hover:text-skin-primary">
                {t("footer.home")}
                {/* {`Home Page`} */}
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/AboutUs" className="hover:text-skin-primary">
                {/* {`About Us`} */}
                {t("footer.aboutUs")}
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/ContactUs" className="hover:text-skin-primary">
                {/* {`Contact Us`} */}
                {t("footer.contactUS")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-white items-center text-center">
          {/* <h2 className="mb-3 text-skin-primary">Menu</h2> */}
          <ul className="text-xl">
            <li className="mb-2 ">
              {/* <p>{`Damascus , Syria`}</p> */}
              <p>{t("footer.syria")}</p>
            </li>
            <li className="mb-2">
              <p>+963987000888</p>
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
                  {/* <Link href="#"> */}
                  <FaWhatsapp className="w-[25px] h-[25px]" />{" "}
                  {/* </Link> */}
                </li>
                <li className="mr-2">
                  <Link href="#">
                    <BsFacebook className="w-[25px] h-[25px]" />{" "}
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="#">
                    <BsInstagram className="w-[25px] h-[25px]" />{" "}
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
  );
};

export default Footer;
