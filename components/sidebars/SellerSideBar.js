import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/images/tawasylogowhite.png";
import ProfileLogo from "../../public/images/profile-removebg-preview.png";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  AiOutlineCloseCircle,
  AiOutlineCarryOut,
  AiTwotoneEye,
} from "react-icons/ai";
import { FiChevronDown, FiChevronRight, FiSettings } from "react-icons/fi";
import { BsCartCheckFill, BsBox, BsColumns } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { MdPendingActions, MdOutlineDisabledVisible } from "react-icons/md";
import { useRouter } from "next/router";

export default function Sidebar(props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function logOut() {
    localStorage.removeItem("AT");
    localStorage.removeItem("user");
    router.replace("/login");
  }

  return (
    <div className="w-full h-full ">
      <div
        style={{ position: "fixed", overflow: "auto" }}
        className={`top-0 bottom-0 right-0 w-[20%]  bg-[#ff6600] shadow duration-300 pl-2`}
      >
        <div className="space-y-3">
          <div className=" px-14 items-center">
            <Image src={Logo} className="pt-6 pb-3 md:w-44 w-10" />
          </div>
          {/* <Image src={Logo} className="px-0 w-10 sm:block"/> */}
          <div className="pl-20 items-center">
            <Image
              src={ProfileLogo}
              style={{ marginBottom: "10px" }}
              alt="Logo"
              width={120}
              height={75}
            />
          </div>
          <div className="flex-1">
            <ul className="pt-5 pb-4 space-y-1 text-lg font-normal">
              <li className="rounded-sm pb-3">
                <Link
                  href="/seller"
                  className="flex items-center pl-2 space-x-3 rounded-md text-gray-100"
                >
                  <BsColumns className="block text-[20px] text-white " />
                  <p className="hidden md:block" style={{ marginLeft: "43px" }}>
                    Dashboard
                  </p>
                </Link>
              </li>

              <Accordion showDivider={false} className="w-full">
                <AccordionItem
                  startContent={
                    <BsCartCheckFill
                      style={{
                        marginRight: "30px",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  }
                  className={`text-zinc-100 outline-none mb-1 mt-2 w-full text-lg text-left `}
                  key="1"
                  title="Orders"
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <FiChevronDown className={`stroke-orange-50`} />
                    ) : (
                      <FiChevronRight />
                    )
                  }
                >
                  <ul>
                    <li className={`pt-3`}>
                      <button
                        className="flex items-center p-2 space-x-3 rounded-md text-gray-100"
                        onClick={() => {}}
                      >
                        <MdPendingActions className="block text-[20px] text-white " />
                        <p className="hidden md:block"> Pending Orders</p>
                      </button>
                    </li>

                    <li className={`pt-3`}>
                      <Link
                        className="flex items-center p-2 space-x-3 rounded-md text-gray-100"
                        href="/"
                      >
                        <AiOutlineCloseCircle className="block text-[20px] text-white " />
                        <p className="hidden md:block">Rejected Orders</p>
                      </Link>
                    </li>
                    <li className={`pt-3`}>
                      <Link
                        className="flex items-center p-2 space-x-3 rounded-md text-gray-100"
                        href="/"
                      >
                        <AiOutlineCarryOut className="block text-[20px] text-white " />
                        <p className="hidden md:block">Accepted Orders</p>
                      </Link>
                    </li>
                    <li className={`pt-3`}>
                      <Link
                        className="flex items-center p-2 space-x-3 rounded-md text-gray-100"
                        href="/"
                      >
                        <BsBox className="block text-[20px] text-white " />
                        <p className="hidden md:block">All Orders</p>
                      </Link>
                    </li>
                  </ul>
                </AccordionItem>

                <AccordionItem
                  startContent={
                    <BsBox
                      style={{
                        marginRight: "30px",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  }
                  className={`text-zinc-100 outline-none mb-4`}
                  key="2"
                  aria-label="Products"
                  title="Products"
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <FiChevronDown className={`text-zinc-100`} />
                    ) : (
                      <FiChevronRight className={`text-zinc-100`} />
                    )
                  }
                >
                  <ul>
                    <li className={`pt-3`}>
                      <button
                        className="flex items-center p-2 space-x-3 rounded-md text-gray-100"
                        onClick={() => {
                          router.push({
                            pathname: "/seller/products",
                            query: { type : `pendingProducts`},
                          });
                        }}
                      >
                        <MdPendingActions className="block text-[20px] text-white " />
                        <p className="hidden md:block"> Pending Products</p>
                      </button>
                    </li>
                    <li className={`pt-3`}>
                      <button
                        className="flex items-center p-2 space-x-3 rounded-md text-gray-100"
                        onClick={() => {
                          router.push({
                            pathname: "/seller/products",
                            query: { type : "disabledProducts"},
                          });
                        }}
                      >
                        <MdOutlineDisabledVisible className="block text-[20px] text-white " />
                        <p className="hidden md:block">Disabled Products</p>
                      </button>
                    </li>
                    <li className={`pt-3`}>
                      <button
                        className="flex items-center p-2 space-x-3 rounded-md text-gray-100"
                        onClick={() => {
                          router.push({
                            pathname: "/seller/products",
                            query: { type :"activeProducts"},
                          });
                        }}
                      >
                        <AiTwotoneEye className="block text-[20px] text-white " />
                        <p className="hidden md:block">Active Products</p>
                      </button>
                    </li>
                    <li className={`pt-3`}>
                      <button
                        className="flex items-center p-2 space-x-3 rounded-md text-gray-100"
                        onClick={() => {
                          router.push({
                            pathname: "/seller/products",
                            query: { type : "allProducts"},
                          });
                        }}
                      >
                        <BsBox className="block text-[20px] text-white " />
                        <p className="hidden md:block">All Products</p>
                      </button>
                    </li>
                  </ul>
                </AccordionItem>
              </Accordion>

              <li className="rounded-sm pb-3">
                <Link
                  href="/"
                  className="flex items-center pl-2 space-x-3 pt-2 rounded-md text-gray-100"
                >
                  <FiSettings className="block text-[20px] text-white " />
                  <p className="hidden md:block" style={{ marginLeft: "43px" }}>
                    Settings
                  </p>
                </Link>
              </li>
              <li className="rounded-sm pb-3">
                <button
                  className="flex items-center pl-2 pt-3 space-x-3 rounded-md text-gray-100"
                  onClick={logOut}
                >
                  <CiLogout className="block text-[20px] text-white" />
                  <p className="hidden md:block" style={{ marginLeft: "43px" }}>
                    Logout
                  </p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* {props.children} */}
    </div>
  );
}
