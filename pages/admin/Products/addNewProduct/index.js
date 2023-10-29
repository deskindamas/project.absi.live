import React, { useState, useRef, useEffect } from "react";
import ImageUpload from "../../../../components/ImageUpload/ImageUpload";
import withLayoutAdmin from "@/components/UI/adminLayout";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";

const AddNewProductAdmin = () => {
  const [image, setImage] = useState();
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [category , setCategory] = useState();
  const [brand , setBrand] = useState();
  const { data: brands, isLoading: brandsLoading } = useQuery(
    `brands`,
    fetchBrands,
    { staleTime: 1, refetchOnMount: true, refetchOnWindowFocus: false}
  );
  const { data: categories, isLoading: categoriesLoading } = useQuery(
    `categories`,
    fetchCategories,
    { staleTime: 1, refetchOnMount: true, refetchOnWindowFocus: false }
  );

  async function fetchBrands () {
    return await Api.get(`/api/admin/get-categories`);
  }

  async function fetchCategories () {
    return await Api.get(`/api/admin/brands`);
  }


  function handleStoreImage(image) {
    setImage(image);
  }

  // useEffect(() => {
  //   if (categories && brands) {
  //     setCategories(categories.data);
  //     setBrandz(brands.data);
  //   }
  // }, [categories, brands]);

  if(categoriesLoading == true  || brandsLoading == true) {
    return <div className="w-full h-full" >
      <TawasyLoader width = {400} height = {500} />
    </div>
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
                <select
                  className="md:w-[400px] w-full  form-select outline-none bg-transparent border-b-2 border-gray-300 "
                  aria-label="Category"
                  name="category"
                >
                  <option className="bg-white" value selected disabled>
                    Select a Category
                  </option>
                  {categories && categories.data.map((category) => {
                    return <option value={category.name} >{category.name}</option>
                  })}
                </select>
              </div>

              <div className="px-6 py-4">
                {/* <input
                  className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                  name="brand"
                  placeholder="brand"
                /> */}
                 <select
                  className="md:w-[400px] w-full  form-select outline-none bg-transparent border-b-2 border-gray-300 "
                  aria-label="Brand"
                  name="Brand"
                >
                  <option className="bg-white" value selected disabled>
                    Select a Brand
                  </option>
                  {brands && brands.data.map((category) => {
                    return <option value={category.name} >{category.name}</option>
                  })}
                </select>
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
            </div>

            <div className="w-full flex justify-center">
              <button
                className="bg-[#ff6600] text-white md:w-[400px] py-2 rounded-lg hover:bg-[#ff8800] "
                type="submit"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withLayoutAdmin(AddNewProductAdmin);
