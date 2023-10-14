import React, { useState, useRef, useEffect, Fragment } from "react";
import UploadImg from "../../../public/images/choose_file - Copy.png";
import styles from "../../../components/componentsStyling/sellerStyles.module.css";
import LogoRequest from "../../../public/images/tawasylogowhite.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import Image from "next/image";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Locations from "@/components/Location/Location";
import axios from "axios";
import url from "@/URL";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { Ring } from "@uiball/loaders";
import TawasyLoader from "@/components/UI/tawasyLoader";
import {toast} from 'react-toastify';

const RequestStore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const Api = createAxiosInstance(router);

  const handleLogin = () => {
    // setIsLoggedIn(true);
    // window.location.href = "/layout";
  };

  const [address, setAddress] = useState();
  const inputRef = useRef(null);
  const ArNameRef = useRef();
  const EnNameRef = useRef();
  const areaRef = useRef();
  const streetRef = useRef();
  const [logo, setLogo] = useState();
  const [image, setImage] = useState();
  const openTimeRef = useRef();
  const closeTimeRef = useRef();
  const openDayRef = useRef();
  const [storeType, selectedStoreType] = useState();
  const [storeTypes, setStoreTypes] = useState();

  const handleImageClick = () => {
    inputRef.current.click();
  };

  let token;

  useEffect(() => {
    const at = localStorage.getItem("AT");
    token = at;
  }, [token]);

  useEffect(() => {
    setImage(null);
    setLogo(null);
  } , [])

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   setimage(event.target.files[0]);
  // };

  useEffect(() => {
    async function fetchStoreTypes() {
      setIsLoading(true);
      const token = localStorage.getItem("AT");
      try {
        const response = await Api.get(`/api/seller/store-types/all`);
        console.log(`store types`);
        console.log(response);
        setStoreTypes(response.data.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false)
    }
    fetchStoreTypes();
  }, []);

  const [checkedDays, setCheckedDays] = useState([]);

  const handleCheckboxChange = (event) => {
    const day = event.target.value;
    if (event.target.checked) {
      setCheckedDays([...checkedDays, day]);
    } else {
      setCheckedDays(checkedDays.filter((d) => d !== day));
    }
  };

  const [open, openchange] = useState(false);
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };

  function handleAddress(address) {
    setAddress(address);
  }

  async function submitStore(e) {
    e.preventDefault();
    if(!address || !logo || !image ){
      toast.error('Please fill all of the required fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return ;
    }
    setSubmitting(true) ;
    // try {
    //   const response = await axios.post(`${url}/api/seller/store` , {
    //     name_en : EnNameRef.current.value ,
    //     name_ar : ArNameRef.current.value ,
    //     address : address.address,
    //     street : streetRef.current.value,
    //     area : areaRef.current.value ,
    //     image : image ,
    //     logo : logo,
    //     opening_time : openTimeRef.current.value ,
    //     closing_time : closeTimeRef.current.value ,
    //     store_type_name : storeType ,
    //     opening_days : checkedDays,
    //   } , {
    //     headers: { Authorization: `Bearer ${token}` , Accept : `application/json` , "Content-Type" : `multipart/form-data` },

    //   });
    //   console.log(`request store`);
    //   console.log(response) ;
    // } catch (error) {
    //   console.log(error);
    // }
    ///////////////////////////////////////////////////////////////////////////////
    try {
      const response = await Api.post(
        `/api/seller/store`,
        {
          name_en: EnNameRef.current.value,
          name_ar: ArNameRef.current.value,
          address: address.address,
          street: streetRef.current.value,
          area: areaRef.current.value,
          image: image,
          logo: logo,
          opening_time: openTimeRef.current.value,
          closing_time: closeTimeRef.current.value,
          store_type_name: storeType,
          opening_days: checkedDays,
        },
        {
          headers: { "Content-Type": `multipart/form-data` },
        }
      );
      setSubmitting(false);
      console.log(`request store`);
      console.log(response);
    } catch (error) {
      setSubmitting(false);
      console.log(error);
    }
  }

  function handleLogoImage(logo) {
    // console.log(`logo`);
    // console.log(logo);
    setLogo(logo);
  }

  function handleStoreImage(image) {
    // console.log(`store image`);
    // console.log(image);
    setImage(image);
  }

  if(isLoading == true){
    return <div className="w-screen h-screen" >
      <TawasyLoader/>
    </div>
  }

  return (
    <Fragment>
      <div className={`h-screen w-screen bg-[#ff6600] overflow-scroll `}>
        <div className="w-[70%] mx-auto h-full ">
          <div className=" w-full">
            <div className="flex justify-center items-center pt-16 pb-7">
              <Image src={LogoRequest} className="w-72 " />
            </div>
          </div>

          <form className="h-full" onSubmit={submitStore}>
            <div className="grid md:grid-cols-2 grid-col-1 gap-2 text-zinc-50 h-max my-16 ">
              <div>
                <div>
                  <label className="" htmlFor="name">
                    Arabic Name{" "}
                  </label>
                  <input
                    id="name"
                    className="mb-7 text-zinc-500 pl-2 outline-none w-full h-[40px] "
                    type="text"
                    placeholder="Name(Arabic)"
                    ref={ArNameRef}
                    required
                  />
                </div>
                <div>
                  <label>Opening Time</label>
                  <br />
                  <input
                    className="mb-7 text-zinc-500 pl-2 outline-none w-full h-[40px] "
                    type="time"
                    placeholder="Enter Opening Time "
                    ref={openTimeRef}
                    required
                  />
                </div>

                <div>
                  <label>Opening Days</label>
                  <br />
                  <div className="print-value">
                    <input
                      className="mb-7 text-zinc-500 pl-2 outline-none w-full h-[40px] "
                      onClick={functionopenpopup}
                      variant="contained"
                      type="text"
                      value={checkedDays.join(", ")}
                      placeholder="Opening Days"
                    />
                  </div>
                </div>
                <div>
                  <label>Area</label>
                  <br />
                  <input
                    className="mb-7 text-zinc-500 pl-2 outline-none w-full h-[40px] "
                    type="text"
                    placeholder=" Area"
                    ref={areaRef}
                    required
                  />
                </div>

                <div className="w-full ">
                  <label>Address</label>
                  <Locations
                    className={`mb-7 text-zinc-500 pl-2 outline-none w-full h-[40px]`}
                    onLocation={handleAddress}
                  />
                </div>

                <div className="flex flex-col justify-start items-start  box-border ">
                  <label className=" ">Store Image</label>
                  <div className="w-[200px] h-[100px]">
                    <ImageUpload
                      onSelectImage={handleStoreImage}
                      width={150}
                      height={50}
                    />
                  </div>
                </div>
              </div>

              <div className="">
                <div>
                  <label>English Name </label>
                  <input
                    className="mb-7 text-zinc-500 pl-2 outline-none w-full h-[40px]"
                    type="text"
                    placeholder="Name(English)"
                    ref={EnNameRef}
                    required
                  />
                </div>

                <div>
                  <label>Closing Time</label>
                  <br />
                  <input
                    className="mb-7 text-zinc-500 pl-2 outline-none w-full h-[40px] "
                    type="time"
                    placeholder="Enter Closing Time "
                    ref={closeTimeRef}
                    required
                  />
                </div>

                <div>
                  <label>Store Type</label>
                  <br />
                  {storeTypes && (
                    <select
                      className="form-select mb-7 h-[40px] w-full text-zinc-500 pl-2 outline-none"
                      aria-label="Store Type"
                      onChange={(e) => {
                        console.log(e.target.value);
                        selectedStoreType(e.target.value);
                      }}
                    >
                      <option disabled selected value>
                        -- select an option --
                      </option>
                      {storeTypes.map((storeType) => {
                        return (
                          <option key={storeType.id} value={storeType.name}>
                            {storeType.name}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>

                <div className="mb-16">
                  <label>Street</label>
                  <br />
                  <input
                    className="mb-7 outline-none w-full h-[40px] text-zinc-500 pl-2"
                    type="text"
                    placeholder=" street"
                    ref={streetRef}
                    required
                  />
                </div>

                <div className="pt-8">
                  <label>Store Logo</label>
                  <br />
                  <div>
                    <ImageUpload
                      onSelectImage={handleLogoImage}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full ">
              <button
                className="px-2 py-1 bg-white rounded-md hover:bg-gray-200 text-[#ff6600] w-[20%]  "
                // onClick={handleLogin}
                type="submit"
              >
                {submitting == true ? (
                  <div className="flex justify-center items-center">
                    <Ring size={25} lineWeight={5} speed={2} color="#ff6600" />
                  </div>
                ) : (
                  "Submit Request"
                )}
              </button>
            </div>
          </form>

          <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
            <DialogTitle>
              Opening Days{" "}
              <IconButton onClick={closepopup} style={{ float: "right" }}>
                <MdClose />
              </IconButton>{" "}
            </DialogTitle>
            <DialogContent>
              <Stack spacing={2} margin={2}>
                <fieldset className="check">
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <input
                          type="checkbox"
                          name="Sunday"
                          value="Sunday"
                          checked={checkedDays.includes("Sunday")}
                          onChange={handleCheckboxChange}
                        />{" "}
                        Sunday
                      </label>
                      <br />
                      <label>
                        {" "}
                        <input
                          type="checkbox"
                          name="Monday"
                          value="Monday"
                          checked={checkedDays.includes("Monday")}
                          onChange={handleCheckboxChange}
                        />{" "}
                        Monday
                      </label>
                      <br />
                      <label>
                        <input
                          type="checkbox"
                          name="Tuesday"
                          value="Tuesday"
                          checked={checkedDays.includes("Tuesday")}
                          onChange={handleCheckboxChange}
                        />{" "}
                        Tuesday
                      </label>
                      <br />
                      <label>
                        {" "}
                        <input
                          type="checkbox"
                          name="Wednesday"
                          value="Wednesday"
                          checked={checkedDays.includes("Wednesday")}
                          onChange={handleCheckboxChange}
                        />{" "}
                        Wednesday
                      </label>
                      <br />
                    </div>

                    <div className="col-md-6">
                      <label>
                        <input
                          type="checkbox"
                          name="Thursday"
                          value="Thursday"
                          checked={checkedDays.includes("Thursday")}
                          onChange={handleCheckboxChange}
                        />{" "}
                        Thursday
                      </label>
                      <br />
                      <label>
                        <input
                          type="checkbox"
                          name="Friday"
                          value="Friday"
                          checked={checkedDays.includes("Friday")}
                          onChange={handleCheckboxChange}
                        />{" "}
                        Friday
                      </label>
                      <br />{" "}
                      <label>
                        <input
                          type="checkbox"
                          name="Saturday"
                          value="Saturday"
                          checked={checkedDays.includes("Saturday")}
                          onChange={handleCheckboxChange}
                        />{" "}
                        Saturday
                      </label>
                      <br />
                    </div>
                  </div>
                </fieldset>
              </Stack>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </div>
      </div>
    </Fragment>
  );
};
export default RequestStore;
