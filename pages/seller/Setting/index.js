import React, { useState, useRef } from "react";
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
import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import { MdClose } from "react-icons/md";

const Setting = () => {
  
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
    <>
      <div>
        <div className="flex flex-col justify-center items-start w-full h-full">
         <div className="w-full bg-gray-100 py-1 md:px-4">
          <h1 className="text-2xl text-skin-primary">Edit Profile</h1>
         </div>
          <form className="flex flex-col gap-y-6 md:pt-5 pt-2 md:px-4 md:w-[100%] w-[90%]">
            <div className="flex justify-start gap-3">
              <label className="text-xl text-gray-600">Opening Time : </label>
              <br />
              <input
                className="outline-none"
                type="time"
                placeholder="Enter Opening Time "
                required
              />
            </div>

            <div className="flex justify-start gap-3">
              <label className="text-xl text-gray-600">Closing Time : </label>
              <br />
              <input
                className="outline-none"
                type="time"
                placeholder="Enter Closing Time "
                required
              />
            </div>

            <div className="md:flex md:flex-row sm:flex-col justify-start md:gap-3 ">
              <label className="text-xl text-gray-600">Opening Days : </label>
              <br />
              <div className="print-value">
                <input
                  className="border-b-2 border-gray-500 focus:border-skin-primary outline-none md:my-0 my-4"
                  onClick={functionopenpopup}
                  value= {checkedDays.join(", ")} 
                  variant="contained"
                  type="text"
                  placeholder={checkedDays.join(", ")}
                  style={{ width: "400px" }}
                  required
                />
              </div>
            </div>
             
             <div>
              <button className="text-white px-10 py-2 my-2 rounded-md bg-skin-primary">Save Change</button>
             </div>
          </form>
        </div>
      </div>

      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
            <DialogTitle>
              Opening Days{" "}
              <IconButton onClick={closepopup} style={{ float: "right" }}>
                <MdClose />
              </IconButton>{" "}
            </DialogTitle>
            <DialogContent>
              <Stack spacing={2} margin={2}>
                <fieldset className="check w-full">
                  <div className="flex flex-wrap gap-10 w-full">
                    <div className="flex flex-col gap-y-1">
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
                    </div>

                    <div className="flex flex-col gap-y-1">
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
                    </div>

                    <div className="flex flex-col gap-y-1">
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
    </>
  );
};

export default withLayout(Setting);
