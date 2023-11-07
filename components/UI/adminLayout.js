import React from 'react';
import Sidebar from '../../components/SidebarAdmin/sidebar';

const withLayoutAdmin = (WrappedComponent) => {
  const WithLayoutAdmin = (props) => (
    <div>
      <div className='w-[80%] h-full'>
        <WrappedComponent {...props} />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );

  // Provide a display name for the HOC
  WithLayoutAdmin.displayName = `withLayoutAdmin(${getDisplayName(WrappedComponent)})`;

  return WithLayoutAdmin;
};

// Helper function to get the display name of a component
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withLayoutAdmin;
