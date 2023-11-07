import React from 'react';
import Sidebar from '../sidebars/SellerSideBar';

const withLayout = (WrappedComponent) => {
  const WithLayout = (props) => (
    <div className='w-full h-screen'>
      <Sidebar />
      <div className='w-[80%] h-full'>
        <WrappedComponent {...props} />
      </div>
    </div>
  );

  // Set display name
  WithLayout.displayName = `withLayout(${getDisplayName(WrappedComponent)})`;

  return WithLayout;
};

// Helper function to get the display name of a component
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withLayout;
