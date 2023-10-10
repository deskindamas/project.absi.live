import React from 'react';
// import Layout from './Layout';
// import Sidebar from '../sidebars/Sidebar';
// import Sidebar from '../SideBars/SellerSideBar';
import Sidebar from '../sidebars/SellerSideBar';

const withLayout = (WrappedComponent) => {
  return (props) => (
    <div className = ' w-screen h-screen' >
    <div className =  ' w-[80%] h-full' >

     <WrappedComponent {...props}  />
    </div>
    <div>
    <Sidebar/>
    </div>
      </div>
  );
};

export default withLayout;