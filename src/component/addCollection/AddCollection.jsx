import React from "react";
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../addCollection/AddCollection.css';
import url  from '../url.json';



function AddCollection() {

  debugger
  const history =  useHistory()
  if(localStorage.getItem("login")==null)
  {
    history.push('/login');
  }

  const user = JSON.parse(localStorage.getItem("login"));

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    debugger;
    const formData = new FormData(form);
    const details = (formData.get('addCollection'));
   
    
 
    const spdetails ={ 
      cc_name: details,
    };

    debugger;
     const xhr = new XMLHttpRequest();

     xhr.onreadystatechange = () => {

       if (xhr.readyState === 4 && xhr.status === 200) {
         debugger;
         const responseData = JSON.parse(xhr.responseText);
         console.log(responseData);
  
         if(responseData === "add collection")
         {
              toast.success('add collection Successfull !', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000, 

                });

                setTimeout(() => {
                  history.push("/collection");
                }, 3000);
      
         }
         debugger;
         
       }
     };
 
     xhr.open('POST', url.url +'/api/Photo/setCollection/'+ user.u_id);
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
            Add Collection 
            <input type="text" placeholder="Name" className="details" id="addCollection"  name="addCollection" /><br/><br/>


            <input type="submit" value="Send" style={{backgroundColor:'green' , borderRadius:10,height:35,width:80}} /><br/><br/>

          </form>
          
        </div>
        </div>


        <hr/>
      </div>

  );
}

export default AddCollection;
