
import React,{ useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './AboutMe.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import url  from '../url.json';


function AboutMe(props)
{
  const history = useHistory();
  if(localStorage.getItem("login")==null)
  {
    history.push('/login');
  }

  const userId = props.location.state;
  const [allPhoto, setAllPhoto] = useState([]);
  const [user, setUser] = useState([]);
  const [userProfile, setUserProfile] = useState([]);



  useEffect(() => {
     debugger;
      
          const fetchUser = () => {
            debugger;
                 const xhr = new XMLHttpRequest();
                 xhr.onreadystatechange = () => {
                   if (xhr.readyState === 4 && xhr.status === 200) {
                    debugger;

                     const responseUser = JSON.parse(xhr.responseText);
                     console.log(responseUser);
                     setUser(responseUser);
                     getProfile();
                    
                     
             debugger;
                   }
                 };
                 xhr.open("GET", url.url + "/api/User/getUserById/"+userId);
                 xhr.send();
         };


         fetchUser();
    }, []);


    
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
  xhr.open("GET",  url.url + "/api/Photo/getProfile/"+userId);
  xhr.send();

};



  return (
<div className='container-fluid'>

<div className='uploadbutton'>
        </div>

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
    <div className='container' style={{background:'none',border:'none'}}>
      <p style={{textAlign:'left'}}>Welcome to the portfolio of <b> {user.u_first_name} </b>, a professional photographer specializing in capturing moments that tell stories. With a keen eye for detail and a passion for visual storytelling,
       John creates captivating images that evoke emotions and leave a lasting impression.</p>
    </div>   
</div>

<div className='about'>
  <h3>About {user.u_first_name}</h3>
  <p>{user.u_about}</p>
</div>

<div className='about'>
  <h3>Contact Me </h3>
  <p><b>Email :</b>  {user.u_email}</p>
</div>


</div>)
}

export default AboutMe;

