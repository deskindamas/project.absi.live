import Image from "next/image";
import React from "react";
// import Logo from '../../../public/images/tawasylogo.png';
import Logo from '../../public/images/tawasylogo.png';


function PrivacyPolicy () {
  
    return(
        <>
         <div className="flex justify-center py-6">
         <Image src={Logo} alt="Logo" width={500} height={290} className="mx-3" />
         </div>
        </>
    )
}

export default PrivacyPolicy;