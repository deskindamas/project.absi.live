import Link from "next/link";
import image from "../../../public/images/storetype.png";
import Image from "next/image";
// import image from "../../../public/images/flowers.jpeg";

function StoreTypeComponent({ photo, text }) {
  return (
    <Link href={"#"}  className="relative">
      <Image
        src={image}
        // src="https://himenobaraen.jp/wp-content/uploads/rosa_chinensis.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
      <h2 className=" absolute inset-0 flex items-center pl-2 justify-start  z-10 lg:text-[200%] md:text-[100%] text-[175%] font-mohave text-skin-primary h-full ">
        Restaurant
      </h2>
    </Link>
  );
}

export default StoreTypeComponent;
