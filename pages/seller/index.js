import React, { Fragment, useEffect } from "react";
import { RiFilePaper2Line } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
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
    staleTime: 300000,
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
            {/* // Statistics cards  */}
            <div className="flex flex-wrap ">
              {/* {dashboardData &&
              Object.entries(dashboardData.data).map(([key, value]) => (
                <DashboardCard key={key} name={key} value={value} />
              ))} */}
              <DashboardCard
                key={dashboardData.data.totalAvailableProducts}
                name={`Total Available Products`}
                value={dashboardData.data.totalAvailableProducts}
                color = {`bg-emerald-600`}
              />
              <DashboardCard
                key={dashboardData.data.totalOrders}
                name={`Total Orders`}
                value={dashboardData.data.totalOrders}
                color = {`bg-sky-400`}
              />
              <DashboardCard
                key={dashboardData.data.totalPendingOrders}
                name={`Total Pending Orders`}
                color = {`bg-yellow-400`}
                value={dashboardData.data.totalPendingOrders}
              />
              <DashboardCard
                key={dashboardData.data.totalProducts}
                name={`Total Products`}
                color = {`bg-teal-500`}
                value={dashboardData.data.totalProducts}
              />
              <DashboardCard
                key={dashboardData.data.totalSales}
                name={`Total Sales`}
                color = {`bg-green-500`}
                value={dashboardData.data.totalSales}
              />
              <DashboardCard
                key={dashboardData.data.totalUnavailableProducts}
                name={`Total Unavailable Products`}
                color = {`bg-red-800`}
                value={dashboardData.data.totalUnavailableProducts}
              />
            </div>
          </div>}
        </div>
      </div>
    </Fragment>
  );
};

// export default Home;
export default withLayout(Home);
