import Footer from "../FooterCustomer/Footer";
import Navbar from "../NavbarCustomer/navbar";

function CustomerLayout(props) {
  return (
    <div >
      <Navbar/>
      <div className="pt-[60px] mx-auto" >{props.children}</div>
      <Footer />
    </div>
  );
}

export default CustomerLayout;
