import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import React, { useEffect, useState } from "react";
import styles from "../../../components/componentsStyling/sellerStyles.module.css";
import SellerOrders from "@/components/SellerOrders/sellerOrder";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useQuery } from "react-query";
import TawasyLoader from "@/components/UI/tawasyLoader";

const Orders = () => {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [ordersType, setOrdersType] = useState();
  const {
    data: orders,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching ,
  } = useQuery([`orders`, ordersType, router.query.type], fetchOrders, {
    staleTime: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: true,
  });

  async function fetchOrders() {
    console.log(`fetching`);
    switch (ordersType) {
      case "pendingOrders":
        const pending = await Api.get(`/api/seller/pending-orders`);
        if (pending.data.pendingOrders) {
          return pending.data.pendingOrders;
        } else {
          return [];
        }
      case "rejectedOrders":
        const rejected = await Api.get(`/api/seller/declined-orders`);
        if (rejected.data.declinedOrders) {
          return rejected.data.declinedOrders;
        } else {
          return [];
        }
      case "acceptedOrders":
        const accepted = await Api.get(`/api/seller/accepted-orders`);
        if (accepted.data.acceptedOrders) {
          return accepted.data.acceptedOrders;
        } else {
          return [];
        }
      case "allOrders":
        const all = await Api.get(`/api/seller/orders`);
        console.log(`all orders`);
        console.log(all.data.orders);
        if (all.data.orders) {
          return all.data.orders;
        } else {
          return [];
        }
      case undefined:
        const allo = await Api.get(`/api/seller/orders`);
        console.log(`all orders undefined`);
        console.log(allo.data.orders);
        if (allo.data.orders) {
          return allo.data.orders;
        } else {
          return [];
        }
    }
  }

  useEffect(() => {
    let vars = router.query.type;
    if (vars) {
      // setProductsType(vars);
      setOrdersType(vars);
    }

    // setLoaded(true);
  }, [router.query.type]);

  let title;

  if (ordersType) {
    switch (ordersType) {
      case "pendingOrders":
        title = "Pending Orders";
        break;
      case "rejectedOrders":
        title = "Rejected Orders";
        break;
      case "acceptedOrders":
        title = "Accepted Orders";
        break;
      case "allOrders":
        title = "All Orders";
        break;
    }
  } else {
    title = "All Orders";
  }

  if (orders) {
    console.log(`final orders`);
    console.log(orders);
  }

  return (
    <div className="page-orders">
      <div className="container">
        <div className="m-5 p-5">
          <h2 className="text-2xl text-stone-500 border-b-2 border-skin-primary pb-5 ">
            {title}
          </h2>
        </div>

        <div className="w-full ">
          {isLoading || isRefetching ? (
            <div className="w-full h-full">
              <TawasyLoader width={200} height={200} />
            </div>
          ) : (
            orders &&
            Array.isArray(orders) &&
            orders.length > 0 ? (
              <table className="table w-full ">
                <thead className="bg-zinc-200 h-8 ">
                  <tr className="border-b-[#ff6600]">
                    <th>Id</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Total </th>
                    <th>Coupon</th>
                    {ordersType && ordersType == `rejectedOrders` && (
                      <th>Reason of rejection</th>
                    )}
                    <th>Show Details</th>
                  </tr>
                </thead>
                <tbody className="text-xl">
                  {orders.map((names, index) => (
                    <SellerOrders
                      key={names.order_id}
                      orders={names}
                      refetch={() => {
                        refetch();
                      }}
                    />
                  ))}
                </tbody>
              </table>
            ) : <p className="w-full text-center" >You have no orders in this Category</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Orders);
