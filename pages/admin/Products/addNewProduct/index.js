import React, { useState, useRef, useEffect } from "react";
import ImageUpload from "../../../../components/ImageUpload/ImageUpload";
import withLayoutAdmin from "@/components/UI/adminLayout";

const AddNewProductAdmin = () => {

  const [image, setImage] = useState();

  function handleStoreImage(image) {
    setImage(image);
  }


  return (
    <div className="form-product">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="items-center text-2xl pt-9 pb-6 text-zinc-700">
            Create New Product
          </h2>
        </div>
        <form className="flex justify-center">
          <div className="items-center">
            <div className="grid md:grid-cols-2 grid-col-1 gap-2">
              <div className="px-6 py-4">
                <input
                  className="md:w-[400px] w-full border-b-2 outline-none  text-xl focus:border-skin-primary transition-all duration-700 "
                  name="nameAr"
                  placeholder="Arabic Name"
                  required
                />
              </div>
              <div className="px-6 py-4">
                <input
                  className="md:w-[400px] w-full border-b-2  outline-none text-xl focus:border-skin-primary transition-all duration-700"
                  name="nameEn"
                  placeholder="English Name"
                />
              </div>
              <div className="px-6 py-4">
                <input
                  className="md:w-[400px] w-full border-b-2 outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                  name="descriptionAr"
                  placeholder="Arabic Description"
                />
              </div>
              <div className="px-6 py-4">
                <input
                  className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                  name="descriptionEn"
                  placeholder="English Description "
                />
              </div>

              <div className="px-6 py-4">
                <input
                  className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                  name="brand"
                  placeholder="brand"
                />
              </div>

              <div className="px-6 py-4">
                <input
                  className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                  name="sku"
                  placeholder="sku"
                />
              </div>

              <div className="px-6 py-4">
                <input
                  className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                  name="ean_code"
                  placeholder="ean_code"
                />
              </div>

              <div className="px-6 py-4">
                <input
                  className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                  name="sort_order"
                  placeholder="sort_order"
                />
              </div>
            
            
              <div className="px-6 py-4 flex flex-col justify-start items-start box-border pl-3 w-[80%] mx-auto ">
                <div className="w-[200px] h-[100px]">
                  <ImageUpload
                    onSelectImage={handleStoreImage}
                    width={150}
                    height={50}
                  />
                </div>
              </div>

              <div className="px-6 py-4">
                <button
                  className="bg-[#ff6600] text-white md:w-[400px] py-2 rounded-lg hover:bg-[#ff8800] "
                  type="submit"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withLayoutAdmin(AddNewProductAdmin);
