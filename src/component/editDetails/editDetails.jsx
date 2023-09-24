import React from "react";
import { useHistory } from 'react-router-dom';

import '../editDetails/editDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url  from '../url.json';




function editDetails() {


  // const history = useHistory();

  // if(localStorage.getItem("login") == null)
  // {
  //   history.push('/login');
  // }

  const user = JSON.parse(localStorage.getItem("login"));

  const handleSubmitUser = (event) => {

    debugger;
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const u_id = (formData.get('u_id'));
    const u_first_name = (formData.get('u_first_name'));
    const u_last_name = (formData.get('u_last_name'));
    const u_about = (formData.get('u_about'));
    const u_mobile = (formData.get('u_mobile'));
    const u_address = (formData.get('u_address'));
    // const gender = (formData.get('gender'));
    // const dob = (formData.get('dob'));



    const userDetails = {
      u_id :user.u_id,
      u_first_name:u_first_name,
      u_last_name:u_last_name,
      u_about:u_about,
      u_mobile:u_mobile,
      u_address:u_address
    };
  
     const xhr = new XMLHttpRequest();

     xhr.onreadystatechange = () => {

       if (xhr.readyState === 4 && xhr.status === 200) {

         const responseData = JSON.parse(xhr.responseText);
         console.log(responseData);
         debugger;
         if(responseData.Message == "Update successful" )
         {

                const object = { u_email : user.u_email, u_id : user.u_id    }

                const xhr1 = new XMLHttpRequest();

                xhr1.onreadystatechange = () => {
          
                  if (xhr.readyState === 4 && xhr.status === 200) {
          
                    const responseData1 = JSON.parse(xhr1.responseText);
                    debugger;
                    localStorage.setItem("login", JSON.stringify(responseData1));
                    if(responseData.Message == "Update successful")
                    {
                     toast.success('update Deatail Successfull !', {
                       position: toast.POSITION.TOP_RIGHT,
                       autoClose: 2000, 
                     });
                   }
                   debugger;

                    
                  }
                };
            
                xhr1.open('POST', url.url +'/api/User/Login' );
                xhr1.setRequestHeader("Content-Type", "application/json");
                xhr1.send(JSON.stringify((object)));
         }
         
       }
     };
 
     xhr.open('PUT', url.url +'/api/User/UpdateUser' );
     xhr.setRequestHeader("Content-Type", "application/json");
     xhr.send(JSON.stringify((userDetails)));
     
 };

 const handleSubmitPassword = (event) => {

  event.preventDefault();
  const form = event.target;

  const formData = new FormData(form);
  const u_id = (formData.get('u_id'));
  const u_password = (formData.get('u_password'));
  const cpassword = (formData.get('cpassword'));

  const userPassword = {
    u_id :user.u_id,
    u_first_name:u_password,
    u_password:cpassword
  };



   const xhr = new XMLHttpRequest();

   xhr.onreadystatechange = () => {

     if (xhr.readyState === 4 && xhr.status === 200) {

       const responseData = JSON.parse(xhr.responseText);
       console.log(responseData);
       debugger;
       if(responseData == "update Password Successfull")
       {
        toast.success('update Password Successfull !', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000, 
      });
       }
       
     }
   };

   xhr.open('PUT',url.url +'/api/User/updatePassword' );
   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.send(JSON.stringify((userPassword)));
   
};

const handleSubmitEmail = (event) => {

  event.preventDefault();
  const form = event.target;

  const formData = new FormData(form);
  const u_id = (formData.get('u_id'));
  const u_email = (formData.get('u_email'));
  const cemail = (formData.get('cemail'));
  const epassword = (formData.get('epassword'));


  const userEmail = {
    u_id :user.u_id,
    u_first_name:u_email,
    u_email:cemail,
    u_password:epassword

  };




   const xhr = new XMLHttpRequest();

   xhr.onreadystatechange = () => {

     if (xhr.readyState === 4 && xhr.status === 200) {

       const responseData = JSON.parse(xhr.responseText);
       console.log(responseData);
       debugger;
      if(responseData == "update Email Successfull")
      {
        toast.success('update Email Successfull !', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000, 
        });
       
      }
    
    }
   };

   xhr.open('PUT', url.url +'/api/User/updateEmail' );
   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.send(JSON.stringify((userEmail)));
   
};

  return (
      <div >
        
        <br/> <div style={{textAlign: 'center',fontSize:'xx-large'}} >User Details </div><br/><br/>
      
  
        <div style={{display:'flex'}}>
          
       <div style={{width:'30%'}} ></div>
      
        <div> 
       
          <form  onSubmit={handleSubmitUser} >

          <div style={{fontSize:'x-large',textDecorationLine: 'underline'}} > Change Details</div><br/>

          <input disabled placeholder={user.u_id} className="ipt" id="u_id" /><br/><br/>

            First Name<br/><br/>
            <input type="text" required placeholder={user.u_first_name} className="ipt" name="u_first_name" /><br/><br/>

            Last Name<br/><br/>
            <input type="text" required placeholder={user.u_last_name} className="ipt" name="u_last_name" /><br/><br/>

            About<br/><br/>
            <input type="text" required placeholder={user.u_about} className="ipt" name="u_about" /><br/><br/>

           
            Mobile No<br/><br/>
            <input type="number" required placeholder={user.u_mobile} className="ipt" name="u_mobile" /><br/><br/>


            {/* Birth Date<br/><br/>
            <input type="date" placeholder="Email" className="ipt" name="dob" /><br/><br/>

            Gender <br/><br/>
            <label for="male">Male</label> <input type="radio" value="male" name="gender" id="male"/>
          
            <label for="female">Female</label> <input type="radio" value="female" name="gender" id="female"/><br/> */}
            


            <br/><br/>
            Addresss <br/><br/>
            <input type="text" required placeholder={user.u_address} className="ipt" name="u_address" /><br/><br/><br/><br/>


            <input type="submit"  value="Submit" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} /><br/><br/>

          </form>


          <form  onSubmit={handleSubmitPassword} >
       
          <div style={{fontSize:'x-large',textDecorationLine: 'underline'}} > Change Password</div><br/>

                 
             Password<br/><br/>
             <input type="Password" required placeholder="Password" className="ipt" name="u_password" /><br/><br/>

             Confirm Password<br/><br/>
             <input type="Password" required placeholder="Confirm Password" className="ipt" name="cpassword" /><br/><br/>
             <small>forgoate password</small>
             <br/><br/>

              
             <input type="submit" value="Submit" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} /><br/><br/>

          </form>

       <form  onSubmit={handleSubmitEmail} >
       
       <div style={{fontSize:'x-large',textDecorationLine: 'underline'}} > Change Email</div><br/>

              
          Email<br/><br/>
          <input type="email" required placeholder="Old Email" className="ipt" name="u_email" /><br/><br/>

          Confirm Email<br/><br/>
          <input type="email" required placeholder="New Email" className="ipt" name="cemail" /><br/><br/>

          Password<br/><br/>
          <input type="password" required placeholder="Password" className="ipt" name="epassword" /><br/><br/>

          <input type="submit" value="Submit" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} /><br/><br/>

       </form>



        </div>
        </div>


        <hr/>
      </div>

  );
}

export default editDetails;
