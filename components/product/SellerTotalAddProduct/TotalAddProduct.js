import React ,{useState , useEffect} from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { TfiSave } from "react-icons/tfi";

  

  function TotalAddProduct ({selectproduct}){
       

      const [isToggled, setIsToggled] = useState(false);
      const handleClick = (id) => {
        setIsToggled({
          ...isToggled,
          [id]: !isToggled[id],
        });
      };

    return <>
      
      <tr key={selectproduct.id} className='even:bg-zinc-100 odd:bg-zinc-50 text-center'>
      <td className='pb-6 pt-6'>{selectproduct.id}</td>
       <td>{selectproduct.id}</td>
      <td className='flex justify-center pb-6 pt-6' onClick={() => handleClick(selectproduct.id)}>
     {isToggled[selectproduct.id] ? (
     <BsToggleOff className='items-center w-[18px] h-[25px]'
      style={{
     color: "#ff6600",
        }}
         />
          ) : (
      <BsToggleOn  className='items-center'
       style={{
       width: "18px",
        height: "25px",
        color: "#ff6600",
          }}
         />
        )}
        </td>
         <td><input className='border-b-2 outline-none bg-transparent px-4 py-2' name='price'  placeholder="price"/></td>
          <td className='flex'><AiFillDelete  style={{width:'26px' , height:'26px' , marginRight:"10px" , color:'rgb(171, 5, 5)'}} />
           <TfiSave style={{width:'20px' , height:'20px' , color:'black'}} /></td>
        </tr>
    </>
  }

export default TotalAddProduct