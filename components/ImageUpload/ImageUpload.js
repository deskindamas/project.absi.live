import React, { useState , useRef} from 'react';
// import '../imageupload/imageupload.css';
// import UploadImg from '../images/choose_file - Copy.png';
import UploadImg from '../../public/images/choose_file - Copy.png' ;
import Image from 'next/image';

const ImageUpload = () => {
    
    const inputRef = useRef(null);
    const [imag , setimage] = useState("");
     
    const handleImageClick = () =>{
        inputRef.current.click();
    }

    const handleImageChange = (event) =>{
      const file = event.target.files[0];
      console.log(file);
       setimage(event.target.files[0]);
    }

    return(
        <div>
    <div onClick={handleImageClick}>
    { imag ?
           <Image src={URL.createObjectURL(imag)} alt='upload image' style={{width:"100px", height:'100%'}}/> : 
        <Image src={UploadImg} alt='upload image' style={{width:"200px", height:'45px'}}/>
    }
    <input type='file' ref={inputRef} onChange={handleImageChange} style={{display:'none'}}/>
    </div>
    </div>
  
    );
};

export default ImageUpload;