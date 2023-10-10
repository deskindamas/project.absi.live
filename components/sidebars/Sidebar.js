import React, { Fragment } from 'react';
// import Logo from '../Component/images/tawasylogowhite.png';
import Logo from '../../public/images/tawasylogowhite.png'
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import '../Component/css/style.css'; 
import { BsCartCheckFill } from 'react-icons/bs';
import { BsBox } from 'react-icons/bs';
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { AiOutlineSetting } from 'react-icons/ai';
import { MdPendingActions ,MdOutlineDisabledVisible ,MdOutlineAddShoppingCart} from 'react-icons/md';
import { AiOutlineCloseCircle ,AiOutlineCarryOut ,AiTwotoneEye} from 'react-icons/ai';
import { IoBagAdd} from 'react-icons/io5';
import { RiLogoutBoxRLine} from 'react-icons/ri';
import Profile from '../../public/images/profile-removebg-preview.png';
// import '../../styles/'
// import '@/styles/globals.css'

// import styles from '../componentsStyling/style.module.css';
// import Profile from '../Component/images/profile-removebg-preview.png';

const Sidebar = () => {


  return <Fragment>
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar className={styles.sidebar-website} textColor="#fff" backgroundColor="#ff6600">
        <CDBSidebarHeader>
          <a href="/" className="" style={{ color: 'inherit' }}>
          <img src={Logo} style={{marginLeft:"40px"}} alt="Logo" width={130} height={70} />
          </a>

        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
        <img src={Profile} style={{marginLeft:"90px",marginBottom:'10px'}} alt="Logo" width={80} height={75} />
          <CDBSidebarMenu>
            <NavLink exact to="/home" className='nav-link' >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>

            <Menu style={{marginLeft:'5px'}} >
            <SubMenu className='nav-link' style={{
              backgroundColor:'transparent',
            }} label="Orders"  icon={<BsCartCheckFill style={{ width:'20px', height:'20px'}} />}>
            <NavLink exact to='/' className='nav-link' >
            <MenuItem  style={{ 
              backgroundColor:'#ff6600',
            }}   icon={<MdPendingActions style={{ width:'20px', height:'20px'}} />}> Pending Orders</MenuItem>
            </NavLink>
            <MenuItem  style={{
              backgroundColor:'#ff6600',
            }}  icon={<AiOutlineCloseCircle style={{ width:'20px', height:'20px'}}  />}>Rejected</MenuItem>
               <MenuItem  style={{
              backgroundColor:'#ff6600',
            }}  icon={<AiOutlineCarryOut style={{ width:'20px', height:'20px'}} />}>Accepted</MenuItem>
            
            <NavLink exact to="/order">
           <MenuItem  style={{
              backgroundColor:'#ff6600',
            }}  icon={<BsCartCheckFill style={{ width:'20px', height:'20px'}}  />}>All Orders</MenuItem>
            </NavLink>

          </SubMenu>
          </Menu>

          <Menu style={{marginLeft:'5px'}}>
            <SubMenu style={{
              backgroundColor:'transparent',
            }} label="Products"  icon={<BsBox style={{ width:'20px', height:'20px'}} />}>
            <NavLink exact to='/' className='nav-link'>
            <MenuItem  style={{
              backgroundColor:'#ff6600',
            }}   icon={<MdPendingActions style={{ width:'20px', height:'20px'}} />}> Pending Products</MenuItem>
            </NavLink>
            <MenuItem  style={{
              backgroundColor:'#ff6600',
            }}  icon={<MdOutlineDisabledVisible style={{ width:'20px', height:'20px'}}  />}>Disabled Products</MenuItem>
               <MenuItem  style={{
              backgroundColor:'#ff6600',
            }}  icon={<AiTwotoneEye style={{ width:'20px', height:'20px'}}/>}>Active Products</MenuItem>
          
          <NavLink exact to= "/product" className='nav-link'>
           <MenuItem  style={{
              backgroundColor:'#ff6600',
            }}  icon={<BsBox style={{ width:'20px', height:'20px'}} />}>All Products</MenuItem>
           </NavLink>
            
            <NavLink exact to="/shard-product" className='nav-link'>
           <MenuItem  style={{
              backgroundColor:'#ff6600',
            }}  icon={<IoBagAdd style={{ width:'20px', height:'20px'}} />}>Add Products</MenuItem>
            </NavLink>

          </SubMenu>
          </Menu>

          <NavLink exact to="/store" className='nav-link' >
              <CDBSidebarMenuItem icon="exclamation-circle">My Store</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to ="/setting" className='nav-link'> 
            <CDBSidebarMenuItem><AiOutlineSetting style={{ marginRight:'18px', width:'20px', height:'20px' , color:'white'}}/> Setting</CDBSidebarMenuItem>
            </NavLink>
 
            {/* <NavLink exact to="/product" >
              <CDBSidebarMenuItem> <BsBox style={{marginRight:"20px", width:'20px', height:'20px'}}/> My Products</CDBSidebarMenuItem>
            </NavLink> */}
      
        

            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            
              <button className='logout'>
          <Link  exact to ='/'>
          Logout
            </Link> </button>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>




      <CDBSidebar className='sidebar-mobile' textColor="#fff" backgroundColor="#ff6600" >
        <CDBSidebarHeader>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          <img src={Logo} alt="Logo" width={70} height={45} />;
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
      
          <CDBSidebarMenu>
            <NavLink exact to="/" >
              <CDBSidebarMenuItem icon="columns"></CDBSidebarMenuItem>
            </NavLink>

       
            <NavLink exact to ="/order"> 
            <BsCartCheckFill style={{marginLeft:"30px",width:'20px', height:"25px", marginTop:"20px"}}/> 
            </NavLink>


      
            <NavLink exact to ="/product"> 
           <BsBox style={{marginLeft:"30px",width:'20px', height:"25px", marginTop:"25px"}} /> 
            </NavLink>
            <NavLink exact to ="/shard-product"> 
          <IoBagAdd style={{marginLeft:"30px",width:'20px', height:"25px", marginTop:"25px"}}/>
            </NavLink>

             <NavLink exact to="/store"  >
              <CDBSidebarMenuItem icon="exclamation-circle" style={{marginLeft:"30px",width:'20px', height:"25px", marginTop:"20px"}}>My Store</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to ="/setting"> 
           <AiOutlineSetting  style={{marginLeft:"30px",width:'20px', height:"25px", marginTop:"40px"}}/> 
            </NavLink>
 
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
             <Link style={{color:'white'}}>
         <RiLogoutBoxRLine/>
            </Link> 
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  </Fragment>;
};

export default Sidebar;