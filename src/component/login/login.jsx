import React, { useState } from "react";
import '../login/login.css';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url  from '../url.json';




function Login() {

  const history =  useHistory()
  const [login, setlogin] = useState({email:"",password:""});

  var handleChange = (event) =>{

    var copyLogin = {...Login};
    copyLogin[event.target.name] = event.target.value;
    setlogin(copyLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    debugger;
    const formData = new FormData(form);
    const email = (formData.get('email'));
    const password = (formData.get('password'));
    
 
    const enquiryuser = {
      u_email:email,
      u_password:password
    };

     const xhr = new XMLHttpRequest();

     xhr.onreadystatechange = () => {

       if (xhr.readyState === 4 && xhr.status === 200) {
         debugger;
         const responseData = JSON.parse(xhr.responseText);
         console.log(responseData);
         localStorage.setItem("login", JSON.stringify(responseData));
  
         toast.success('Login Successfull !', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000, 
      });

        setTimeout(() => {
          history.push("/");
        }, 3000);
         
         debugger;
         
       }
     };
 
     xhr.open('POST',url.url + '/api/User/Login' );
     xhr.setRequestHeader("Content-Type", "application/json");
     xhr.send(JSON.stringify((enquiryuser)));
     
 };

 const renderToRegister = () =>
 { history.push("/register"); }

 const forgotPassword = () =>
 { 

 const xhr = new XMLHttpRequest();

 xhr.onreadystatechange = () => {

   if (xhr.readyState === 4 && xhr.status === 200) {
     debugger;
     const responseData = JSON.parse(xhr.responseText);
     console.log(responseData);
     
    
     debugger;
     
   }
 };
 xhr.open('GET',url.url + '/api/Email/email?getEmail='+login.email );
 xhr.setRequestHeader("Content-Type", "application/json");
 xhr.send();

 history.push('/forgotPassword',login);


}


  return (
      <div >
       
       <ToastContainer />
  
        <div style={{display:'flex'}}>
          
       <div style={{width:'30%'}} ></div>
      
        <div> 
       
          <form  onSubmit={handleSubmit} >


            Email<br/><br/>
            <input type="text" placeholder="Email *" className="ipt" name="email" value={login.email}  onChange={handleChange}/><br/><br/><br/><br/>


            Password<br/><br/>
            <input type="password" placeholder="password" className="ipt" name="password" value={login.password} onChange={handleChange} /><br/><br/>
            

            <input type="submit" value="Login" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} />
             
            &nbsp;&nbsp;<small><a onClick = {forgotPassword} >forgotPassword</a></small>
            <br/><br/>
           
          </form>
          <input type="submit" value="Register" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} onClick={renderToRegister}/><br/><br/>
         
        </div>
        </div>


        <hr/>
      </div>

  );
}

export default Login;
