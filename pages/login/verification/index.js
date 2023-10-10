import React, { Fragment ,useState } from 'react';
import VerificationInput from "react-verification-input";
// import '../Component/css/style.css';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';

const Code = () => {
       
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setIsLoggedIn(true);
      window.location.href = '/request'; }
  

    return <Fragment>
      <div className='verification-code'>
        <div className='container'>
        <h4>Enter the Verification Code</h4>
        <div className='icon'>
         <RiGitRepositoryPrivateLine className='verification' size={70}/>
        </div>
        <hr/>
        <div className='row'>
        <VerificationInput id="code" pattern="[0-9]*" 
          classNames={{
        container: "container",
        character: "character",
          characterInactive: "character--inactive",
          characterSelected: "character--selected",
            }}
      /> 
       <div className='row'>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4'>
        <button className='btn-send' onClick={handleLogin}> 
        Submit
      </button>    
         </div>
         <div className='col-md-4'>
            
        </div>
       </div>
        </div>
        </div>
      </div>
    </Fragment>
  };
  
  export default Code;