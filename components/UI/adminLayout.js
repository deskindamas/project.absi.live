import Sidebar from '../../components/SidebarAdmin/sidebar';

const withLayoutAdmin = (WrappedComponent) => {
  return (props) => (
    <div  >
    <div className =  ' w-[80%] h-full' >
     <WrappedComponent {...props}  />
    </div>
    <div>
    <Sidebar/>
    </div>
      </div>
  );
};

export default withLayoutAdmin;