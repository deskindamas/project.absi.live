import React, { useState, useRef, useEffect } from "react";
import ImageUpload from "../../../../components/ImageUpload/ImageUpload";
import withLayoutAdmin from "@/components/UI/adminLayout";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import { Ring } from "@uiball/loaders";

const AddNewProductAdmin = () => {
  const [image, setImage] = useState();
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [saving, setSaving] = useState(false);
  const arNameRef = useRef();
  const enNameRef = useRef();
  const arDescRef = useRef();
  const enDescRef = useRef();
  const skuRef = useRef();
  const eanRef = useRef();
  const sortRef = useRef();
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const { data: brands, isLoading: brandsLoading } = useQuery(
    `brands`,
    fetchBrands,
    { staleTime: 1, refetchOnMount: true, refetchOnWindowFocus: false }
  );
  const { data: categories, isLoading: categoriesLoading } = useQuery(
    `categories`,
    fetchCategories,
    { staleTime: 1, refetchOnMount: true, refetchOnWindowFocus: false }
  );

  async function fetchBrands() {
    return await Api.get(`/api/admin/brands`);
  }

  async function fetchCategories() {
    return await Api.get(`/api/admin/get-categories`);
  }

  function handleStoreImage(image) {
    setImage(image);
  }

  // if (categories) {
  //   console.log(categories);
  // }

  async function createNewProduct(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const response = await Api.post(
        `/api/admin/add-product`,
        {
          name_ar: arNameRef.current.value,
          name_en: enNameRef.current.value,
          description_ar: arDescRef.current.value,
          description_en: enDescRef.current.value,
          image: image,
          sort_order: sortRef.current.value,
          category_name: category,
          ean_code: eanRef.current.value,
          sku: skuRef.current.value,
          brand_name: brand,
        },
        {
          headers: { "Content-Type": `multipart/form-data` },
        }
      );
      setSaving(false);
      router.push("/admin/Products/AllProducts");
    } catch (error) {
      setSaving(false);
      // console.log(error);
    }
    setSaving(false);
  }

  if (categoriesLoading == true || brandsLoading == true) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={400} height={500} />
      </div>
    );
  }

  return (
    <div className="form-product">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="items-center text-2xl pt-9 pb-6 text-zinc-700">
            Create New Product
          </h2>
        </div>
        <form
          className=" w-[80%] flex flex-col justify-center mx-auto "
          onSubmit={createNewProduct}
        >
          {/* <div className="items-center"> */}
          <div className="grid md:grid-cols-2 grid-col-1 gap-2">
            <div className="px-6 py-4">
              <input
                className="md:w-[400px] w-full border-b-2 outline-none  text-xl focus:border-skin-primary transition-all duration-700 "
                name="nameAr"
                placeholder="Arabic Name"
                ref={arNameRef}
                required
              />
            </div>
            <div className="px-6 py-4">
              <input
                className="md:w-[400px] w-full border-b-2  outline-none text-xl focus:border-skin-primary transition-all duration-700"
                name="nameEn"
                placeholder="English Name"
                ref={enNameRef}
                required
              />
            </div>
            <div className="px-6 py-4">
              <input
                className="md:w-[400px] w-full border-b-2 outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                name="descriptionAr"
                placeholder="Arabic Description"
                ref={arDescRef}
                required
              />
            </div>
            <div className="px-6 py-4">
              <input
                className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                name="descriptionEn"
                placeholder="English Description "
                ref={enDescRef}
                required
              />
            </div>

            <div className="px-6 py-4">
              <select
                className="md:w-[400px] w-full  form-select outline-none bg-transparent border-b-2 border-gray-300 "
                aria-label="Category"
                name="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
              >
                <option
                  className="bg-white text-[#C3C7CE] "
                  value
                  selected
                  disabled
                >
                  Select a Category
                </option>
                {categories &&
                  categories.data.categories.map((category) => {
                    return (
                      <option key={category.name_en} value={category.name_en}>
                        {category.name_en}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="px-6 py-4">
              <select
                className="md:w-[400px] w-full  form-select outline-none bg-transparent border-b-2 border-gray-300 "
                aria-label="Brand"
                name="Brand"
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
                required
              >
                <option className="bg-white " value selected disabled>
                  Select a Brand
                </option>
                {brands &&
                  brands.data.brands.map((category) => {
                    return (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="px-6 py-4">
              <input
                className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                name="sku"
                type="number"
                placeholder="sku"
                style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
                ref={skuRef}
                required
              />
            </div>

            <div className="px-6 py-4">
              <input
                className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                name="ean_code"
                type="number"
                style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
                placeholder="ean_code"
                ref={eanRef}
                required
              />
            </div>

            <div className="px-6 py-4">
              <input
                className="md:w-[400px] w-full border-b-2  outline-none  text-xl focus:border-skin-primary transition-all duration-700"
                name="sort_order"
                type="number"
                style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
                placeholder="sort_order"
                ref={sortRef}
                required
              />
            </div>

            <div className="px-6 py-4 my-5 flex flex-col justify-start items-start box-border pl-3 w-[80%] mx-auto  ">
              <div className="w-[200px] h-[100px]">
                <ImageUpload
                  onSelectImage={handleStoreImage}
                  width={150}
                  height={50}
                />
              </div>
            </div>
          </div>

          {/* <div className="w-full flex justify-center "> */}
          <button
            className="bg-[#ff6600] text-white md:w-[400px] py-2 rounded-lg hover:bg-[#ff8800] "
            type="submit"
          >
            {saving == true ? (
              <div className="w-full flex justify-center">
                <Ring size={20} speed={2} lineWeight={5} color="white" />
              </div>
            ) : (
              `Add Product`
            )}
          </button>
          {/* </div> */}
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default withLayoutAdmin(AddNewProductAdmin);
