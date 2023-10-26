import React, { useRef, useState } from "react";
import axios from "axios";
import url from "@/URL";
import Logo from "../../../public/images/tawasylogo.png";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { Ring } from "@uiball/loaders";
import { useRouter } from "next/router";

const AdminLogin = () => {
    
  const NumberRef = useRef();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(1); // 1 for customer 2 for seller
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (selectedRole === 2) {
      // seller login
      try {
        const response = await axios.post(`${url}/api/seller/login`, {
          phone_number: NumberRef.current.value,
        });
        if (response.status !== 200) {
          throw new Error(response);
        }
        setIsLoading(false);
        console.log(`seller response`);
        console.log(response);
        localStorage.setItem("number", NumberRef.current.value);
        localStorage.setItem("user", "seller");
        localStorage.setItem("registered", false);
        router.push("/verification");
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {
        toast.error(error.response.data.message, {
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
        // console.log(error);
      }
    } else if (selectedRole === 1) {
      // customer login
      try {
        const response = await axios.post(`${url}/api/customer/login`, {
          phone_number: NumberRef.current.value,
        });
        if (response.status !== 200) {
          throw new Error(response);
        }
        setIsLoading(false);
        console.log(response);
        localStorage.setItem("number", NumberRef.current.value);
        localStorage.setItem("user", "customer");
        localStorage.setItem("registered", false);
        router.push("/verification");
      } catch (error) {
        toast.error(error.response.data.message, {
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

  function handleRoleChange(event) {
    setSelectedRole(Number(event.target.value));
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLogin(event);
    }
  }

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-white gap-12 mx-auto px-4 pt-28 w-full">
      <Image src={Logo} alt="Logo" width={400} height={290} className="mx-3" />
      <div>
        <h3 className="text-xl text-black font-medium">
          Login using your Email And Password
        </h3>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-start items-center gap-9 w-full max-w-md p-4 md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mx-auto "
        onKeyDown={handleKeyDown}
      >
        <input
          type="text"
          ref={NumberRef}
          className="outline-none appearance-none border-b-2 border-gray-300 focus:border-[#FD6500] placeholder:text-gray-300 w-full transition-all duration-700"
          placeholder="Email"
          inputMode="email" 
          required
        />
              <input
          type="password"
          ref={NumberRef}
          className="outline-none appearance-none border-b-2 border-gray-300 focus:border-[#FD6500] placeholder:text-gray-300 w-full transition-all duration-700"
          placeholder="password"
          inputMode="password" 
          required
        />
        <style jsx>{`
          /* Chrome, Safari, Edge, Opera */
          .appearance-none::-webkit-outer-spin-button,
          .appearance-none::-webkit-inner-spin-button {
            @apply appearance-none;
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          .appearance-none[type="number"] {
            @apply appearance-none;
            -moz-appearance: textfield;
          }
        `}</style>

        <button
          type="submit"
          className="text-white bg-orange-500 rounded-md text-lg block px-5 py-2 mx-auto border-2 border-white hover:bg-orange-600 transition-all duration-300"
          onClick={handleLogin}
        >
          {isLoading == true ? (
            <div className="flex justify-center items-center">
              <Ring size={25} lineWeight={5} speed={2} color="white" />
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
  
    </div>
  );
};

export default AdminLogin;
