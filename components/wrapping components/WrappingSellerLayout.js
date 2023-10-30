import React from 'react';
import Sidebar from '../sidebars/SellerSideBar';
// import Layout from './Layout';
// import Sidebar from '../sidebars/Sidebar';
// import Sidebar from '../SideBars/SellerSideBar';
// import Sidebar from '../../components/SideBars/SellerSideBar';

const withLayout = (WrappedComponent) => {
  return (props) => (
    <div className = 'w-full h-screen' >
    <Sidebar />
    <div className =  ' w-[80%] h-full' >
     <WrappedComponent {...props}  />
    </div>
      </div>
  );
};

export default withLayout;