import React, { useRef, useState } from "react";
import axios from "axios";
import url from "@/URL";
import Logo from "../../public/images/tawasylogo.png";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { Ring } from "@uiball/loaders";
import { useRouter } from "next/router";

const Login = () => {
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
        // console.log(response);
        localStorage.setItem("number", NumberRef.current.value);
        localStorage.setItem("user", "seller");
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
        // console.log(error);
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
          Login using your Phone Number
        </h3>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-start items-center gap-9 w-full max-w-md p-4 md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mx-auto "
        onKeyDown={handleKeyDown}
      >
        {/* <label className="label" ><span style={{paddingRight:"10px"}}>Phone:</span> */}
        <input
          type="number"
          // value={email}
          ref={NumberRef}
          // onChange={(e) => setEmail(e.target.value)}
          className="outline-none border-b-2 border-gray-300 focus:border-[#FD6500] placeholder:text-gray-300 w-full transition-all duration-700"
          placeholder="Number"
        />
        <div className="flex flex-col justify-start items-start gap-2 w-[80%]">
          <label htmlFor="login" className=" text-lg font-medium ">
            Login as a:
          </label>
          <ul className="grid w-full gap-6 md:grid-cols-2 ">
            <li>
              <input
                type="radio"
                id="customer"
                name="hosting"
                value={1}
                className="hidden peer"
                required
                checked={selectedRole === 1}
                onChange={handleRoleChange}
              />
              <label
                for="customer"
                className="inline-flex items-center justify-center w-full px-3 py-2 text-gray-500 bg-white border border-gray-500 rounded-lg cursor-pointer peer-checked:border-orange-500 peer-checked:text-orange-500 hover:text-gray-600 hover:bg-gray-100 transition-all duration-500"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">Customer</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="seller"
                name="hosting"
                value={2}
                className="hidden peer"
                required
                checked={selectedRole === 2}
                onChange={handleRoleChange}
              />
              <label
                for="seller"
                className="inline-flex items-center justify-center w-full px-3 py-2 text-gray-500 bg-white border border-gray-500 rounded-lg cursor-pointer peer-checked:border-orange-500 peer-checked:text-orange-500 hover:text-gray-600 hover:bg-gray-100 transition-all duration-500"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">Seller</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
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
      <div>
        You have an existing account ?{" "}
        <Link
          href={"/signup"}
          className="text-orange-500 border-b-2 border-orange-500"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
