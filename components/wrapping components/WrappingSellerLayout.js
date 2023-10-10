import React from 'react';
// import Layout from './Layout';
import Sidebar from '../sidebars/Sidebar';

const withLayout = (WrappedComponent) => {
  return (props) => (
    <Sidebar>
      <WrappedComponent {...props} />
    </Sidebar>
  );
};

export default withLayout;