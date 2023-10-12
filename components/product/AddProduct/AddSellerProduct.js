import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';


function AddProduct ({addproduct}) {

 
    return <>
  <div className="bg-white shadow mx-2 md:px-3 pt-3 pb-6" key={addproduct.id}>
     <div className="card_inner">
    <div className='w-[250px] mx-auto my-2 '>
    <img className='h-[250px] items-center' src={addproduct.avatar_url} alt=""/>
    {/* <Image height={300} width={300}  src={addproduct.avatar_url} alt={`asasd`} /> */}
    </div>
    <div className="flex justify-center">
     <div className="items-center text-2xl">{addproduct.login}</div>
     </div>
     <div className="flex justify-center">
       <div className="items-center text-lg text-gray-500 pb-5">{addproduct.url}</div>
       </div>
     <div className='row'>
     <div >
       <div className='flex justify-between '>
        <div className='pl-7'>
         <span className='pr-9'>{addproduct.login}</span>
         <span>{addproduct.login}</span>
        </div>
        <AiOutlinePlus style={{width:'25px',height:'25px' 
       ,backgroundColor:'#ff6600',color:"white", padding:'5px', borderRadius:'50%'}}/></div> 
         </div>
       </div>
        </div>
        </div>
 </>

}

export default AddProduct ;