import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
import { Ring } from "@uiball/loaders";
import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";

function MyProfile() {
    const router = useRouter();
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isSavingName, setisSavingName] = useState(false);
  const [isSavingPhone, setisSavingPhones] = useState(false);
  const [isSavingAddress, setisSavingAddress] = useState(false);


  const handleSaveNameClick = () => {
    setisSavingName(false);
  };
  const handleSavePhoneClick = () => {
    setisSavingPhones(false);
  };
  const handleSaveAddressClick = () => {
    setisSavingAddress(false);
  };

  return (
    <div>
      <h1 className="border-b-2 border-gray-300 py-4 text-2xl text-gray-700 font-medium pl-7">
        My Profile
      </h1>
      <div>
      <p className="flex items-center w-max ml-7 text-xl text-skin-primary cursor-pointer select-none hover:border-b-2 hover:border-skin-primary " onClick={() => {router.back()}}><BiArrowBack className=" w-[25px] h-[20px] mr-2 mb-[-5px]"  />Back</p>
      </div>
      <div className="py-7 flex justify-center">
        <div>
          <div className="flex justify-between w-[400px] mb-4">
            <div className="flex">
              <label className="text-xl text-gray-700 font-medium pr-2 w-24">
                Name :{" "}
              </label>
              {isEditingName ? (
                <input
                  className="border-b-2 border-skin-primary outline-none"
                  type="text"
                  placeholder="name"
                  ref={nameRef}
                />
              ) : (
                <p className="capitalize text-xl text-gray-500 font-medium">
                 lorem1
                </p>
              )}
            </div>
            <div>
              {isEditingName ? (
                isSavingName == true ? (
                    <Ring
                      size={20}
                      lineWeight={5}
                      speed={2}
                      color="#ff6600"
                    />
                ) : (
                  <button onClick={handleSaveNameClick}>Save</button>
                )
              ) : (
                <MdModeEditOutline
                  className="w-[20px] h-[20px] text-gray-500"
                  onClick={() => {
                    setIsEditingName(true);
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex justify-between w-[400px] mb-4">
            <div className="flex">
              <label className="text-xl text-gray-700 font-medium pr-2 w-24">
                Phone :{" "}
              </label>
              {isEditingPhone ? (
                <input
                  className="border-b-2 border-skin-primary outline-none"
                  type="text"
                  placeholder="number"
                  ref={phoneRef}
                />
              ) : (
                <p className="capitalize text-xl text-gray-500 font-medium">
                 0948372726
                </p>
              )}
            </div>
            <div>
              {isEditingPhone ? (
                 isSavingPhone == true ? (
                    <Ring
                      size={20}
                      lineWeight={5}
                      speed={2}
                      color="#ff6600"
                    />
                ) : (
                  <button onClick={handleSavePhoneClick}>Save</button>
                )
              ) : (
                <MdModeEditOutline
                  className="w-[20px] h-[20px] text-gray-500"
                  onClick={() => {
                    setIsEditingPhone(true);
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex justify-between w-[400px] mb-4">
            <div className="flex">
              <label className="text-xl text-gray-700 font-medium pr-2 w-24">
                Address:{" "}
              </label>
              {isEditingAddress ? (
                <input
                  className="border-b-2 border-skin-primary outline-none"
                  type="text"
                  placeholder="address"
                  ref={addressRef}
                />
              ) : (
                <p className="capitalize text-xl text-gray-500 font-medium">
                 syria ,Damascus jjcfs
                </p>
              )}
            </div>
            <div>
            {isEditingAddress ? (
                isSavingAddress== true ? (
                    <Ring
                      size={20}
                      lineWeight={5}
                      speed={2}
                      color="#ff6600"
                    />
                ) : (
                  <button onClick={handleSaveAddressClick}>Save</button>
                )
              ) : (
                <MdModeEditOutline
                  className="w-[20px] h-[20px] text-gray-500"
                  onClick={() => {
                    setIsEditingAddress(true);
                  }}
                />
              )}
            </div>
          </div>
          <div className="flex justify-center w-full my-7">
          <button className="border-2 border-skin-primary text-skin-primary rounded-full w-full py-2">logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayoutCustomer(MyProfile);
