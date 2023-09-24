import React from "react";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../report/Report.css';
import url  from '../url.json';


function Report(props) {

  debugger
  const history =  useHistory()

   
  console.log(props.location.state);

  const reportPhotoId = props.location.state;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    debugger;
    const formData = new FormData(form);
    const details = (formData.get('report'));
   
    
 
    const spdetails ={ 
      sp_details: details,
      p_id:reportPhotoId
    
    };

    debugger;
     const xhr = new XMLHttpRequest();

     xhr.onreadystatechange = () => {

       if (xhr.readyState === 4 && xhr.status === 200) {
         debugger;
         const responseData = JSON.parse(xhr.responseText);
         console.log(responseData);
  
         if(responseData === "setSpamPhoto")
         {
              toast.success('Reported Successfull !', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000, 
                });
      
              setTimeout(() => {
                history.push("/");
                }, 3000);
         }
         debugger;
         
       }
     };
 
     xhr.open('POST',url.url+'/api/User/setSpamPhoto');
     xhr.setRequestHeader("Content-Type", "application/json");
     xhr.send(JSON.stringify(spdetails));
     
 };



  return (
      <div >
        
      
  
        <div style={{display:'flex'}}>
          
       <div style={{width:'30%'}} ></div>
      
        <div> 
       
          <form  onSubmit={handleSubmit} >


           
          <br/><br/><br/><br/>
            Report Here About The Photo <br/>
            <input type="text" placeholder="Details" className="details" id="report"  name="report" /><br/><br/>


            <input type="submit" value="Send" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} /><br/><br/>

          </form>
          
        </div>
        </div>


        <hr/>
      </div>

  );
}

export default Report;
