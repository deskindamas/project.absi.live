import createAxiosInstance from "@/API";
import { Ring } from "@uiball/loaders";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { MdCheck, MdClose, MdModeEdit } from "react-icons/md";

function SellerStore({ store , refetch }) {
  const [isToggled, setIsToggled] = useState(store.available);
  const [priceInputVisible, setPriceInputVisible] = useState(false);
  const [price , setPrice] = useState();
  const [editingPrice, setEditingPrice] = useState(false);
  const [savingPrice, setSavingPrice] = useState(false);
  const newPriceRef = useRef();
  const storeId = localStorage.getItem("Sid");
  const router = useRouter();
  const Api = createAxiosInstance(router);

  console.log(`price`);
  console.log(store.price);

  // function handleAvailable() {
  //   setIsToggled(!isToggled);
  // }

  // function togglePriceInput() {
  //   setPriceInputVisible(!priceInputVisible);
  // }

  // async function changeAvalability() {}

  useEffect(() => {
    if(store){
      setPrice(store.price) ;
    }
  } , [store])

  async function savePrice() {
    setSavingPrice(true);
    try {
      const response = await Api.put(
        `api/seller/store/${storeId}/product/${store.id}/price`,
        {
          price: newPriceRef.current.value,
        }
      );
      setPrice(newPriceRef.current.value);
      setSavingPrice(false);
      setEditingPrice(false);
      refetch();
    } catch (error) {
      console.log(error);
    }
    setSavingPrice(false);
    setEditingPrice(false);
  }

  return (
    <>
       <div
        className="bg-white mb-10 mx-2 md:px-3 pt-3 pb-6 border-2 shadow-xl border-slate-200 rounded-lg "
        key={store.id}
      >
        <div className="flex flex-col justify-start items-center w-full h-full">
          <div className="w-[250px] h-[50%] mx-auto my-2 ">
            <img
              className="h-[250px] items-center"
              src={store.image}
              loading="lazy"
              alt={store.name}
            />
          </div>
          <div className="flex justify-center w-full h-[20%]">
            <div className="items-center text-2xl pt-2 pb-2">{store.name}</div>
          </div>
          <div className="flex justify-center max-h-[20%] h-[20%] ">
            <div
              className="text-start text-md text-gray-500  max-w-md px-2 h-full "
              title={store.description}
            >
              {store.description}
            </div>
          </div>
          <div className="flex justify-between items-center w-full h-[10%] ">
            <div className=" w-[55%]">
              <p className=" text-start flex-wrap border-2 rounded-full px-2 py-1 border-[#ff6600] max-w-fit ">
                {store.brand}
              </p>
            </div>
            <div className="flex justify-end gap-3">
              {editingPrice == true ? (
                <input
                  type="text"
                  className="text-white rounded-md w-24 bg-skin-primary placeholder:text-white focus:outline-none px-2 py-1 text-sm mx-auto "
                  defaultValue={price}
                  ref={newPriceRef}
                />
              ) : (
                <span className="text-white rounded-md w-24 flex justify-center items-center  bg-skin-primary">
                  {price}
                </span>
              )}
              {editingPrice === true ? (
                <div className="flex items-center">
                  {savingPrice === true ? (
                    <div className="">
                      <Ring
                        size={18}
                        lineWeight={5}
                        speed={2}
                        color="#ff6600"
                      />
                    </div>
                  ) : (
                    <MdCheck
                      className="w-[25px] h-[25px] text-green-600 hover:text-green-500 "
                      onClick={savePrice}
                    />
                  )}
                  <MdClose
                    className="w-[25px] h-[25px] text-red-600 hover:text-red-500"
                    onClick={() => {
                      setEditingPrice(false);
                    }}
                  />
                </div>
              ) : (
                <MdModeEdit
                  className="w-[25px] h-[25px] bg-gray-400 text-white p-[3px] rounded-[50%]"
                  onClick={() => {
                    setEditingPrice(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default SellerStore;
