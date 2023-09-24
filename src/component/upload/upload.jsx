import React from "react";
import { useHistory } from 'react-router-dom';
import url  from '../url.json';


import '../upload/upload.css';


function Upload() {

  const history = useHistory()

  if(localStorage.getItem("login")==null)
  {
    history.push('/login');
  }

  

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    const form = event.target;
    var users =  JSON.parse(localStorage.getItem("login"));

    const formData = new FormData(form);



  var imagedata = document.querySelector('input[type="file"]').files[0];
  formData.append("data", imagedata);

     const xhr = new XMLHttpRequest();

     xhr.onreadystatechange = () => {

       if (xhr.readyState === 4 && xhr.status === 200) {

         const responseData = JSON.parse(xhr.responseText);
         console.log(responseData);
         
         debugger;
         
       }
     };
 
     xhr.open('POST', url.url + '/api/Photo/UploadPhoto/'+users.u_id );
     debugger;
     xhr.setRequestHeader("Accept", "application/json");

     xhr.send(formData);
     
 };

  return (
      <div >
        
      
  
        <div style={{display:'flex'}}>
          
       <div style={{width:'30%'}} ></div>
      
        <div> 
       
          <form  onSubmit={handleSubmit} >
            <h1>uplaod</h1>
           
           
              <br/><br/>
              {/* <label for="fileInput" className="custom-file-label">Choose a File</label> */}
              <input type="file" id="fileInput" name="file" className="custom-file-input"
              
              /><br/><br/>

              <input type="submit" value="Submit" />
            
          </form>
         

        </div>
        </div>


        <hr/>
      </div>

  );
}

export default Upload;
