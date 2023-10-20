import React, { Fragment, useRef, useState } from "react";
import VerificationInput from "react-verification-input";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import styles from "../../components/componentsStyling/sellerStyles.module.css";
import Logo from "../../public/images/tawasylogo.png";
import Image from "next/image";
import axios from "axios";
import url from "@/URL";
import { Ring } from "@uiball/loaders";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";

const Code = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const verifyNumber = useRef();
  const Api = createAxiosInstance(router) ; 

  const handleVerify = async (e) => {
    e.preventDefault();
    const number = localStorage.getItem(`number`);
    setIsLoading(true);
    const user = localStorage.getItem("user");
    if (user === "seller") {
      try {
        const response = await axios.post(`${url}/api/seller/verify`, {
          phone_number: number,
          verification_code: verifyNumber.current.value,
        });
        localStorage.removeItem("number");
        localStorage.setItem("AT", response.data.token);
        try {
          const response2 = await Api.get(`/api/seller/store/status`);
          console.log(`response in verification status`);
          switch (response2.data.status) {
          case 'Store not found' : 
            router.replace('/seller/requestStore');
          break;

          case 'approved' : 
          localStorage.setItem('Sid' , response2.data.store_id);
          router.replace(`/seller`);
          break;

          case 'pending' :
          localStorage.setItem('Sid' , response2.data.store_id);
            router.replace(`/seller/pendingStore`);
          break;
          }
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
        if (response.status !== 200) {
          throw new Error(response);
        }
      } catch (error) {
        toast.error(error.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsLoading(false);
      }
    } else if (user === "customer") {
      try {
        const response = await axios.post(`${url}/api/customer/verify`, {
          phone_number: number,
          verify_code: verifyNumber.current.value,
        });
        localStorage.removeItem("number");
        localStorage.setItem("AT", response.data.token);
        router.replace("/customer");
        setIsLoading(false);
        if (response.status !== 200) {
          throw new Error(response);
        }
      } catch (error) {
        toast.error(error.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsLoading(false);
      }
    }
  };

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleVerify(e);
    }
  }

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
          <p className="text-xl font-medium">
            الرجاء ادخال رمز التحقق الذي تم ارساله اليكم{" "}
          </p>
          <form
            className="flex flex-col justify-start items-center gap-7"
            onSubmit={handleVerify}
            onKeyDown={handleKeyDown}
          >
            <VerificationInput
              autoFocus={true}
              id="code"
              pattern="[0-9]*"
              ref={verifyNumber}
            />
            <div className="">
              <button
                className="px-3 py-2 bg-skin-primary rounded-md text-white outline-none "
                type="submit"
              >
                {isLoading == true ? (
                  <div className="flex justify-center items-center">
                    <Ring size={25} lineWeight={5} speed={2} color="white" />
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Code;
