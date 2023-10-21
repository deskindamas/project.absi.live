import Footer from "../FooterCustomer/Footer";
import Navbar from "../NavbarCustomer/navbar";

function CustomerLayout(props) {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="pt-[3.5%]" >{props.children}</div>
      <Footer />
    </div>
  );
}

export default CustomerLayout;
