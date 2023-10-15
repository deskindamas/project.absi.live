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
            localStorage.setItem("Sid", data.data.store_id);
            router.replace(`/seller/pendingStore`);
            break;
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    initialStoreStatus();
  }, []);

  // const icons = [
  //   {
  //     title: "Total Orders",
  //     image: image1,
  //     icon: (
  //       <RiFilePaper2Line
  //         style={{ width: "25px", height: "25px", color: "#ff6600" }}
  //       />
  //     ),
  //   },
  //   {
  //     title: "Total Sales",
  //     image: image2,
  //     icon: (
  //       <BsCurrencyDollar
  //         style={{ width: "25px", height: "25px", color: "#ff6600" }}
  //       />
  //     ),
  //   },
  //   {
  //     title: "Total Products",
  //     image: image3,
  //     icon: (
  //       <BsBox style={{ width: "25px", height: "25px", color: "#ff6600" }} />
  //     ),
  //   },
  // ];

  // const products = [
  //   {
  //     id: 1,
  //     name: "lorem1",
  //     image: image1,
  //     price: "25",
  //   },
  //   {
  //     id: 2,
  //     name: "lorem2",
  //     image: image2,
  //     price: "35",
  //   },
  //   {
  //     id: 3,
  //     name: "lorem3",
  //     image: image3,
  //     price: "45",
  //   },
  //   {
  //     id: 4,
  //     name: "lorem3",
  //     image: image3,
  //     price: "45",
  //   },
  // ];

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
          <div className="flex flex-col justify-start gap-3 p-4 mt-5 ">
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
            <div className="flex flex-wrap" >
            {dashboardData &&
              Object.entries(dashboardData.data).map(([key, value]) => (
                <DashboardCard key={key} name={key} value={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// export default Home;
export default withLayout(Home);
