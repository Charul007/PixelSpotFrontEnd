import '../collection/Collection.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import url  from '../url.json';


function Collection()
{


  const history = useHistory();
  if(localStorage.getItem("login") == null)
  {
    history.push('/login');
  }

   const user = JSON.parse(localStorage.getItem("login"));

  const [collection, setCollection] = useState([]);
  const [collectionPhoto, setCollectionPhoto] = useState([]);
  const [count, setCount] = useState();
  const [userProfile, setUserProfile] = useState([]);





  
const getProfile=()=>
{
// debugger;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {

      const responseData = JSON.parse(xhr.responseText);
        setUserProfile(responseData[0]);
      // debugger;
    }
  };
  xhr.open("GET", url.url +"/api/Photo/getProfile/"+user.u_id);
  xhr.send();

};

  useEffect(() => {
    //  debugger;
          const fetchData = () => {
            //  debugger;
                  const xhr = new XMLHttpRequest();
                  xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
              
                      const responseData = JSON.parse(xhr.responseText);
                      setCollection(responseData.list);
                      console.log(collection);
                      getProfile();
                      
              // debugger;
                    }
                  };
                  xhr.open("GET", url.url +"/api/Photo/getCollectionByUserId/"+user.u_id);
                  xhr.send();
          };

          fetchData();
    }, [collection,collectionPhoto,count]);


    const [ccid, seccid] = useState("");

    const getCollectionById = (cId) =>
    {
      seccid(cId);
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
  // debugger;
          const responseData = JSON.parse(xhr.responseText);
          setCollectionPhoto(responseData);
          setCount(responseData.length);
          
  // debugger;
        }
      };
      xhr.open("GET", url.url +"/api/Photo/photoUserCollection?uId="+user.u_id+"&ccId="+cId);
      xhr.send();

    };

      const sendCollection =(event) =>
      {
        // debugger;
        event.preventDefault();
        const form = event.target;
    
        const formData = new FormData(form);
        const collectionName = (formData.get('collectionName'));
        console.log("colection",collectionName);
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                alert('Added to collection');
              }
            };
            xhr.open("POST", url.url +"api/Photo/setCollection/"+user.u_id);
            xhr.send(JSON.stringify(formData));


      };




  const deleteCollection = (ccname) =>
  {
    debugger;

    const data =  {
      "cc_name" :  ccname
    };

    debugger;

    const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
  // debugger;
          const responseData = JSON.parse(xhr.responseText);
          history.push('/collection');
          
  // debugger;
        }
      };
      xhr.open("POST", url.url +"/api/Photo/removeCollection/"+ user.u_id);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(data));

  };


  const removeFromCollection = (pid) =>
  {
    const data =  {
      "pId" :  pid
    };


    const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
  // debugger;
          const responseData = JSON.parse(xhr.responseText);
          getCollectionById(ccid);
          history.push('/collection');
          
  // debugger;
        }
      };
      xhr.open("POST", url.url +"/api/Photo/removePhotoFromCollection/");
      xhr.setRequestHeader("Content-Type", "application/json");
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

        </div>
        <div className='username'>
         <h2>{user.u_first_name} {user.u_last_name}</h2>
        </div>

    </div>

    <div className='mybox-2'>
      <Link to="/yourProfile"><h3>All</h3></Link>
      <Link to="/collection"><h3>Collection</h3></Link>
      <Link to="/downloads"><h3>Downloads</h3></Link>
      <Link to="/Public"><h3>Public</h3></Link>
    </div>
    <div style={{textAlign:'end'}}>
      <div style={{cursor:'pointer'}} onClick={() => { history.push('/addCollection')}}>AddCollection</div>
    </div>

    <div  className='parentdiv' >
    {collection.map((item, index) => 
          (

          <div key={item.cc_id} >
            
            <div>
               {/* <div className="menuIcon2"
                 onClick={() => deleteCollection(item.cc_name)}
                >Delete</div> */}
                 <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='ghost'
                  color='white'
                  filter='revert'
                  _hover={{
                    bg: 'white',
                    color: "black",
                  }}
                  _active={{
                    bg: 'white',
                    color: "black",
                  }}
                  style={{marginTop:'10px'}}
                />
                <MenuList>
                  <MenuItem onClick={() => deleteCollection(item.cc_name)}>
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            <div className='collection' onClick={() => { getCollectionById(item.cc_id) }}>
                  {item.cc_name}
                </div>
            </div>
          </div>
          ))
        }
</div>
<hr style={{bord:'solid'}} />
<div className='parentImgDiv' style={{textAlign:'start'}}>
{collectionPhoto.map((item, index) => 
          (

          <div key={item.p_id} >
            
            <div>
                <div className='imageDiv'>
                <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='ghost'
                  color='white'
                  filter='revert'
                  _hover={{
                    bg: 'white',
                    color: "black",
                  }}
                  _active={{
                    bg: 'white',
                    color: "black",
                  }}
                  style={{position:'absolute'}}
                />
                <MenuList>
                  <MenuItem  onClick={()=>{removeFromCollection(item.p_id)}} >
                    Remove
                  </MenuItem>
                </MenuList>
              </Menu>
                  <img  src={item.p_name} alt='img' style={{height:'inherit',borderRadius:'0%'}} ></img>
                </div>

            </div>
          </div>
          ))
        }

        {count !== 0  ? <div></div> : <div>Empty</div>}
</div>


</div>
  )
}

export default Collection