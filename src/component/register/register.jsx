import React from "react";
import { useHistory } from 'react-router-dom';
import '../register/register.css';
import url  from '../url.json';



function Register() {
  const history =  useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const firstName = (formData.get('firstName'));
    const lastName = (formData.get('lastName'));
    const email = (formData.get('email'));
    const password = (formData.get('password'));
    const cpassword = (formData.get('cpassword'));


    if(cpassword != password)
    {
      history.push("/register");
    }
    else
    {
    
 
    const resisteruser = {

      u_first_name:firstName,
      u_last_name:lastName,
      u_email:email,
      u_password:password,
      u_role: "CUSTOMER",
    };

     const xhr = new XMLHttpRequest();

     xhr.onreadystatechange = () => {

       if (xhr.readyState === 4 && xhr.status === 200) {

         const responseData = JSON.parse(xhr.responseText);
         console.log(responseData);
         debugger;
         
       }
     };
 
     xhr.open('POST','http://localhost:5000/pixel-api/user/register' );
     xhr.setRequestHeader("Content-Type", "application/json");
     xhr.send(JSON.stringify((resisteruser)));
     
 };
}

  return (
      <div >
          
        <div style={{display:'flex'}}>
          
       <div style={{width:'30%'}} ></div>
      
        <div> 
       
          <form  onSubmit={handleSubmit} >

            First Name<br/><br/>
            <input type="text" placeholder="First Name *" className="ipt" name="firstName" /><br/><br/>

            Last Name<br/><br/>
            <input type="text" placeholder="Last Name *" className="ipt" name="lastName" /><br/><br/>

            Email<br/><br/>
            <input type="email" placeholder="Email *" className="ipt" name="email" /><br/><br/>
            password<br/><br/>
            <input 
             minLength={6}
             maxLength={20}
             type="password" placeholder="password" className="ipt" name="password" /><br/><br/>
            Confirm password<br/><br/>
            <input  
            minLength={6}
            maxLength={20}
             type="password" placeholder="Cpassword" className="ipt" name="cpassword" /><br/><br/>

            <input type="submit" value="Submit" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} /><br/><br/>

          </form>
        </div>
        </div>


        <hr/>
      </div>

  );
}

export default Register;
