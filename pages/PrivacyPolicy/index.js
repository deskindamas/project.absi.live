import Image from "next/image";
import React from "react";
// import Logo from '../../../public/images/tawasylogo.png';
import Logo from "../../public/images/tawasylogo.png";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps(context) {
    const { locale } = context;
    
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }


function PrivacyPolicy() {
    const {t} = useTranslation("");
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[70%] mx-auto space-y-16 py-6">
        <Image
          src={Logo}
          alt="Logo"
          width={500}
          height={290}
          className="mx-3"
        />
        <h1 className="font-bold text-3xl">
          Privacy Policy For Tawasy Shopping E-Platform.
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-start space-y-2 " >
            <h2 className="font-semibold text-xl" >{t("privacy.introTitle")}</h2>
            <p className="text-lg" >
                {t("privacy.introInfo")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
