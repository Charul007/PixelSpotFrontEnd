import React from "react";
import { useHistory } from 'react-router-dom';

import '../newPassword/NewPassword.css';
import url  from '../url.json';


function NewPassword(props) {

  const history =  useHistory()
  const email = localStorage.getItem("email");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    debugger;
    const formData = new FormData(form);
    const password = (formData.get('password'));
    const cpassword = (formData.get('cpassword'));
   
    if (password == cpassword)
    {
    
 
    const deatils =
    {
       u_email : email,
       u_password : password,
     
    };

    debugger;
     const xhr = new XMLHttpRequest();

     xhr.onreadystatechange = () => {

       if (xhr.readyState === 4 && xhr.status === 200) {
         debugger;
         const responseData = JSON.parse(xhr.responseText);
         console.log(responseData);

         if(xhr.responseText > 0)
         {
          history.push("/login");
         }
         else
         {
          history.push("/forgotPassword");
         }
         
         
       }
     };
 
     xhr.open('POST',url.url + '/api/Email/setNewPassword');
     xhr.setRequestHeader("Content-Type", "application/json");
     xhr.send(JSON.stringify(deatils));
    }
 };



  return (
      <div >
        
        <div style={{display:'flex'}}>
          
       <div style={{width:'30%'}} ></div>
      
        <div> 
       
          <form  onSubmit={handleSubmit} >

          <br/><br/><br/><br/>
            Please Enter New Password <b>{email}</b><br/><br/>
           <input type="password" 
            minLength={6}
            maxLength={20}
            placeholder="password*" className="ipt"  name="password" /><br/><br/>
 
           <input type="password"
            minLength={6}
            maxLength={20}
           placeholder="Confirmpassword*" className="ipt"  name="cpassword" /><br/><br/>
 

            <input type="submit" value="Send" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} /><br/><br/>

          </form>
          
        </div>
        </div>


        <hr/>
      </div>

  );
}

export default NewPassword;
