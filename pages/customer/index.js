import TiltCard from "@/components/UI/TileCard";
import TawasyLoader from "@/components/UI/tawasyLoader";
import image from "../../public/images/supermarket.jpeg";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import StoreTypeComponent from "@/components/customerCommponents/StoreTypeComponent/StoreTypeComponent";
import Image from "next/image";
import { ResponsiveCarousel } from "@/components/CarouselCustomer/carousel";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";
// import Image from "next/image";
// import image from '../../public/images/146.png'

function CustomerPage() {
  // return (
   

    const cards=[
        {
            images : image,
            title : 'Restaurants',
        },
        {
            images : image,
            title : 'Restaurants',
        },
        {
            images : image,
            title : 'Restaurants',
        },
        {
            images : image,
            title : 'Restaurants',
        },    {
            images : image,
            title : 'Restaurants',
        },

        {
            images : image,
            title : 'Restaurants',
        },
    ]

    return <div className="w-full h-full" >
     <ResponsiveCarousel/>

     <div className=" relative w-[100%] h-max object-contain mx-auto">
    <div className="grid md:grid-cols-4 grid-col-2">
    {cards.map((card) => ( 
          <>  
          <div className="relative">
         <h2 className=" flex items-start justify-start absolute  md:text-4xl text-3xl font-mohave text-skin-primary ">
           {card.title}
         </h2>  
           <Image src={card.images} alt="image" className="" />
           </div>
         </>
     ))}
    </div>
    </div>

    </div>
  // );
}

export default withLayoutCustomer(CustomerPage) ;
