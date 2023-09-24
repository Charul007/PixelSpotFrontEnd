import React from "react";
import { useHistory } from 'react-router-dom';

import '../forgetPassword/ForgetPassword.css';

import url  from '../url.json';


function ForgetPassword(props) {

  debugger
  const history =  useHistory()

   
  localStorage.setItem("email",props.location.state.email);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    debugger;
    const formData = new FormData(form);
    const otp = (formData.get('otp'));
   
    
 
    const OTP ={ OTP: otp };

    debugger;
     const xhr = new XMLHttpRequest();

     xhr.onreadystatechange = () => {

       if (xhr.readyState === 4 && xhr.status === 200) {
         debugger;
         const responseData = JSON.parse(xhr.responseText);
         console.log(responseData);
         if(xhr.responseText > 0)
         {
          history.push("/NewPassword");
         }
         else
         {
          history.push("/forgotPassword");
         }
         debugger;
         
       }
     };
 
     xhr.open('POST', url.url + '/api/Email/opt');
     xhr.setRequestHeader("Content-Type", "application/json");
     xhr.send(JSON.stringify(OTP));
     
 };



  return (
      <div >
        
      
  
        <div style={{display:'flex'}}>
          
       <div style={{width:'30%'}} ></div>
      
        <div> 
       
          <form  onSubmit={handleSubmit} >


           
          <br/><br/><br/><br/>
            Please Enter OTP Send To Your <b>{props.location.state.email}</b><br/><br/>
            <input type="text" placeholder="opt*" className="ipt"  name="otp" /><br/><br/>


            <input type="submit" value="Send" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} /><br/><br/>

          </form>
          
        </div>
        </div>


        <hr/>
      </div>

  );
}

export default ForgetPassword;
