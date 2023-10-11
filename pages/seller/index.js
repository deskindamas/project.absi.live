import React, { Fragment } from "react";
// import "../Component/css/style.css";
import { RiFilePaper2Line } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import image1 from '../../public/images/card1.jpg';
import image2 from '../../public/images/card2.jpg';
import image3 from '../../public/images/card3.jpg';
import withLayout from "@/components/wrapping components/WrappingSellerLayout";
import Image from "next/image";

const Home = () => {

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
    

  const products = [
    {  
      id :1 ,
      name: "lorem1",
      image: image1,
      price : '25',
    },
    {
      id : 2 ,
      name: "lorem2",
      image: image2,
      price : '35',
    },
    {
      id : 3 ,
      name: "lorem3",
      image: image3,
      price : '45',
    },
    {
      id : 4,
      name: "lorem3",
      image: image3,
      price : '45',
    },
  ];

  return (
    <Fragment>
       <div className="content ">
        <div className="home" style={{ marginLeft: "20px" }}>
          <div className="container p-4">
            <h4 style={{ marginBottom: "30px", fontSize: "30px" , color :"#ff6600"}}>
              Dashboard
            </h4>
             
             <div className='cards mr-6'>
               <div class="grid md:grid-cols-3 grid-col-1 gap-3">
             {icons.map((icons, index) => ( 
            <div className='card shadow p-9' text={"dark"} >
            <div className='card-body'>
              <div className="grid grid-cols-2 gap-2">
                <div className='pr-6'>
                  <div className='card-title pb-7 text-2xl text-neutral-800 h-20'>
                    {icons.title}{" "}
                  </div>
                  <div className='card-text pt-6 text-xl'>
                    {" "}
                    20 %
                  </div>
                </div>
                <div>
                  <Image src={icons.image} />
                </div>
              </div>
            </div>
            </div>
            ))}
          </div>
             </div>


            <div className="">
            <table className="table w-full mt-24">
                        <thead className="bg-slate-300 h-10">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price </th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody className='w-full items-center text-center'>
                        
                          {products.map((names,index)=>
                           <tr key={index}>
                               <td>{names.id}</td>
                              <td>{names.name}</td>
                              <td className = "w-16" ><Image src={names.image} className=''/></td>
                              {/* <td>{names.image}</td> */}
                              <td>{names.price}</td>
                              <td><button className='bg-slate-300 pl-5 pr-5 p-1 text-black rounded-sm'
                               onClick={(e)=>showDetail(names.id)} data-toggle="modal" data-target="#myModal">Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                    
            </div>

          </div>
        </div>
      </div> 

    </Fragment>
  );
};

// export default Home;
export default withLayout(Home) ;