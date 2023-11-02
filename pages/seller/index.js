import React, { Fragment, useEffect } from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { BsBox, BsFillCartCheckFill } from "react-icons/bs";
import image1 from "../../public/images/card1.jpg";
import image2 from "../../public/images/card2.jpg";
import image3 from "../../public/images/card3.jpg";
import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import createAxiosInstance from "@/API";
import { useState } from "react";
import TawasyLoader from "@/components/UI/tawasyLoader";
import { useQuery } from "react-query";
import { Card } from "@mui/material";
import DashboardCard from "@/components/UI/dashboardCard";
import { MdOutlinePendingActions, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";

const Home = () => {
  const router = useRouter();
  const Api = createAxiosInstance(router);
  const [isLoading, setIsLoading] = useState(true);
  const {
    data: dashboardData,
    isLoading: dataLoading,
    isError,
    error,
  } = useQuery(`dashboard`, fetchDashboard, {
    staleTime: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  async function fetchDashboard() {
    try {
      return await Api.get(`/api/seller/dashboard`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function initialStoreStatus() {
      try {
        const response2 = await Api.get(`/api/seller/store/status`);
        console.log(response2);
        switch (response2.data.status) {
          case "Store not found":
            router.replace("/seller/requestStore");
            break;

          case "approved":
            console.log(`approved store`);
            localStorage.setItem("Sid", response2.data.store_id);
            router.replace(`/seller`);
            break;

          case "pending":
            localStorage.setItem("Sid", response2.data.store_id);
            router.replace(`/seller/pendingStore`);
            break;
          // default :
          // console.log(`default in switch seller status /seller`);
          // break;
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    initialStoreStatus();
  }, []);

  if (dashboardData) {
    console.log(`dashboard data`);
    console.log(dashboardData);
  }

  if (isLoading == true || dataLoading == true) {
    return (
      <div className="w-full h-full">
        <TawasyLoader />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="content ">
        <div className="home" style={{ marginLeft: "20px" }}>
          { dashboardData && <div className="flex flex-col justify-start gap-3 p-4 mt-5 ">
            <h4
              style={{
                marginBottom: "30px",
                fontSize: "30px",
                color: "#ff6600",
              }}
            >
              Main Dashboard
            </h4>

            <div className="md:flex md:flex-wrap  md:gap-x-10 gap-x-0 md:gap-y-5 gap-y-4 w-[95%]">
              <div className="flex justify-between border-2 border-gray-400 md:w-[45%] w-[100%] px-4 py-4">
              <div className="w-[80%]">
              <h1 className="text-2xl font-medium text-gray-800 pb-4">Total Available Products</h1>
              <p className="text-xl text-skin-primary"> {dashboardData.data.totalAvailableProducts} </p>
              </div>
             <div className="w-[20%] flex justify-center items-center">
              <BsBox className="w-[30px] h-[30px] text-skin-primary" />
              </div>
              </div>
              
              <div className="flex justify-between border-2 border-gray-400 md:w-[45%] w-[100%] px-4 py-4">
              <div className="w-[80%]">
              <h1 className="text-2xl font-medium text-gray-800 pb-4">Total Orders</h1>
              <p className="text-xl text-skin-primary"> {dashboardData.data.totalOrders}</p>
              </div>
             <div className="w-[20%] flex justify-center items-center">
              <BsFillCartCheckFill className="w-[30px] h-[30px] text-skin-primary" />
              </div>
              </div>

              <div className="flex justify-between border-2 border-gray-400 md:w-[45%] w-[100%] px-4 py-4">
              <div className="w-[80%]">
              <h1 className="text-2xl font-medium text-gray-800 pb-4">Total Pending Orders</h1>
              <p className="text-xl text-skin-primary"> {dashboardData.data.totalPendingOrders}</p>
              </div>
             <div className="w-[20%] flex justify-center items-center">
              <MdOutlinePendingActions className="w-[30px] h-[30px] text-skin-primary" />
              </div>
              </div>

              <div className="flex justify-between border-2 border-gray-400 md:w-[45%] w-[100%] px-4 py-4">
              <div className="w-[80%]">
              <h1 className="text-2xl font-medium text-gray-800 pb-4">Total Products</h1>
              <p className="text-xl text-skin-primary"> {dashboardData.data.totalProducts}</p>
              </div>
             <div className="w-[20%] flex justify-center items-center">
              <MdOutlineProductionQuantityLimits className="w-[30px] h-[30px] text-skin-primary" />
              </div>
              </div>

              <div className="flex justify-between border-2 border-gray-400 md:w-[45%] w-[100%] px-4 py-4">
              <div className="w-[80%]">
              <h1 className="text-2xl font-medium text-gray-800 pb-4">Total Sales</h1>
              <p className="text-xl text-skin-primary"> {dashboardData.data.totalSales}</p>
              </div>
             <div className="w-[20%] flex justify-center items-center">
              <FcSalesPerformance className="w-[30px] h-[30px] text-skin-primary" />
              </div>
              </div>

              
              <div className="flex justify-between border-2 border-gray-400 md:w-[45%] w-[100%] px-4 py-4">
              <div className="w-[80%]">
              <h1 className="text-2xl font-medium text-gray-800 pb-4">Total Unavailable Products</h1>
              <p className="text-xl text-skin-primary"> {dashboardData.data.totalUnavailableProducts}</p>
              </div>
             <div className="w-[20%] flex justify-center items-center">
              <CgUnavailable className="w-[30px] h-[30px] text-skin-primary" />
              </div>
              </div>

            </div>
          </div>}
        </div>
      </div>
    </Fragment>
  );
};

// export default Home;
export default withLayout(Home);
