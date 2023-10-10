import React, { useState, useRef, useEffect, Fragment } from "react";
// import "../Component/imageupload/imageupload.css";
// import UploadImg from "../Component/images/choose_file - Copy.png";
import UploadImg from '../../../public/images/choose_file - Copy.png';
// import "../Component/css/style.css";
import styles from '../../../components/componentsStyling/sellerStyles.module.css' ;
// import LogoRequest from "../Component/images/tawasylogo.png";
import LogoRequest from '../../../public/images/tawasylogo.png';
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
// import CloseIcon from "@mui/icons-material/Close";
import { MdClose } from "react-icons/md";
// import ImageUpload from "../Component/imageupload/imageupload";
import ImageUpload from "@/components/ImageUpload/ImageUpload";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import Test from "../Component/test";
import Locations from "@/components/Location/Location";
// import styles from '../../../components/componentsStyling/sellerStyles.module.css';

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
      <div className={styles[`form-request`]}>
        <div className="container">
          <div className="row header-request">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <img
                src={LogoRequest}
                height="80px"
                width="140px"
                style={{ marginTop: "20px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              {/* <Test /> */}
              {/* <Locations/> */}
            </div>
          </div>
          <form style={{ paddingBottom: "60px" }}>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <div>
                  <label>Name Arabic </label>
                  <input type="text" placeholder="Name(Arabic)" required />
                </div>
                <div>
                  <label>Opening Time</label>
                  <br />
                  <input
                    type="time"
                    placeholder="Enter Opening Time "
                    required
                  />
                </div>

                <div>
                  <label>Opening Days</label>
                  <br />
                  <div className="print-value">
                    <input
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
                  <input type="text" placeholder=" Area" required />
                </div>

                <div>
                  <label style={{ marginBottom: "0px" }}>Select Image</label>
                  <br />
                  <div>
                    <ImageUpload />
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleLogin}
                    style={{
                      backgroundColor: "#ff6600",
                      color: "white",
                      padding: "10px 15px",
                      border: "none",
                      width: "100%",
                      borderRadius: "5px",
                      marginTop: "43px",
                    }}
                  >
                    Submit Request
                  </button>
                </div>
              </div>

              <div className="col-md-4">
                <div>
                  <label>Name English </label>
                  <input type="text" placeholder="Name(English)" required />
                </div>

                <div>
                  <label>Closing Time</label>
                  <br />
                  <input
                    type="time"
                    placeholder="Enter Closing Time "
                    required
                  />
                </div>

                <div>
                  <label>Store Type</label>
                  <br />
                  <select className="form-select" aria-label="Store Type">
                    <option>restaurant</option>
                    <option value="pharmacy">pharmacy</option>
                    <option value="Market">Market</option>
                  </select>
                </div>

                <div>
                  <label>Street</label>
                  <br />
                  <input type="text" placeholder=" street" required />
                </div>

                <div>
                  <label>Select Logo</label>
                  <br />
                  <div>
                    <div onClick={handleImageClick}>
                      {imag ? (
                        <img
                          src={URL.createObjectURL(imag)}
                          alt="upload image"
                          style={{ width: "100px", height: "100px" }}
                        />
                      ) : (
                        <img
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

              <div className="col-md-2"></div>
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
