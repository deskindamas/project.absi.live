

function SellerOrders ({orders}){
   return <>
  <tr key={orders.id} className='even:bg-zinc-200 odd:bg-zinc-300 text-center'>
           <td className='pb-5 pt-5'>{orders.id}</td>
           <td className='pb-5'>{orders.name}</td>
             <td className='pb-5'>{orders.username}</td>
          <td className='pb-5'>{orders.email}</td>
           <td className='pb-5'>{orders.website}</td>
             <td className='pb-5'><button className='bg-transparent border-b-2 border-[#ff6600] '
              >Details</button></td>
              </tr>

    
          {/* <Dialog open={open} onClose={closepopup} fullWidth >
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
                        <tr className='even:bg-slate-50  odd:bg-zinc-100 text-center'>
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
              </Dialog> */}
   </>
}
export default SellerOrders