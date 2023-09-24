
import React,{ useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import '../popular/OtherProfile.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import url  from '../url.json';





function OtherProfile(props)
{
  const history = useHistory();



  const userId = props.location.state;
  const [allPhoto, setAllPhoto] = useState([]);
  const [user, setUser] = useState("");
  const [userProfile, setUserProfile] = useState([]);



  const userDetails = () => {
    debugger;
         const xhr = new XMLHttpRequest();
         xhr.onreadystatechange = () => {
           if (xhr.readyState === 4 && xhr.status === 200) {
     
             const responseData = JSON.parse(xhr.responseText);
             setUser(responseData);
             console.log(responseData);
             
     debugger;
           }
         };
         xhr.open("GET", url.url + "/api/User/getUserById/"+userId);
         xhr.send();

  };

  
const getProfile=()=>
{
debugger;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {

      const responseData = JSON.parse(xhr.responseText);
        setUserProfile(responseData[0]);
      debugger;
    }
  };
  xhr.open("GET", url.url + "/api/Photo/getProfile/"+userId);
  xhr.send();

};



  useEffect(() => {
     debugger;
          const fetchData = () => {
             debugger;
                  const xhr = new XMLHttpRequest();
                  xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
              
                      const responseData = JSON.parse(xhr.responseText);
                      setAllPhoto(responseData);
                      console.log(responseData);
                      getProfile();
              debugger;
                    }
                  };
                  xhr.open("GET", url.url+"/api/Photo/popular/"+userId);
                  xhr.send();
          };

          fetchData();
          userDetails();
    }, []);





  return (
<div className='container-fluid'>


    <div className='mybox-1'>

        <div className='myimage'>
            <img src={userProfile != null ? userProfile.p_name : "https://us.123rf.com/450wm/martialred/martialred1608/martialred160800018/61263271-compte-d-utilisateur-profil-cercle-ic%C3%B4ne-plat-pour-les-applications-et-les-sites-web.jpg?ver=6" }
             alt="profile" />

        </div>
        <div className='username'>
         <h2>{user.u_first_name} {user.u_last_name}</h2>
        </div>

    </div>

    <div className='mybox-2'>
      <h3 onClick={()=> history.push('/popular',userId)}>Popular</h3>
      <h3 onClick={()=> history.push('/latest',userId)}>Latest</h3>
      <h3 onClick={()=> history.push('/aboutMe',userId)}>AboutMe</h3>
      {/* <h3 onClick={()=> history.push('/editorsChoice',userId)}>editorsChoice</h3> */}

    </div>
    <div  className='parentdiv' >
    {allPhoto .map((item, index) => 
          (

          <div key={item.p_id} >
            
            <div className='childdiv'>
                <div>
                  <img src={item.p_name}  alt="img" className='img' style={{height: "100%",borderRadius: 10}}></img>
                </div>
                    
            </div>
          </div>
          ))
        }
</div>
</div>
  )
}

export default OtherProfile;

