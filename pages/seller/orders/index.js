import withLayout from '@/components/wrapping components/WrappingSellerLayout';
import React , { useEffect, useState } from 'react';
import styles from '../../../components/componentsStyling/sellerStyles.module.css'
import SellerOrders from '@/components/SellerOrders/sellerOrder';

const Orders = () => {
   
  const[record,setRecord] = useState([])

   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users/')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },[])
   
   const [open, openchange] = useState(false);

   const [modeldata,setModeldata] = useState({
    id:'',
    ProductName:'',
    Quantity:'',
    Price:'',
    Final :''
   })


   const closepopup = () => {
     openchange(false);
   };
   
   const showDetail = (id) =>
   {
    openchange(true);
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then(resposne=> resposne.json())
     .then(res=>setModeldata(res))
   }
 
    return (
   <div className='page-orders'>
    <div className='container'>
     <div className='px-5 py-5'>
     <h2 className='text-2xl text-stone-500'> Check More Records of Orders </h2>
     </div>

    <div className='w-full '>
    <table className="table w-full ">
      <thead className="bg-zinc-200 h-8 ">
        <tr className='border-b-[#ff6600]'>
        <th>Id</th>
        <th>Status</th>
        <th>Date</th>
         <th>Total </th>
          <th>Coupon</th>
          <th>Show Details</th>
           </tr>
           </thead>
            <tbody className='text-xl'>
          {record.map((names,index)=>
           <SellerOrders orders= {names} />
                           )}
              </tbody>
     </table> 
     </div>

               </div>
              </div>

    )
}
 
 
export default withLayout(Orders) ;