import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import item1 from "../../public/images/kuala.jpg";
import Image from "next/image";
import { convertDate } from "../SellerOrders/sellerOrder";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";

export function convertDateStringToDate(inputString) {
  // Create a new Date object using the input string
  const dateObject = new Date(inputString);

  // Format the date and time
  const year = dateObject.getUTCFullYear();
  const month = String(dateObject.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(dateObject.getUTCDate()).padStart(2, "0");
  const hours = String(dateObject.getUTCHours()).padStart(2, "0");
  const minutes = String(dateObject.getUTCMinutes()).padStart(2, "0");
  const seconds = String(dateObject.getUTCSeconds()).padStart(2, "0");

  // Create the formatted date and time string
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDateTime;
}

function OrderAdmin({ names }) {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState();
  const [open, openchange] = useState(false);

  const functionopenpopup = async () => {
    setIsLoading(true);
    openchange(true);
    try {
      const response = await Api.get(`/api/admin/order/${names.order_id}`);
      setOrderDetails(response.data.data);
      setIsLoading(false);
    } catch (error) {}
  };
  const closepopup = () => {
    openchange(false);
  };

  return (
    <>
      <tr
        key={names.id}
        className="even:bg-zinc-200 odd:bg-zinc-50 text-center"
      >
        <td className="pb-5 pt-5">{names.order_id}</td>
        <td className="pb-5 pt-5">{names.store_name}</td>
        <td className="pb-5">{names.customer_name}</td>
        <td className="pb-5">{names.status}</td>
        <td className="pb-5">{names.shipping_address}</td>
        <td className="pb-5">{names.date}</td>
        {/* <td className="pb-5">{names.created}</td> */}
        <td className="pb-5">{convertDateStringToDate(names.updated_at)}</td>
        <td className="pb-5">
          <button
            onClick={functionopenpopup}
            className="bg-transparent border-b-2 border-[#ff6600] "
          >
            Details
          </button>
        </td>
      </tr>

      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="md">
        <DialogTitle className=" border-b-2 border-gray-200">
          <div className="md:mx-5">
            <div className="flex justify-between mx-auto">
              <h4 className="text-xl text-gray-600">
                Store name: {names.store_name}
              </h4>
              <h4>Date : {convertDateStringToDate(names.date)}</h4>
            </div>
            <div className="flex justify-between mx-auto text-lg text-gray-400 font-light">
              <h6>Status : {names.status} </h6>
              {/* <h4>Phone : 0964328926</h4> */}
              <h6 className="text-lg text-gray-400 font-light">
                Shipping Address : {names.shipping_address}
              </h6>
            </div>
            {/* <h6 className="text-lg text-gray-400 font-light">
              Location2 : Damascus{" "}
            </h6> */}
          </div>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <table className="table w-full">
              <thead className="">
                <tr className="text-sm font-semibold text-center border-b-2 border-skin-primary uppercase">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              {/* <tbody className="text-lg font-normal text-gray-700 text-center">
                { names.order_details.map((product) => {
                  return <tr
                  key={product. product_name}
                  className="even:bg-zinc-200 odd:bg-zinc-50 text-center "
                >
                  <td className="pb-5 pt-5">{names.store_name}</td>
                  <td className="pb-5 pt-5 flex justify-center">5</td>
                  <td className="pb-5 pt-5">7</td>
                  <td className="pb-5 pt-5">4000</td>
                </tr>
                })}
              </tbody> */}
            </table>

            <div className="w-full flex justify-center border-t-2 border-gray-300 pt-5">
              <div className="flex justify-start w-full ">
                <div className="w-[50%] px-4">
                  <h3 className="border-b-2 border-skin-primary">
                    Status : loreem
                  </h3>
                  <h3 className="border-b-2 border-skin-primary">
                    Delivery : loreem
                  </h3>
                </div>
                <div className="w-[50%] px-4">
                  <h3 className="border-b-2 border-skin-primary">
                    Total :loreem{" "}
                  </h3>
                  <h3 className="border-b-2 border-skin-primary">
                    Discount : loreem{" "}
                  </h3>
                  <h3 className="border-b-2 border-skin-primary">
                    Final : loreem
                  </h3>
                </div>
              </div>
            </div>
          </Stack>
        </DialogContent>

        <DialogActions className="grid md:grid-cols-2 grid-cols-1 ">
          <button
            type="button"
            className="bg-gray-500 text-white px-14 py-2"
            data-dismiss="modal"
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default OrderAdmin;
