import { ResponsiveCarousel } from "@/components/CarouselCustomer/carousel";
import withLayoutCustomer from "@/components/wrapping components/WrappingCustomerLayout";

function CustomerPage (){

    return <div className="w-full h-full" >
     <ResponsiveCarousel/>
    </div>

}

export default withLayoutCustomer(CustomerPage) ;