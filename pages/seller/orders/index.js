import withLayout from '@/components/wrapping components/WrappingSellerLayout';
import React , { useEffect, useState } from 'react';
import { Dialog , DialogTitle, DialogContent , Stack , DialogActions} from '@mui/material';
import MdClose from "react-icons/md";
import styles from '../../../components/componentsStyling/sellerStyles.module.css'

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
                           <tr key={index} className='even:bg-zinc-200 odd:bg-zinc-300 text-center'>
                               <td className='pb-5 pt-5'>{names.id}</td>
                              <td className='pb-5'>{names.name}</td>
                              <td className='pb-5'>{names.username}</td>
                              <td className='pb-5'>{names.email}</td>
                              <td className='pb-5'>{names.website}</td>
                              <td className='pb-5'><button className='bg-transparent border-b-2 border-[#ff6600] '
                              onClick={(e)=>showDetail(names.id)} >Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table> 
              </div>
              <Dialog open={open} onClose={closepopup} fullWidth >
              <DialogTitle>
             <h4 >Store Name :</h4>
             <h6> Date :</h6> 
              </DialogTitle>
              <DialogContent>
              <Stack spacing={2} margin={2}>
              <table className="table table-striped table-sm" >
                        <thead className="thead-light">
                            <tr>
                                <th>#</th>
                                <th >Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                           <tr >
                              <td>{modeldata.id}</td>
                              <td>{modeldata.name}</td>
                              <td>{modeldata.username}</td>
                              <td>{modeldata.email}</td>
                              <td>{modeldata.website}</td>
                               
                           </tr>
                          
                        </tbody>
                    </table>
              </Stack>
              <div className='row' style={{backgroundColor:'#dbdbdb', width:'100%'}}>

         <div className='col-md-6'>
          <span className = 'py-1 border-b-2 border-black' > Total Quantity : </span>
           </div>

        <div className='col-md-6'>
        <span>Total : </span><br/>
        <span> Delivery : </span><br/>
        <span> Discount: </span><br/>
        <span> Final : </span>
        </div>

           </div>
            </DialogContent>
              </Dialog>
               </div>
              </div>
    //   <div className=''>
    //     <div className={styles['page-order']}>
    // <div className="mt-2 mx-1 ">
    //     <div className="mt-2 ">  
    //         <div>
    //           <h5 className="mt-3 mb-3 text-secondary">
    //            Check More Records of Orders
    //           </h5>
    //             <div className="container w-full overflow-x-hidden">
    //                 <table className="table w-full">
    //                     <thead className="bg-zinc-300 h-10">
    //                         <tr>
    //                             <th>Id</th>
    //                             <th>Status</th>
    //                             <th>Date</th>
    //                             <th>Total </th>
    //                             <th>Coupon</th>
    //                             <th>Show Details</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
                        
    //                       {record.map((names,index)=>
    //                        <tr key={index}>
    //                            <td>{names.id}</td>
    //                           <td>{names.name}</td>
    //                           <td>{names.username}</td>
    //                           <td>{names.email}</td>
    //                           <td>{names.website}</td>
    //                           <td><button style={{backgroundColor:'#ff6600', color:'white' , border:'none',borderRadius:'5px'}}
    //                              onClick={functionopenpopup} data-toggle="modal" data-target="#myModal">Details</button></td>
    //                        </tr>
    //                        )}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
            
    //     </div>
 

      
    //   <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
    //         <DialogTitle>
    //         <h4 className="modal-title">Store Name : {record.name}</h4>
    //         <h6> Date :{record.id} </h6>
    //           <MdClose onClick={closepopup} style={{ float: "right" }}/>
    //         </DialogTitle>
    //         <DialogContent>
    //           <Stack spacing={2} margin={2}>
    //           <table className="table table-striped table-sm" >
    //                     <thead className="thead-light">
    //                         <tr>
    //                             <th>#</th>
    //                             <th >Product</th>
    //                             <th>Quantity</th>
    //                             <th>Price</th>
    //                             <th>Total</th>
                               
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                        <tr >
    //                           <td>{record.id}</td>
    //                           <td>{record.name}</td>
    //                           <td>{record.username}</td>
    //                           <td>{record.email}</td>
    //                           <td>{record.website}</td>
                               
    //                        </tr>
                          
    //                     </tbody>
    //                 </table>
    //           </Stack>
    //           <div className='row' style={{backgroundColor:'#dbdbdb', width:'100%'}}>

    //      <div className='col-md-6'>
    //       <span> Total Quantity : </span>
    //        </div>

    //     <div className='col-md-6'>
    //     <span>Total : </span><br/>
    //     <span> Delivery : </span><br/>
    //     <span> Discount: </span><br/>
    //     <span> Final : </span>
    //     </div>

    //        </div>
    //         </DialogContent>
    //         <DialogActions>
    //         <button type="button" className="btn btn-danger" data-dismiss="modal">Reject</button>
    //           <button type="button" className="btn btn-success" data-dismiss="modal">Accept</button>
    //         </DialogActions>
    //       </Dialog>
 
    // </div>
    // </div>
    // </div>
    )
}
 
 
export default withLayout(Orders) ;