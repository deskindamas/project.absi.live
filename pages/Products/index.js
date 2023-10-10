import React , { useEffect, useState } from 'react';
 
const Order = () => {
   
  const[record,setRecord] = useState([])
  const [modeldata,setModeldata] = useState({
     id:'',
     userName:'',
     username:'',
     email:'',
     website:''
  })
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users/')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },[])
   
    const showDetail = (id) =>
    {
      
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(resposne=> resposne.json())
      .then(res=>setModeldata(res))
    }
 
 
    return (
      <div className='content '>
        <div className='page-order' style={{marginLeft:'30px'}}>
    <div className="mt-2">
        <div className="row mt-2 ">  
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h5 className="mt-3 mb-3 text-secondary">
               Check More Records of Orders
              </h5>
                <div className=" mt-5">
                    <table className="table table-striped table-sm">
                        <thead className="thead-light">
                            <tr>
                                <th>Id</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Total </th>
                                <th>Coupon</th>
                                <th>Show Details</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                          {record.map((names,index)=>
                           <tr key={index}>
                               <td>{names.id}</td>
                              <td>{names.name}</td>
                              <td>{names.username}</td>
                              <td>{names.email}</td>
                              <td>{names.website}</td>
                              <td><button style={{backgroundColor:'#ff6600', color:'white' , border:'none',borderRadius:'5px'}}
                               onClick={(e)=>showDetail(names.id)} data-toggle="modal" data-target="#myModal">Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
 
 
{/* 
 Model Box  */}
 
      <div className="modal" id="myModal" >
        <div className="modal-dialog" style={{paddingLeft:'0px', paddingRight:"0px"}}>
          <div className="modal-content">
            <div className="modal-header">
              
              <h4 className="modal-title">Store Name : {modeldata.name}</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
             
            <div className="modal-body"  >
            <h6> Date :{modeldata.id} </h6>
            <p></p>
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
                     <div className='container'>
                     <div className='row' style={{backgroundColor:'#dbdbdb', width:'100%'}}>

                     <div className='col-md-6'>
                     <span> Total Quantity : </span>
                      </div>

                     <div className='col-md-6'>
                     <span>Total : </span><br/>
                     <span> Delivery : </span><br/>
                     <span> Discount: </span><br/>
                     <span> Final : </span>
                     </div>
        
                     </div>
                     </div>
                
            </div>
             
             
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Reject</button>
              <button type="button" className="btn btn-success" data-dismiss="modal">Accept</button>
            </div>
             
          </div>
        </div>
      </div>
 
    </div>
    </div>
    </div>
    )
}
 
 
export default Order