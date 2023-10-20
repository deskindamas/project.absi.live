import Image from "next/image";

function test() {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className=" w-[70%] h-[60%] grid grid-cols md:grid-cols-4 sm:grid-cols-3  grid-cols-1 gap-y-6 gap-x-6 ">
        <div className="relative">
          <Image
            src={`https://himenobaraen.jp/wp-content/uploads/rosa_chinensis.jpg`}
            alt="image"
            unoptimized={true}
            fill={true}
            className="object-cover w-min h-min"
          />
        </div>
        <div className="relative">
          <Image
            src={`https://himenobaraen.jp/wp-content/uploads/rosa_chinensis.jpg`}
            alt="image"
            unoptimized={true}
            fill={true}
            className="object-cover w-min h-min"
          />
        </div>
        <div className="relative">
          <Image
            src={`https://himenobaraen.jp/wp-content/uploads/rosa_chinensis.jpg`}
            alt="image"
            unoptimized={true}
            fill={true}
            className="object-cover w-min h-min"
          />
          <div className="absolute text-black text-3xl">asdasd</div>
        </div>
        <div className="relative">
          <Image
            src={`https://himenobaraen.jp/wp-content/uploads/rosa_chinensis.jpg`}
            alt="image"
            unoptimized={true}
            fill={true}
            className="object-cover w-min h-min"
          />
        </div>
      </div>
    </div>
  );
}

export default test;
