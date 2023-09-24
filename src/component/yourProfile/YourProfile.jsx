import '../yourProfile/yourprofile.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { EditIcon, HamburgerIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import url  from '../url.json';



function YourProfile() {

  const history = useHistory()

  if(localStorage.getItem("login")==null)
  {
    history.push('/login');
  }


  const user = JSON.parse(localStorage.getItem("login"));

  const [allPhoto, setAllPhoto] = useState([]);
  const [allCollection, setAllCollection] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [userProfile, setUserProfile] = useState([]);


  const getCollection = () => {
    // debugger;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // debugger;

        const responseData = JSON.parse(xhr.responseText);
        setAllCollection(responseData.list);
        console.log(responseData);


        // debugger;
      }
    };
    xhr.open("GET", url.url + "/api/Photo/getCollectionByUserId/" + user.u_id);
    xhr.send();

  }

  const getCategory = () => {
    // debugger;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // debugger;

        const responseData = JSON.parse(xhr.responseText);
        setAllCategory(responseData);
        console.log(responseData);

        // debugger;
      }
    };
    xhr.open("GET", url.url + "/api/Photo/getAllCategory");
    xhr.send();

  }

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

const fetchData = () => {
  // debugger;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {

      const responseData = JSON.parse(xhr.responseText);
      setAllPhoto(responseData);
      console.log(responseData);
      getCategory();
      getCollection();
      getProfile();
      // debugger;
    }
  };
  xhr.open("GET", url.url + "/api/Photo/GetPhotoByUserId/" + user.u_id);
  xhr.send();
};

  useEffect(() => {
    // debugger;
  

    fetchData();
  }, []);


  


  const setPublic = (id) => {
    debugger;
    const data = {
  
      "p_id" : id,
       "u_id" : user.u_id
   }

   const xhr = new XMLHttpRequest();
   xhr.onreadystatechange = () => {
     if (xhr.readyState === 4 && xhr.status === 200) {

       const responseData = JSON.parse(xhr.responseText);
 
       debugger;
     }
   };
   xhr.open("POST", url.url + "/api/Photo/setPublic");
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(JSON.stringify(data));

   

  };

  const setPrivate = (id) => {
    debugger;
   const data = {
  
      "p_id" : id,
       "u_id" : user.u_id
   }

   const xhr = new XMLHttpRequest();
   xhr.onreadystatechange = () => {
     if (xhr.readyState === 4 && xhr.status === 200) {

       const responseData = JSON.parse(xhr.responseText);
 
       debugger;
     }
   };
   xhr.open("POST", url.url + "/api/Photo/setPrivate");
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.send(JSON.stringify(data));

  };



  const setToPrivateCollection = (pid,ccid,ccname) => {
    debugger;
    const data = {
      "cc_id" :ccid ,
      "cc_name": ccname
    };
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {

        const responseData = JSON.parse(xhr.responseText);
  
        debugger;
      }
    };
    xhr.open("POST", url.url +"/api/Photo/setPhotoToCollection/"+ pid);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

  };

  const setToPublicCategory =  (pid,pcid,pcname)  => {
    const data = {
      "pc_id": pcid,
      "pc_name":pcname
        };
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {

        const responseData = JSON.parse(xhr.responseText);
  
        debugger;
      }
    };
    xhr.open("POST", url.url +"/api/Photo/setPhotoToCategory/"+ pid);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

  };

const tackBackUP = () =>
{
  const data = {
    "u_id": user.u_id,
      }; 

  const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {

        const responseData = JSON.parse(xhr.responseText);
        fetchData();
        debugger;
      }
    };
    xhr.open("POST", url.url + "/api/Photo/backupPhoto");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
};


const deletePhoto = (id) =>
{
  const data = {
    "p_id" : id,
    "u_id" : user.u_id
      }; 

  const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {

        const responseData = JSON.parse(xhr.responseText);
        fetchData();

        // debugger;
      }
    };
    xhr.open("POST", url.url + "/api/Photo/deletePhoto");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
};


const [image, setImage] = useState('');

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
    debugger;
    handleApi()
    
  }

  function handleApi() {
    debugger;
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      
      axios.post( url.url + '/api/Photo/UploadPhoto/'+user.u_id, formData)
        .then((res) => {
          debugger;
          console.log(res);
        //   toast.success('Photo Upload Successfull !', {
        //     position: toast.POSITION.TOP_RIGHT,
        //     autoClose: 2000, 
        // });
  
        //   setTimeout(() => {
        //     history.push("/yourProfile");
        //   }, 3000);
        })
        .catch((error) => {
          console.error(error);
          debugger;
        });
    } else {
      console.log('No image selected');
    }

    // axios.get('http://localhost:54610/api/Photo/getPhotos')
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
} 


const setProfile=(id)=>
{

  const data = {
    "p_id" : id,
    "u_id" : user.u_id
      }; 


  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {

      const responseData = JSON.parse(xhr.responseText);
      getProfile();


      // debugger;
    }
  };
  xhr.open("POST", url.url + "/api/Photo/setProfile");
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));

};






  return (
    <div className='container-fluid'>

      <div className='uploadbutton'>
        <Link to="/editDetails"><button><h4>EditProfile</h4></button></Link>
      </div>

      <div className='mybox-1'>

        <div className='myimage'>
        <img src={userProfile != null ? userProfile.p_name : "https://us.123rf.com/450wm/martialred/martialred1608/martialred160800018/61263271-compte-d-utilisateur-profil-cercle-ic%C3%B4ne-plat-pour-les-applications-et-les-sites-web.jpg?ver=6" }
          alt="profile" />
          
          <label style={{ display: 'inline-block', position: 'relative' }}>
            <EditIcon  type="file"  name="file"
              style={{ marginTop: '-40px', marginLeft: '150px', cursor: 'pointer' }}
            />
            <input type="file" name="file"  onChange={handleImage} style={{ display: 'none' }}
         
            />
          </label>
        </div>
        <div className='username'>
          <h2>{user.u_first_name} {user.u_last_name}</h2>
        </div>

      </div>

      <div className='mybox-2'>
        <Link to="/yourProfile"><h3>All</h3></Link>
        <Link to="/collection"><h3>Collection</h3></Link>
        <Link to="/downloads"><h3>Downloads</h3></Link>
        <Link to="/public"><h3>Public</h3></Link>
      </div>
      <a onClick={()=>{tackBackUP()}} >BackUp</a>
      <div className='parentdiv' >
     

        {allPhoto.map((item, index) =>
        (

          <div key={item.p_id} >

            <div className='childdiv'>
              {/* <i className="bi bi-three-dots-vertical menuIcon1" style={{ color: 'white',textShadow: '0px 0px 10px black'}}
                 onClick={() => ShowMenu(item.p_id)} 
                ></i> */}
              <Menu>
                <MenuButton
                  as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='ghost' color='white' filter='revert'
                  _hover={{ bg: 'white', color: "black", }}
                  _active={{ bg: 'white', color: "black",}}
                />
                <MenuList>
                  <MenuItem onClick={()=>{setProfile(item.p_id)}}> SetProfile</MenuItem>
                  <MenuItem onClick={()=>{setPublic(item.p_id)}}> SetPublic</MenuItem>
                  <MenuItem onClick={()=>{setPrivate(item.p_id)}}> SetPrivate </MenuItem>
                  <MenuItem onClick={()=>{getCollection()}} >Add Collection
                                <MenuList>
                                {allCollection.map((coll, index) =>
                                  ( 
                                    <MenuItem  
                                    onClick={()=>{setToPrivateCollection(item.p_id,coll.cc_id,coll.cc_name)}}
                                    style={{fontSize:'10'}}
                                    > {coll.cc_name} </MenuItem>
                                  ))}
                                
                                </MenuList>
                    </MenuItem>
                  <MenuItem onClick={()=>{getCategory()}}  > AddToPublicCategory 
                              <MenuList>
                                {allCategory.map((cat, index) =>
                                  ( 
                                    <MenuItem  
                                    onClick={()=>{setToPublicCategory(item.p_id,cat.pc_id,cat.pc_name)}}
                                    style={{fontSize:'10'}}
                                    > {cat.pc_name} </MenuItem>
                                  ))}
                                
                                </MenuList>
                  
                  </MenuItem>
                  <MenuItem onClick={()=>{deletePhoto(item.p_id)}}> Delete</MenuItem>

                </MenuList>
              </Menu>
              <div>
                <img src={item.p_name} alt="img" className='img' style={{ height: "100%", borderRadius: 10 }}></img>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default YourProfile