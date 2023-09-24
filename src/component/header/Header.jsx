import React, { useEffect, useState } from 'react';
import '../../css/common.css';
import './header.css';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AppContext } from '../../index.js' ;
import { Avatar } from '@chakra-ui/react';
import url  from '../url.json';



function Header()
{
   
    const user = useContext(AppContext);

    const [category ,setCategory] = useState("");

    var userInitial = "";

    const history =  useHistory()
    

    const handleChange = (event) => {
        setCategory(event.target.value);
      };


      if(localStorage.getItem("login")!=null)
      {
      
        const user = JSON.parse(localStorage.getItem("login"));

        debugger;
        if(user.Message === "Wrong Credential" )
        {
            localStorage.removeItem("login");
        }
        else
        {
          if(user != null)
          {
            debugger
            const username=(user.u_first_name);
            userInitial = username.substring(0,1);
          }
        }
       
      }

      const handleSubmit = (event) => {
        event.preventDefault();
      
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
        
         
          if (xhr.readyState === 4 && xhr.status === 200) {


           
            const responseData = JSON.parse(xhr.responseText);
      
            console.log(responseData);
            
            localStorage.setItem("data", JSON.stringify(responseData));
            history.push("/")
            debugger;
           
          }
        };
           xhr.open('GET', url.url + '/api/Photo/photoCategoryName?categoryName='+category);

      
        xhr.send();

      }

      const renderToHome = () =>
            { debugger; history.push("/"); }

      const renderToLogin = () =>
            { history.push("/login"); }
      
      const renderToLogOut = () =>
            {    

              var users = JSON.parse(localStorage.getItem("login"));

              const xhr = new XMLHttpRequest();

              xhr.onreadystatechange = () =>
              {
                if (xhr.readyState === 4 && xhr.status === 200)
                 {
                  const responseData = JSON.parse(xhr.responseText);
                  console.log(responseData);

                 
                  user.setUser(null);

                  toast.success('LogOut Successfull !',{
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000, 
                    });
          
                  setTimeout(() => {
                    history.push("/login");
                  }, 3000);
                   
                 
                }
              };

              xhr.open('GET', url.url +'/api/User/Logout/'+ users.u_id);
              xhr.send();
    
              localStorage.removeItem("login");
                   userInitial=null;
                  history.push("/"); 
            }

      const renderToUpload = () =>
            {    
              if(localStorage.getItem("login") == null )
              {history.push("/login");}
              else
              {history.push("/upload");}
            }

const fetchdata = "fetchdata()";
       


     return (
        <div className='bg'>
           <ToastContainer />
            <div className='bg1'>
                    <div className='bg1-1'>
                    {/* <Link to="/" style={{color:'white'}}>PIXELSPOT</Link> */}
                     <button className='bg1-2-bt1' onClick={()=>{history.push("/",fetchdata)}}>PIXELSPOT</button>
                    </div>
                    <div style={{display:'flex',alignItems: 'center'}} >
                        <button className='bg1-2-bt1' onClick={renderToUpload}>{user.user !=null ? "Upload" : "Login" }</button>
                        <div style={{width:20,borderRadius:50}}></div>
                        <div style={{backgroundColor:'white',borderRadius:50}}>
                        {/* {!userInitial && <div className='bg1-2-1' onClick={renderToLogin} ></div>} */}
                        {!userInitial && <Avatar style={{cursor:'pointer'}} onClick={renderToLogin} />}

                        {/* {userInitial && <div style={{backgroundColor:"white",padding:"10px", borderRadius:"50%"}} onClick={()=>{history.push('yourProfile',user.user.u_id)}}>{userInitial}</div>}</div> */}
                        {userInitial &&  <Avatar style={{cursor:'pointer'}} name={user.user.u_first_name}  onClick={()=>{history.push('yourProfile',user.user.u_id)}} />}</div>

                       
                        
                        <div style={{width:20,borderRadius:50}}></div>
                        {user.user != null &&<button className='bg1-2-bt1' onClick={renderToLogOut} >logOut</button>}


                    </div>
                   
           </div>
           <div className='bg2'>

                        <div  className='bg2-1'>

                            <div>
                                <img src='https://img.icons8.com/?size=512&id=LqEdGPOqIZO2&format=png' alt='icon' style={{height:20}}/>
                            </div>
                            <form style={{display:'contents'}} onSubmit={handleSubmit}>
                            
                            <input id="input" type="text" list="photo" style={{  background:'none',border:'none',marginTop:'10px'}}  
                                                    placeholder='search' 
                                                    name="imageCategories"
                                                    value={category} 
                                                    onChange={handleChange} />
                                              <datalist id="photo">
                                                  <option value="MyPhoto"/>
                                                  <option value="wild"/>
                                                  <option value="space"/>
                                                  <option value="Andorra"/>
                                                  <option value="Angola"/>
                                              </datalist>
                            
                            
                            
                            
                            </form>
                           

                        </div>   
                       
          </div>
       
        </div>
  );
}

export default Header;
