import Footer from "../FooterCustomer/Footer";
import Navbar from "../NavbarCustomer/navbar";

function CustomerLayout(props) {
  return (
    <div className="w-screen h-screen flex flex-col justify-between shrink-0 ">
      <Navbar />
      <div className="pt-[3.5%]">{props.children}</div>
      <div className="bottom-0" >
        <Footer />
      </div>
    </div>
  );
}

export default CustomerLayout;
