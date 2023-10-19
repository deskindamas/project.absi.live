import TiltCard from "@/components/UI/TileCard";
import TawasyLoader from "@/components/UI/tawasyLoader";
import image from "../../public/images/supermarket.jpeg";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import StoreTypeComponent from "@/components/customerCommponents/StoreTypeComponent/StoreTypeComponent";
import Image from "next/image";
import { ResponsiveCarousel } from "@/components/CarouselCustomer/carousel";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";

function CustomerPage() {
  // return (
   

    return <div className="w-full h-full" >
     <ResponsiveCarousel/>
    </div>
  // );
}

export default withLayoutCustomer(CustomerPage) ;
