import React, { Fragment, useEffect } from "react";
import { RiFilePaper2Line } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import image1 from '../../public/images/card1.jpg';
import image2 from '../../public/images/card2.jpg';
import image3 from '../../public/images/card3.jpg';
import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import Image from "next/image";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  // useEffect(() => {
  //   const registered = localStorage.getItem(registered);
  //   if(registered === true ){
  //     router.push('/seller/requestStore') ;
  //   }else if(registered === false){
  //     router
  //   }
  // } , []);

  const icons = [
    {
      title: "Total Orders",
      image: image1,
      icon: (
        <RiFilePaper2Line
          style={{ width: "25px", height: "25px", color: "#ff6600" }}
        />
      ),
    },
    {
      title: "Total Sales",
      image: image2,
      icon: (
        <BsCurrencyDollar
          style={{ width: "25px", height: "25px", color: "#ff6600" }}
        />
      ),
    },
    {
      title: "Total Products",
      image: image3,
      icon: (
        <BsBox style={{ width: "25px", height: "25px", color: "#ff6600" }} />
      ),
    },
  ];

  return (
    <Fragment>
       <div className="content ">
        <div className="home" style={{ marginLeft: "20px" }}>
          <div className="container p-4">
            <h4 style={{ marginBottom: "30px", fontSize: "30px" }}>
              Dashboard
            </h4>
             
             <div className='cards mr-6'>
               <div class="grid grid-cols-4 gap-4">
             {icons.map((icons, index) => ( 
            <div className='card' text={"dark"} >
            <div className='card-body'>
              <div className="row">
                <div className="col-md-7">
                  <div className='card-title'
                    style={{
                      fontWeight: "500",
                      color: "rgba(58, 71, 84, 1)",
                    }}
                  >
                    {icons.title}{" "}
                  </div>
                  <div className='card-text'
                    style={{
                      marginLeft: "5px",
                      fontSize: "18px",
                      marginTop: "30px",
                      color: "#ff6600",
                    }}
                  >
                    {" "}
                    20 %
                  </div>
                </div>
                <div className="col-md-5">
                  {/* <img
                    src={icons.image}
                    style={{ width: "100px", height: "100px" }}
                  /> */}
                  <Image src={icons.image} />
                </div>
              </div>
            </div>
            </div>
            ))}
          </div>
             </div>


            {/* <div className="">
              <table className="table table-striped table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Price </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div> 

    </Fragment>
  );
};

// export default Home;
export default withLayout(Home) ;