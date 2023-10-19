import image from "../../../public/images/supermarket.jpeg";
import Image from "next/image";
// import image from "../../../public/images/flowers.jpeg";

function StoreTypeComponent() {
  console.log(image);

  return (
    <div className=" relative w-[100%] h-max object-contain mx-auto">
      <Image src={image} alt="image" className="" />
      <div className="absolute md:top-28 md:left-2 md:text-5xl top-16 left-1 text-3xl font-mohave text-skin-primary ">
        Super Market
      </div>
    </div>
  );
}

export default StoreTypeComponent;
