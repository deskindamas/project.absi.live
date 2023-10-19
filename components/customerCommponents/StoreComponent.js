import Image from "next/image";
import lego from "../../public/images/lego.png";
import image from "../../public/images/burger.jpeg";

function StoreComponent() {
  return (
    <div className="md:w-[500px] w-full md:h-[200px] h-[125px] cursor-pointer bg-white shadow-xl flex justify-start items-center gap-4 rounded-lg overflow-hidden pr-2 border-2 border-gray-200 hover:scale-105 transition-all duration-500 ">
      <Image
        src={image}
        alt={lego}
        className={`md:w-[200px] w-[30%] h-[200px] object-cover select-none pointer-events-none `}
        loading="lazy"
      />
      <div className="w-[60%] flex flex-col justify-center items-start box-border h-full px-2 ">
        {/* <div className="h-[50%] overflow-hidden flex justify-start items-end " > */}
          <div className=" line-clamp-2 text-start md:text-xl text-lg w-full text-ellipsis select-none " title="asdghjkasdhgdhghjgksdfahgafsdghjasdfggjhaksdfhgfad" >
            asdsad sd asd asdasdas asd as da sdas d asd as dsjhasdhjkgasjhkdg asjdhgasjkhdgasd
          </div>
        {/* </div> */}
        <h5 className="md:line-clamp-2 line-clamp-1 w-full text-gray-500 text-base font-medium m-0 select-none " >
          fasdhjgfsdahgfsdhjgfasdhjkgasfdhjg asd asd asd asd asd asd asd asd asd asd 
        </h5>
          {/* <div className="flex justify-start items-start w-full gap-2">
            <div className="md:text-xl text-md">Delivery Fee :</div>
            <div className="md:text-xl text-md text-skin-primary ">
              6000 S.P
            </div>{" "}
            Delivery Fee
          </div>
          <div className="flex justify-start items-start w-full gap-2 ">
            <div className="md:text-xl text-md ">Delivery Time :</div>
            <div className="md:text-xl text-md text-skin-primary ">
              ~30 mins
            </div>{" "}
            Delivery Time
          </div> */} 
      </div>
    </div>
  );
}

export default StoreComponent;
