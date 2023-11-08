import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  DialogActions,
} from "@mui/material";
import MdClose from "react-icons/md";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import TawasyLoader from "../UI/tawasyLoader";
import { Ring } from "@uiball/loaders";

export function convertMoney(money) {
  const total = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const finalTotal = `${total}`;
  return finalTotal;
}

export function convertDate(date) {
  const refined = new Date(date);
  const year = refined.getFullYear();
  const month = refined.getMonth() + 1;
  const day = refined.getDate();
  const finalDate = `${year}-${month}-${day}`;
  return finalDate;
}

function SellerOrders({ orders, refetch }) {
  const [open, openchange] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState();
  const Api = createAxiosInstance(router);
  const [rejecting, setRejecting] = useState(false);
  const [accepting, setAccepting] = useState(false);
  const reasonRef = useRef();

  async function fetchOrderDetails() {
    setIsLoading(true);
    try {
      const response = await Api.get(`/api/seller/order/${orders.order_id}`);
      console.log(response.data.order);
      setOrderDetails(response.data.order);
      setIsLoading(false);
    } catch (error) {}
  }

  const functionopenpopup = async () => {
    openchange(true);
    await fetchOrderDetails();
  };
  const closepopup = () => {
    openchange(false);
  };

  const declinedOrders = router.query.type == "rejectedOrders" ? true : false;

  async function acceptOrder() {
    setAccepting(true);
    try {
      const response = await Api.post(
        `/api/seller/accept-decline-order/${orders.order_id}`,
        {
          action: "accept",
        }
      );
      refetch();
      setAccepting(false);
      openchange(false);
    } catch (error) {
      console.log(error);
      setAccepting(false);
      openchange(false);
    }
    setAccepting(false);
    openchange(false);
  }

  async function rejectOrder() {
    setRejecting(true);
    try {
      const response = await Api.post(
        `/api/seller/accept-decline-order/${orders.order_id}`,
        {
          action: "decline",
          reason: reasonRef.current.value,
        }
      );
      refetch();
      setRejecting(false);
      openchange(false);
    } catch (error) {
      console.log(error);
      setRejecting(false);
      // openchange(false);
    }
    setRejecting(false);
    // openchange(false);
  }

  return (
    <>
      <tr
        key={orders.id}
        className="even:bg-zinc-200 odd:bg-zinc-50 text-center"
      >
        <td className="pb-5 md:px-0 px-2">{orders.order_id}</td>
        <td className="pb-5 md:px-0 px-2 ">{orders.status}</td>
        <td className="pb-5 md:px-0 px-2 ">{convertDate(orders.date)}</td>
        <td className="pb-5 md:px-0 px-2 ">
          {convertMoney(orders.final_price)}
        </td>
        <td
          className={`pb-5 ${
            orders.used_coupon == true ? `text-green-500` : `text-red-500`
          } `}
        >
          {orders.used_coupon == true ? `Yes` : `No`}
        </td>
        {declinedOrders === true && <td className="pb-5"> {orders.reason} </td>}
        <td className="pb-5 md:px-0 px-2 ">
          <button
            onClick={functionopenpopup}
            className="bg-transparent border-b-2 border-[#ff6600] "
          >
            Details
          </button>
        </td>
      </tr>

      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="lg">
        {isLoading !== true && orderDetails && (
          <DialogTitle className="md:flex  justify-between mx-auto border-b-2 border-skin-primary ">
            <h4>Store name: {orderDetails.store_name} </h4>
            <h4>Order Status: {orderDetails.status} </h4>
            <h6>Order Date: {convertDate(orderDetails.date)}</h6>
            <h6>Order Id: {orderDetails.order_id}</h6>
          </DialogTitle>
        )}
        <DialogContent className="md:mx-[24px] mx-[5px]" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
          {isLoading === true ? (
            <div className="w-full h-full">
              <TawasyLoader width={300} height={300} />
            </div>
          ) : (
            // <Stack>
            <div>
              <table className=" w-full">
                <thead className="bg-zinc-200 h-8">
                  <tr className="md:text-xl text-sm">
                    <th className="pb-2 pt-2">Prodcut name</th>
                    <th className="pb-2 pt-2">Quantity</th>
                    <th className="pb-2 pt-2">Price</th>
                    <th className="pb-2 pt-2">Total</th>
                  </tr>
                </thead>
                <tbody className="text-center md:text-xl text-sm">
                  {orderDetails?.order_details.map((product) => {
                    return (
                      <tr key={product.product_name} className="text-center">
                        <td className="pb-2 pt-2">{product.product_name}</td>
                        <td className="pb-2 pt-2">{product.quantity}</td>
                        <td className="pb-2 pt-2">{product.price}</td>
                        <td className="pb-2 pt-2">{product.line_total}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="flex flex-col justify-start items-start gap-3 md:text-xl text-base w-full ">
                <div className="w-full">
                  <p
                    className={`py-1 border-b-2 border-skin-primary flex justify-between items-center `}
                  >
                    Coupon :
                    <p
                      className={`${
                        orderDetails?.coupon == true
                          ? `text-green-500`
                          : `text-red-500`
                      } pr-5 `}
                    >
                      {orderDetails?.coupon == true ? `Yes` : `No`}
                    </p>
                  </p>
                  <p className="py-1 border-b-2 border-skin-primary flex justify-between items-center">
                    Total Quantity :
                    <p className="pr-5">{orderDetails?.total_quantity}</p>
                  </p>
                  <p className="py-1 border-b-2 border-skin-primary flex justify-between items-center">
                    Discount :<p className="pr-5">{orderDetails?.discount}</p>
                  </p>
                  <p className="py-1 border-b-2 border-skin-primary flex justify-between items-center">
                    Total Price :
                    <p className="pr-5">{orderDetails?.total_price}</p>
                  </p>
                  <p className="py-1 border-b-2 border-skin-primary flex justify-between items-center">
                    Delivery Fee :
                    <p className="pr-5">{orderDetails?.delivery_price}</p>
                  </p>
                  <p className="py-1 border-b-2 border-skin-primary flex justify-between items-center">
                    Final Price :
                    <p className="pr-5">{orderDetails?.final_price}</p>
                  </p>
                </div>
              </div>
            </div>
            // {/* </Stack> */}
          )}
        </DialogContent>
        {isLoading !== true &&
          orderDetails &&
          orderDetails.status === `pending` && (
            <DialogActions>
              <div className="flex md:flex-row flex-col md:justify-end md:items-center gap-2 ">
                <div className="md:flex justify-start items-center gap-3 w-fit ">
                  <label className="pt-1 md:text-lg text-base " for="freeform ">
                    Reason of Rejection :
                  </label>
                  <textarea
                    id="freeform"
                    name="freeform"
                    rows="2"
                    ref={reasonRef}
                    placeholder="Reason"
                    className="w-max shadow h-[50px] p-3 outline-none focus:outline-skin-primary transition-all duration-700 rounded-lg "
                  ></textarea>
                </div>
                <button
                  className="bg-red-700 px-8 py-3 hover:bg-red-600 text-white md:w-[25%] rounded-lg "
                  data-dismiss="modal"
                  onClick={rejectOrder}
                >
                  {rejecting == true ? (
                    <div className="flex justify-center items-center">
                      <Ring size={25} lineWeight={5} speed={2} color="white" />
                    </div>
                  ) : (
                    "Reject"
                  )}
                </button>
                <button
                  type="button"
                  onClick={acceptOrder}
                  className="bg-lime-950 px-8 hover:bg-lime-800 py-3 text-white md:w-[25%] rounded-lg"
                  data-dismiss="modal"
                >
                  {accepting == true ? (
                    <div className="flex justify-center items-center">
                      <Ring size={25} lineWeight={5} speed={2} color="white" />
                    </div>
                  ) : (
                    "Accept"
                  )}
                </button>
              </div>
            </DialogActions>
          )}
      </Dialog>
    </>
  );
}
export default SellerOrders;
