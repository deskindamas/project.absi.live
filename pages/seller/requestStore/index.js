import React, { useState, useRef, useEffect, Fragment } from "react";
import UploadImg from '../../../public/images/choose_file - Copy.png';
import styles from '../../../components/componentsStyling/sellerStyles.module.css' ;
import LogoRequest from '../../../public/images/tawasylogowhite.png';
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


const RequestStore = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    window.location.href = "/layout";
  };

  const inputRef = useRef(null);
  const [imag, setimage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setimage(event.target.files[0]);
  };

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

  return (
    <Fragment>
      <div className={styles[`form-request`]} style={{backgroundColor:"#ff6600" }}>
        <div className="container">
          <div className="row header-request w-full">
            <div className="flex justify-center items-center pt-16 pb-7">
              <Image
                src={LogoRequest}
                className='w-72 '
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-col-1 gap-3 ">
            <div className="col-md-8">
              {/* <Test /> */}
              {/* <Locations/> */}
            </div>
          </div>

          <form className='pl-20 pr-20'>
            <div className="grid md:grid-cols-2 grid-col-1 gap-2 text-zinc-50 ">
              <div>
                <div>
                  <label className ='text-xl' htmlfor='name'  >Name Arabic </label>
                  <input id = 'name' className='mb-7 text-zinc-500 pl-2 outline-none ' type="text" placeholder="Name(Arabic)" required />
                </div>
                <div>
                  <label>Opening Time</label>
                  <br />
                  <input className='mb-7 text-zinc-500 pl-2 outline-none' 
                    type="time"
                    placeholder="Enter Opening Time "
                    required
                  />
                </div>

                <div>
                  <label>Opening Days</label>
                  <br />
                  <div className="print-value">
                    <input  className='mb-7 text-zinc-500 pl-2 outline-none' 
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
                  <input className='mb-7 text-zinc-500 pl-2 outline-none' type="text" placeholder=" Area" required />
                </div>

                <div>
                  <label style={{ marginBottom: "0px" }}>Select Image</label>
                  <br />
                  <div>
                    <ImageUpload />
                  </div>
                </div>
              </div>

              <div >
                <div>
                  <label>Name English </label>
                  <input className='mb-7 text-zinc-500 pl-2 outline-none' type="text" placeholder="Name(English)" required />
                </div>

                <div>
                  <label>Closing Time</label>
                  <br />
                  <input className='mb-7 text-zinc-500 pl-2 outline-none' 
                    type="time"
                    placeholder="Enter Closing Time "
                    required
                  />
                </div>

                <div>
                  <label>Store Type</label>
                  <br />
                  <select className="form-select mb-7 h-[40px] w-full text-zinc-500 pl-2 outline-none" aria-label="Store Type">
                    <option>restaurant</option>
                    <option value="pharmacy">pharmacy</option>
                    <option value="Market">Market</option>
                  </select>
                </div>

                <div>
                  <label>Street</label>
                  <br />
                  <input className='mb-7 outline-none'  type="text" placeholder=" street" required />
                </div>

                <div>
                  <label>Select Logo</label>
                  <br />
                  <div>
                    <div onClick={handleImageClick}>
                      {imag ? (
                        <Image
                          src={URL.createObjectURL(imag)}
                          alt="upload image"
                          style={{ width: "100px", height: "100px" }}
                        />
                      ) : (
                        <Image
                          src={UploadImg}
                          alt="upload image"
                          style={{ width: "200px", height: "45px" }}
                        />
                      )}
                      <input
                        type="file"
                        ref={inputRef}
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='flex items-center justify-center' >
                  <button className = 'px-2 py-1 bg-white rounded-md hover:bg-gray-200 text-[#FD6500] '
                    onClick={handleLogin} >
                    Submit Request
                  </button>
                </div>
          </form>

          <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
            <DialogTitle>
              Opening Days{" "}
              <IconButton onClick={closepopup} style={{ float: "right" }}>
                <MdClose/>
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
