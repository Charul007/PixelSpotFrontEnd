import React from "react";
import '../contactUs/contactUs.css';
import url  from '../url.json';



function ContactUs() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const firstName = (formData.get('firstName'));
    const lastName = (formData.get('lastName'));
    const email = (formData.get('email'));
    const topic = (formData.get('topic'));
    const message = (formData.get('message'));
    const checkbox = (formData.get('checkbox'));

    
 
    const enquiryuser = {

      firstName:firstName,
      lastName:lastName,
      email:email,
      topic:topic,
      message:message,
      checkbox:checkbox,
    };

     const xhr = new XMLHttpRequest();

     xhr.onreadystatechange = () => {

       if (xhr.readyState === 4 && xhr.status === 200) {

         const responseData = JSON.parse(xhr.responseText);
         console.log(responseData);
         debugger;
         
       }
     };
 
     xhr.open('POST','http://localhost:5000/pixel-api/user/enquiry' );
     xhr.setRequestHeader("Content-Type", "application/json");
     xhr.send(JSON.stringify((enquiryuser)));
     
 };

  return (
      <div >
        
        <br/> <div style={{textAlign: 'center',fontSize:'xx-large'}} >Contact Us</div><br/><br/>
      
  
        <div style={{display:'flex',backgroundColor: 'cadetblue'}}>
          
       <div style={{width:'30%'}} ></div>
      
        <div> <small>* indicate fields are required</small><br/><br/>
       
          <form  onSubmit={handleSubmit} >
          <div style={{fontSize:'x-large',textDecorationLine: 'underline'}} >Basic Info</div><br/>

            First Name<br/><br/>
            <input type="text" placeholder="First Name *" className="ipt" name="firstName" /><br/><br/>

            Last Name<br/><br/>
            <input type="text" placeholder="Last Name *" className="ipt" name="lastName" /><br/><br/>

            Email<br/><br/>
            <input type="text" placeholder="Email *" className="ipt" name="email" /><br/><br/><br/><br/>

            <div style={{fontSize:'x-large',textDecorationLine: 'underline'}} >Description</div><br/>

            Topic<br/><br/>
            <input type="text" placeholder="Topic" className="ipt" name="topic" /><br/><br/>

            Discription<br/><br/>
            <textarea id="message" placeholder="Discription*" name="message" rows="4" className="ipt" /><br/><br/>

            <input type="checkbox" name="checkbox" />Terms & Conditions<br/><br/>


            <input type="submit" value="Submit" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} /><br/><br/>

          </form>
        </div>
        </div>


        <hr/>
      </div>

  );
}

export default ContactUs;
