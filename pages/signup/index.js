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
import { Ring } from "@uiball/loaders";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import createAxiosInstance from "@/API";

const SignUp = () => {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const customerUserNameRef = useRef();
  const customerNumberRef = useRef();
  const sellerUserNameRef = useRef();
  const sellerNumberRef = useRef();
  const [address, setAddress] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [sellerCity, setSellerCity] = useState("دمشق");
  const [registeree, setRegisteree] = useState(1); // 1 for customer 2 for seller
  const [isChecked, setIsChecked] = useState(false);

  async function customerSubmit(e) {
    e.preventDefault();

    if (!isChecked) {
      // Check if the checkbox is not checked
      toast.error(
        "Please agree on our terms and conditions and privacy policy.",
        {
          toastId:
            "Please agree on our terms and conditions and privacy policy.",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }

    if (address == undefined || address == null) {
      // Check if the checkbox is not checked
      toast.error("Please select an address.", {
        toastId: "Please agree on our terms and conditions and privacy policy.",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await Api.post(`/api/customer/register`, {
        name: customerUserNameRef.current.value,
        phone_number: customerNumberRef.current.value,
        location: address ? address.address : null,
        longitude: address ? address.lat : null,
        latitude: address ? address.lng : null,
      });
      setIsLoading(false);
      // console.log(response.data);
      Cookies.set("number", response.data.customer.phone_number, {
        expires: 365 * 10,
      });
      Cookies.set("user", "customer", { expires: 365 * 10 });
      Cookies.set("registered", true, { expires: 365 * 10 });
      router.push("/verification");
    } catch (error) {
      // if(error.response.data.message){
      //   console.log(error);
      // toast.error(error.response.data.message, {
      //   toastId : error.response.data.message,
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
      // }
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  async function sellerSubmit(e) {
    e.preventDefault();
    if (!isChecked) {
      // Check if the checkbox is not checked
      toast.error(
        "Please agree on our terms and conditions and privacy policy.",
        {
          toastId:
            "Please agree on our terms and conditions and privacy policy.",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }

    if (address == undefined || address == null) {
      // Check if the checkbox is not checked
      toast.error("Please select an address.", {
        toastId: "Please agree on our terms and conditions and privacy policy.",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await Api.post(`/api/seller/register`, {
        name: sellerUserNameRef.current.value,
        phone_number: sellerNumberRef.current.value,
        location: sellerCity,
        longitude: address.lat,
        latitude: address.lng,
        city: sellerCity,
      });
      // if (response.status !== 200) {
      //   throw new Error(response);
      // }
      setIsLoading(false);
      // console.log(response.data);
      Cookies.set("number", response.data.seller.phone_number, {
        expires: 365 * 10,
      });
      Cookies.set("user", "seller", { expires: 365 * 10 });
      Cookies.set("registered", true, { expires: 365 * 10 });
      router.push("/verification");
    } catch (error) {
      // toast.error(response.data.message, {
      //   toastId : response.data.message ,
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  const handleCityChange = (value) => {
    setSellerCity(value);
  };

  function handleData(data) {
    // console.log(`address`);
    // console.log(data);
    setAddress(data);
  }

  return (
    <>
      <div className="h-screen w-screen bg-skin-primary overflow-scroll ">
        {/* // customer register */}
        {
          <div
            className={`flex flex-col justify-start transition-opacity duration-900 ${
              registeree === 1 ? ` opacity-100 ` : ` opacity-0 hidden `
            }  items-center gap-12 mx-auto px-4 pt-28 w-fit`}
          >
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
                className="outline-none border-b-2 bg-skin-primary border-white placeholder:text-white w-full transition-all duration-700 text-white "
                placeholder="Username"
                required
              />
              <input
                id="customernumber"
                type="number"
                // value={email}
                ref={customerNumberRef}
                className="outline-none border-b-2 bg-skin-primary border-white placeholder:text-white w-full transition-all duration-700 text-white "
                placeholder="Phone Number"
                pattern="\d{10}"
                required
              />
              <Locations
                onLocation={handleData}
                className={
                  "mb-4 outline-none bg-transparent border-b-2 border-white text-white w-full cursor-pointer placeholder:text-white "
                }
              />

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="accent-white"
                  required
                />
                <span className="text-white flex justify-start items-center gap-1 ">
                  I agree to the
                  <Link
                    href={"/TermsAndConditions"}
                    className="text-sky-300 border-b-2 border-sky-300 hover:text-sky-500 hover:border-sky-500"
                  >
                    terms and conditions
                  </Link>
                  and the
                  <Link
                    href={"/PrivacyPolicy"}
                    className="text-sky-300 border-b-2 border-sky-300 hover:text-sky-500 hover:border-sky-500"
                  >
                    privacy policy
                  </Link>
                  of Tawasy.
                </span>
              </label>

              <button
                className="px-2 py-1 border-2 bg-white text-skin-primary rounded-lg hover:bg-gray-200 "
                type="submit"
              >
                {isLoading == true ? (
                  <div className="flex justify-center items-center">
                    <Ring size={30} lineWeight={5} speed={2} color="#ff6600" />
                  </div>
                ) : (
                  "SignUp"
                )}
              </button>
            </form>
            <div className="flex flex-col justify-start items-center gap-1">
              <p className="text-md text-white">
                You want to become a seller ?
                <button
                  className="border-b-2 border-white ml-2 "
                  onClick={() => {
                    setRegisteree(2);
                  }}
                >
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
          </div>
        }
        {/* // seller register */}
        {
          <div
            className={`flex flex-col justify-start transition-opacity duration-900 ${
              registeree === 2 ? `opacity-100` : `opacity-0 hidden`
            }  items-center gap-12 mx-auto px-4 pt-28 w-fit`}
          >
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
                className="outline-none border-b-2 bg-skin-primary border-white placeholder:text-white w-full transition-all duration-700 text-white "
                placeholder="Username"
                required
              />
              <input
                id="sellernumber"
                type="number"
                // value={email}
                ref={sellerNumberRef}
                className="outline-none border-b-2 bg-skin-primary border-white placeholder:text-white w-full transition-all duration-700 text-white appearance-none "
                placeholder="Phone Number"
                // pattern="[0-9]{10}"
                // style={{ --webkit-appearance: none,
                //         margin: 0,
                //          -moz-appearance: textfield,
                //           }}
                style={{
                  WebkitAppearance: "none",
                  margin: 0,
                  MozAppearance: "none",
                }}
                required
              />
              <div className="flex justify-start items-center gap-3 w-full">
                <label className="text-white px-2 w-max ">City </label>
                <select
                  className="w-full outline-none p-1 bg-transparent border-b-2 border-white text-white "
                  onChange={(e) => handleCityChange(e.currentTarget.value)}
                  required
                >
                  <option className="text-white" key={"دمشق"} value={"دمشق"}>
                    دمشق
                  </option>
                  <option
                    className="text-black"
                    key={"ريف دمشق"}
                    value={"ريف دمشق"}
                  >
                    ريف دمشق
                  </option>
                </select>
              </div>
              <Locations
                onLocation={handleData}
                className={
                  "mb-4 outline-none bg-transparent border-b-2 border-white text-white w-full cursor-pointer placeholder:text-white "
                }
              />

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="accent-white"
                />
                <span className="text-white flex justify-start items-center gap-1 ">
                  I agree to the
                  <Link
                    href={"/TermsAndConditions"}
                    className="text-sky-300 border-b-2 border-sky-300 hover:text-sky-500 hover:border-sky-500"
                  >
                    terms and conditions
                  </Link>
                  and the
                  <Link
                    href={"/PrivacyPolicy"}
                    className="text-sky-300 border-b-2 border-sky-300 hover:text-sky-500 hover:border-sky-500"
                  >
                    privacy policy
                  </Link>
                  of Tawasy.
                </span>
              </label>

              <button
                className="px-2 py-1 border-2 bg-white text-skin-primary rounded-lg hover:bg-gray-200 "
                type="submit"
              >
                {isLoading == true ? (
                  <div className="flex justify-center items-center">
                    <Ring size={30} lineWeight={5} speed={2} color="#ff6600" />
                  </div>
                ) : (
                  "SignUp"
                )}
              </button>
            </form>
            <div className="flex flex-col justify-start items-center gap-1">
              <p className="text-md text-white">
                You want to become a Customer ?
                <button
                  className="border-b-2 border-white ml-2 "
                  onClick={() => {
                    setRegisteree(1);
                  }}
                >
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
          </div>
        }
      </div>
    </>
  );
};

export default SignUp;
