
import React,{ useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import '../download/Download.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import url  from '../url.json';




function Download()
{
  const history = useHistory();


  if(localStorage.getItem("login")==null)
  {
    history.push('/login');
  }

  const user = JSON.parse(localStorage.getItem("login"));

  const [allPhoto, setAllPhoto] = useState([]);

  const [userProfile, setUserProfile] = useState([]);



  
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
  xhr.open("GET", url.url + "/api/Photo/getProfile/"+user.u_id);
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
                      getProfile();
                      
              debugger;
                    }
                  };
                  xhr.open("GET", url.url + "/api/Photo/GetDownlaodPhotoById/"+user.u_id);
                  xhr.send();
          };

          fetchData();
    }, []);





  return (
<div className='container-fluid'>

<div className='uploadbutton'>
<Link to="/editDetails"><button><h4>EditProfile</h4></button></Link>  
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
    <Link to="/yourProfile"><h3>All</h3></Link>
      <Link to="/collection"><h3>Collection</h3></Link>
      <Link to="/dowloads"><h3>Downloads</h3></Link>
      <Link to="/public"><h3>Public</h3></Link>

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

export default Download;

