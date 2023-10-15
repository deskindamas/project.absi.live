import React , { useEffect, useState } from 'react';
import { Dialog , DialogTitle, DialogContent , Stack , DialogActions} from '@mui/material';
import MdClose from "react-icons/md";

function SellerOrders ({orders}){

  const [open, openchange] = useState(false);

  const functionopenpopup=()=>{
      openchange(true);
      
  }
  const closepopup=()=>{
    openchange(false);
}
   return <>
  <tr key={orders.id}  className='even:bg-zinc-200 odd:bg-zinc-50 text-center'>
           <td className='pb-5 pt-5'>{orders.id}</td>
           <td className='pb-5'>{orders.name}</td>
             <td className='pb-5'>{orders.username}</td>
          <td className='pb-5'>{orders.email}</td>
           <td className='pb-5'>{orders.website}</td>
             <td className='pb-5'><button onClick={functionopenpopup} className='bg-transparent border-b-2 border-[#ff6600] '
              >Details</button></td>
              </tr>

        
              <Dialog open={open} onClose={closepopup} fullWidth maxWidth='md' >
              <DialogTitle className='flex justify-between'>
             <h4 >اسم المحل:</h4>
             <h6> تاريخ الطلب :</h6> 
              </DialogTitle>
              <hr/>
              <DialogContent>
              <Stack spacing={2} margin={2}>
              <table className="table w-full" >
                        <thead className="bg-zinc-200 h-8">
                            <tr className='text-xl'>
                                <th className='pb-2 pt-2'>#</th>
                                <th className='pb-2 pt-2'>اسم المنتج</th>
                                <th className='pb-2 pt-2'>الكمية</th>
                                <th className='pb-2 pt-2'>السعر</th>
                                <th className='pb-2 pt-2'>الاجمالي</th>
                               
                            </tr>
                        </thead>
                        <tbody className='text-center text-xl'>
                        <tr className='text-center'>
                         <td className='pb-2 pt-2'>1</td> 
                         <td className='pb-2 pt-2'>lorem</td> 
                         <td className='pb-2 pt-2'>22</td> 
                         <td className='pb-2 pt-2'>400</td> 
                         <td className='pb-2 pt-2'>450</td> 
                         </tr>
                        </tbody>
                    </table>

                    <div className='grid md:grid-cols-2 grid-col-1 gap-2 text-xl' >

             <div>
             <p className = 'py-5' > الكمية الإجمالية : </p>
            
             <label className = 'py-5' for="freeform ">ما هو سبب رفضك للطلب ؟</label>
              <br/>
             <textarea  id="freeform" name="freeform" rows="4" placeholder='ادخل السبب هنا ' className='w-full mt-4 shadow p-3 py-5'>
             
             </textarea>

              </div>

               <div >
                <p className = 'py-1'>
                  السعر الكلي : </p>
                <p className = 'py-1'> تكلفة التوصيل : </p>
                <p className = 'py-1'> الحسم: </p>
                <p className = 'py-1'> الاجمالي : </p>
                 </div>

                </div>
              </Stack>
           
            </DialogContent>
            <DialogActions>
            <button type="button" className="bg-red-700 px-8 py-3 text-white" data-dismiss="modal">Reject</button>
              <button type="button" className="bg-lime-950 px-8 py-3 text-white" data-dismiss="modal">Accept</button>
            </DialogActions>
              </Dialog>

   </>
}
export default SellerOrders