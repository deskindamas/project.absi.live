import createAxiosInstance from "@/API";
import { Ring } from "@uiball/loaders";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddProduct({ addproduct }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const Api = createAxiosInstance(router);

  async function saveProduct() {
    setIsLoading(true);
    try {
      const response = await Api.post(
        `/api/seller/select-product/${addproduct.id}`
      );
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <>
      <div
        className="bg-white shadow mx-2 md:px-3 pt-3 pb-6 border-2 border-slate-200 rounded-lg "
        key={addproduct.id}
      >
        <div className="card_inner">
          <div className="w-[250px] mx-auto my-2 ">
            <img
              className="h-[250px] items-center"
              loading="lazy"
              src={addproduct.image}
              alt="productPhoto"
            />
          </div>
          <div className="flex justify-center items-center px-1 md:[px-0] ">
            <div className=" text-xl text-center ">{addproduct.name}</div>
          </div>
          <div className="flex justify-center">
            <div className="items-center text-lg text-gray-500 pb-5">
              {addproduct.description}
            </div>
          </div>
          <div className="row">
            <div>
              <div className="flex justify-between items-center md:w-[80%] w-[90%] mx-auto  ">
                <div className="flex flex-wrap gap-2">
                  <div className=" px-2 bg-white border-2 border-skin-primary rounded-2xl text-skin-primary  text-start  flex justify-center items-center ">
                    {addproduct.category}
                  </div>
                  <div className=" px-2 bg-white border-2 w-max border-skin-primary rounded-2xl text-skin-primary flex justify-center items-center ">
                    {addproduct.brand}
                  </div>
                </div>
                {!isLoading ? (
                  <AiOutlinePlus
                    onClick={saveProduct}
                    className="cursor-pointer shadow md:w-[30px] md:h-[30px] bg-skin-primary text-white md:p-[5px] rounded-full w-[30px] h-[25px] md:[px-0] md:[mx-0] px-1 mx-2 "
                    // style={{
                    //   width: "30px",
                    //   height: "30px",
                    //   backgroundColor: "#ff6600",
                    //   color: "white",
                    //   padding: "5px",
                    //   borderRadius: "50%",
                    // }}
                  />
                ) : (
                  <div className="bg-skin-primary p-[5px] rounded-full">
                    <Ring size={20} lineWeight={5} speed={2} color="white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
