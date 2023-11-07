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
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";
import store from "../store";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Ring } from "@uiball/loaders";

const Setting = () => {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [checkedDays, setCheckedDays] = useState([]);
  const [oldDays, setOldDays] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const openingTimeRef = useRef();
  const closingTimeRef = useRef();
  const {
    data: storeData,
    isLoading,
    refetch,
  } = useQuery(`storeData`, fetchStoreData, {
    staleTime: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  async function fetchStoreData() {
    try {
      return await Api.get(`/api/seller/store/products`);
    } catch (error) {}
  }

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

  // const [checkedDays, setCheckedDays] = useState(
  //   names.opening_days ? capitalizedDaysArray : []
  // );

  // let capitalizedDaysArray;

  useEffect(() => {
    if (storeData) {
      if (storeData.data.data.store.opening_days) {
        const capitalizedDaysArray = storeData.data.data.store.opening_days.map(
          (day) => day.charAt(0).toUpperCase() + day.slice(1)
        );
        // daysArray = capitalizedDaysArray;
        setOldDays(capitalizedDaysArray);
        setCheckedDays(capitalizedDaysArray);
      }
    }
  }, [storeData]);

  async function saveEdits(e) {
    e.preventDefault();
    function arraysAreEqual(arr1, arr2) {
      return JSON.stringify(arr1) === JSON.stringify(arr2);
    }
    // if (
    //   !openingTimeRef.current.value ||
    //   !closingTimeRef.current.value ||
    //   arraysAreEqual(checkedDays, daysArray)
    // ) {
    //   toast.error("At least one field is required to edit Your Store.", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    //   return;
    // }
    setIsSaving(true);
    let editData = {};

    const addIfDifferent = (fieldValue, fieldName) => {
      const originalValue = storeData.data.data.store[fieldName];
      if (
        fieldValue !== undefined &&
        fieldValue.trim() !== "" &&
        fieldValue !== originalValue
      ) {
        editData[fieldName] = fieldValue;
      }
    };
    addIfDifferent(openingTimeRef.current.value, "opening_time");
    addIfDifferent(closingTimeRef.current.value, "closing_time");

    if (arraysAreEqual(oldDays, checkedDays) == false) {
      editData[`opening_days`] = checkedDays;
    }
    try {
      const response = await Api.put(
        `/api/seller/store/edit`,
        editData
      );
      refetch();
      setIsSaving(false);
      // setIsEditing(false);
    } catch (error) {
      setIsSaving(false);
    }
    setIsSaving(false);

    console.log(editData);
  }

  if (isLoading) {
    return (
      <div className="w-full h-full">
        <TawasyLoader width={400} height={400} />
      </div>
    );
  }

  return (
    <>
      {storeData && (
        <div className="w-full h-full">
          <div className="w-full bg-gray-100 py-1 md:px-4">
            <h1 className="text-2xl text-skin-primary">
              Store Settings : {storeData.data.data.store.name}
            </h1>
          </div>
          <form
            className="flex flex-col justify-center items-center gap-y-6 md:pt-5 pt-2 md:px-4 md:w-[100%] h-[90%]"
            onSubmit={saveEdits}
          >
            <div className="flex justify-start gap-3 w-[40%]">
              <label className="text-xl text-gray-600">Opening Time : </label>
              <br />
              <input
                className="outline-none"
                type="time"
                defaultValue={storeData.data.data.store.opening_time}
                ref={openingTimeRef}
              />
            </div>

            <div className="flex justify-start gap-3 w-[40%]">
              <label className="text-xl text-gray-600">Closing Time : </label>
              <br />
              <input
                className="outline-none"
                type="time"
                defaultValue={storeData.data.data.store.closing_time}
                ref={closingTimeRef}
              />
            </div>

            <div className="md:flex md:flex-row sm:flex-col justify-start md:gap-3 w-[40%]">
              <label className="text-xl text-gray-600">Opening Days : </label>
              <br />
              <div className="print-value">
                <input
                  className="border-b-2 border-gray-500 focus:border-skin-primary outline-none md:my-0 my-4 w-max"
                  onClick={functionopenpopup}
                  value={checkedDays.join(", ")}
                  variant="contained"
                  type="text"
                  placeholder={checkedDays.join(", ")}
                  style={{ width: "400px" }}
                />
              </div>
            </div>

            <div className="w-full flex justify-center items-center ">
              {isSaving == true ? (
                <div className="text-white px-10 py-2 my-2 rounded-md flex justify-center items-center bg-skin-primary w-[15%]">
                  <Ring size={20} speed={2} lineWeight={5} color="white" />
                </div>
              ) : (
                <button
                  className="text-white px-10 py-2 my-2 rounded-md bg-skin-primary w-[15%] "
                  type="submit"
                  // onClick={() => console.log(checkedDays)}
                >
                  Save Change
                </button>
              )}
            </div>
          </form>
        </div>
      )}

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
