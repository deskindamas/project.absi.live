import Link from "next/link";
import image from "../../../public/images/storetype.png";
import Image from "next/image";
import { useRouter } from "next/router";
// import image from "../../../public/images/flowers.jpeg";

function StoreTypeComponent({ storeType }) {
  const router = useRouter();
  return (
    <Link href={`/customer/StoreType/${storeType.id}`}  className="relative" dir="ltr" >
      <h2 className = {` absolute w-[50%] text-center flex items-center px-3 justify-center  z-10 lg:text-[120%] md:text-[100%] sm:text-[80%]  text-[100%] text-skin-primary h-full `} dir={router.locale == 'ar' ? 'rtl' : "ltr"} >
        {storeType.name}
        {/* مطاعم و ماكولات و مشروبات */}
        {/* Restaurants , foods and drinks */}
      </h2>
      <Image
        src={storeType.image}
        // src="https://himenobaraen.jp/wp-content/uploads/rosa_chinensis.jpg"
        alt = {`image`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
    </Link>
  );
}

export default StoreTypeComponent;
