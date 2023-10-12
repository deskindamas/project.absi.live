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
              <DialogTitle className='flex justify-between'>
             <h4 >اسم المحل:</h4>
             <h6> تاريخ الطلب :</h6> 
              </DialogTitle>
              <hr/>
              <DialogContent>
              <Stack spacing={2} margin={2}>
              <table className="table w-full" >
                        <thead className="bg-zinc-200 h-8">
                            <tr>
                                <th>#</th>
                                <th >اسم المنتج</th>
                                <th>الكمية</th>
                                <th>السعر</th>
                                <th>الاجمالي</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        <tr className='even:bg-zinc-200 odd:bg-zinc-300 text-center'>
                              <td className='pb-5 pt-5'>{modeldata.id}</td>
                              <td className='pb-5 pt-5'>{modeldata.name}</td>
                              <td className='pb-5 pt-5'>{modeldata.username}</td>
                              <td className='pb-5 pt-5'>{modeldata.email}</td>
                              <td className='pb-5 pt-5'>{modeldata.website}</td>
                               
                           </tr>
                          
                        </tbody>
                    </table>

                    <div className='grid md:grid-cols-2 grid-col-1 gap-2' >

             <div>
             <p className = 'py-1 ' > الكمية الإجمالية : </p>
            
             <label for="freeform">ما هو سبب رفضك للطلب ؟</label>
              <br/>

             <textarea id="freeform" name="freeform" rows="4" className='w-full mt-4 shadow p-3'>
             رجاء ادخل السبب هنا
             </textarea>

              </div>

               <div >
                <span>
                  السعر الكلي : </span><br/>
                <span> تكلفة التوصيل : </span><br/>
                <span> الحسم: </span><br/>
                <span> الاجمالي : </span>
                 </div>

                </div>
              </Stack>
           
            </DialogContent>
            <DialogActions>
            <button type="button" className="bg-red-700 px-8 py-3 text-white" data-dismiss="modal">Reject</button>
              <button type="button" className="bg-lime-950 px-8 py-3 text-white" data-dismiss="modal">Accept</button>
            </DialogActions>
              </Dialog>
               </div>
              </div>

    )
}
 
 
export default withLayout(Orders) ;