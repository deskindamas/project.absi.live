import React , {useState} from 'react';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';


function SellerStore({store}) {
 
    const [isToggled , setIsToggled] = useState(store.available);
    const [priceInputVisible, setPriceInputVisible] = useState(false);

    function handleAvailable () {
        setIsToggled(!isToggled) ; 
    }

    function togglePriceInput() {
      setPriceInputVisible(!priceInputVisible);
    }
 
    return <>
  <div className="bg-white shadow mb-10 mx-2 md:px-3 pt-3 pb-6" key={store.id}>
     <div className="card_inner">

    <div className='w-[250px] mx-auto my-2 '>
    <img className='h-[250px] items-center' src={store.avatar_url} alt=""/>
    </div>
    <div className="flex justify-center">
     <div className="items-center text-2xl pt-2 pb-2">Suger</div>
     </div>
     <div className="flex justify-center">
       <div className="text-center text-lg text-gray-500 pb-5 px-5">Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry'ffff ssdes standard dummy 
        text ever since the 1500s.</div>
       </div>
     <div className='row'>
     <div >
       <div className="flex justify-between items-center w-[90%] mx-auto " >
        <div className = ' w-[55%]' >
         <p className=' text-start flex-wrap border-2 rounded-md px-1 py-1 border-[#ff6600] max-w-fit '>asdas ASD  asd asd AS</p>
         
        </div>
        <div className='flex justify-end gap-3'>
        {priceInputVisible ? (
            <input
              type="text"
              className="text-white rounded-md w-24 text-center bg-skin-primary"
              value={store.price}
              onChange={(e) => {
                // Update the price in the store object
                store.price = e.target.value;
              }}
            />
          ) : (
            <span className="text-white rounded-md w-24 text-center bg-skin-primary">
              $400
            </span>
          )}
        <MdModeEdit
          className="w-[30px] h-[30px] bg-gray-400 text-white p-[3px]  rounded-[50%]"
          onClick={togglePriceInput}
        />
       <div onClick={handleAvailable}>
       {isToggled !== true ? (
                            <BsToggleOn
                              style={{
                                width: "30px",
                                height: "30px",
                                color: "#ff6600",
                              }}
                            />
                          ) : (
                            <BsToggleOff
                              style={{
                                width: "30px",
                                height: "30px",
                                color: "#ff6600",
                              }}
                            />
                          )}
       </div>
       </div>
       </div> 
         </div>
       </div>
        </div>
        </div>
 </>

}

export default SellerStore ;