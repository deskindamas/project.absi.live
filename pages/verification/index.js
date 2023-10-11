import React, { Fragment, useState } from "react";
import VerificationInput from "react-verification-input";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import styles from "../../components/componentsStyling/sellerStyles.module.css";
import Logo from '../../public/images/tawasylogo.png'
import Image from "next/image";

const Code = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    window.location.href = "/request";
  };

  return (
    <Fragment>
      <div className={`w-screen h-screen bg-white `}>
        <div className="flex flex-col justify-start items-center gap-12 mx-auto px-4 pt-28 w-fit ">
        <Image
            src={Logo}
            alt="Logo"
            width={400}
            height={290}
            className="mx-3"
          />
          <p className="text-xl font-medium" >الرجاء ادخال رمز التحقق الذي تم ارساله اليكم </p>
          <div className="flex flex-col justify-start items-center gap-7">
            <VerificationInput
              autoFocus = {true}
              id="code"
              pattern="[0-9]*"
            />
            <div className="">
                <button className="px-3 py-2 bg-[#FD6500] rounded-md text-white " onClick={handleLogin}>
                  Submit
                </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Code;
