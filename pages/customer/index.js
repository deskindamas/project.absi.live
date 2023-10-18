import TiltCard from "@/components/UI/TileCard";
import TawasyLoader from "@/components/UI/tawasyLoader";
import image from "../../public/images/supermarket.jpeg";
import StoreComponent from "@/components/customerCommponents/StoreComponent";
import StoreTypeComponent from "@/components/customerCommponents/StoreTypeComponent/StoreTypeComponent";
import Image from "next/image";

function CustomerPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      {/* <div className="w-full h-[40%]">Store Type</div> */}
      {/* <div className="w-[80%] h-[60%] flex flex-wrap gap-6  " > */}
      <div className="md:w-[55%] w-[80%] h-[60%] grid grid-cols md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-8 mx-auto ">
        <StoreComponent/>
            <StoreComponent/>
            <StoreComponent/>
            <StoreComponent/>
        {/* <StoreTypeComponent/>
            <StoreTypeComponent/>
            <StoreTypeComponent/>
            <StoreTypeComponent/> */}
        {/* <div className=" relative w-[100%] h-max object-contain mx-auto">
          <Image src={image} alt="image" className="" />
          <div className="absolute top-32 left-2 text-5xl font-mohave text-skin-primary ">
            Super Market
          </div>
        </div> */}

        

      </div>
    </div>
  );
}

export default CustomerPage;
