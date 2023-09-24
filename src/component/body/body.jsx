import '../body/body.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../index.js';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import url  from '../url.json';

function Body(props) {
  const [showMenuId, setShowMenuId] = useState([]);
  const [data, setData] = useState([]);
  const [mdata, msetData] = useState([]);
  const [like, setlike] = useState([]);
  var uforlike = [];
  var c = [];
  const [ulike, setUlike] = useState([]);
  const [showImageId, setShowImageId] = useState(null);

  // const user = JSON.parse(localStorage.getItem('login'));

  const { user } = useContext(AppContext);

//  const prop =  props.location.state;

  debugger;
 
  console.log(url.url);
  

  const history = useHistory();


  if (localStorage.getItem("data") != null) {
    const localData = localStorage.getItem('data');
    localStorage.removeItem('data');
    const parsedData = JSON.parse(localData);
    console.log("Body");
    setData(parsedData);
    console.log(parsedData);
  }




  const getLikePhoto = () => {
    // debugger;

    if (user != null) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          //  debugger;
          const responsePhoto = JSON.parse(xhr.responseText);

          var arr = responsePhoto.list.map(l => l);

          // console.log(like);
          const lengthDifference = uforlike.length - arr.length;
          const zeroArray = Array(lengthDifference).fill(0);

          setlike([...arr, ...zeroArray]);
          c = [...arr, ...zeroArray];
          // console.log(like);
          console.log(data);

          debugger;
        }
      };
      xhr.open("GET", url.url + "/api/Photo/getLike/" + user.u_id);
      xhr.send();
    }
    else {
      setlike([]);
    }
  };

  const fetchData = () => {
    // debugger;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // debugger;
        const responseData = JSON.parse(xhr.responseText);
        setData(responseData);

        var d = responseData.map(i => i.p_id);
        uforlike = [...d];
        msetData(responseData);
        console.log(responseData);
        getLikePhoto();
        // debugger;
      }
    };
    xhr.open("GET", url.url + "/api/Photo/getPhotos");
    xhr.send();
  };


  useEffect(() => {
    // debugger;


    fetchData();

  }, [user]);

  const submitLike = (pid) => {
    debugger;
    if (user == null) {
      history.push('/login');
    }
    else {
      console.log(pid);
      const sendLike = {
        u_id: user.u_id,
        p_id: pid
      };
      if (pid !== null) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {

            const responseSendLike = JSON.parse(xhr.responseText);
            console.log(responseSendLike)
            history.push('/');
            debugger;
            fetchData();



          }
        };
        xhr.open("POST", url.url + "/api/Photo/postLike");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(sendLike));
        fetchData();
      }
    }//end of if

  };

  const submitUlike = (pid) => {
    debugger;
    if (user == null) {
      history.push('/login');
    }


    console.log(pid);
    const deleteLike = {
      u_id: user.u_id,
      p_id: pid
    };
    if (pid !== null) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {

          const responseSendLike = JSON.parse(xhr.responseText);
          console.log(responseSendLike)
          // event.target.style.color = 'red';
          history.push('/');
          debugger;
          fetchData();


        }
      };
      xhr.open("POST", url.url + "/api/Photo/deleteLike");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(deleteLike));
      fetchData();

    }
  };





  // debugger;
  return (
    <div style={{ paddingLeft: 100, paddingRight: 100, textAlign: 'center' }}>

      <div className='parentdivs' >

        {data.map((item, index) =>
        (

          <div key={item.p_id} >

            <div className='childdiv'>

              

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
                  style={{ marginRight: '-20px'}}
                />
                <MenuList>
                  <MenuItem onClick={() => history.push('/popular', item.u_id)} >
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => history.push('/report', item.p_id)} >
                    Report
                  </MenuItem>
                  <MenuItem >
                  <a href={item.p_name} download> Download </a>
                  </MenuItem>
                </MenuList>
              </Menu>

              {!like.includes(item.p_id)

                ?
                <i class="bi bi-heart-fill  heartIcon" style={{ color: 'white', textShadow: '0px 0px 10px black' }}
                  onClick={() => submitLike(item.p_id)}></i>
                :
                <i class="bi bi-heart-fill heartIcon" style={{ color: 'red', textShadow: '0px 0px 10px black' }}
                  onClick={() => submitUlike(item.p_id)} ></i>
              }

              <div>
                <img src={item.p_name} alt="img" className='img' style={{ height: "100%", borderRadius: 10 }}></img>
              </div>

            </div>
          </div>
        ))
        }
      </div>

      <div style={{ paddingLeft: '45%', paddingRight: '45%' }}>
        <div style={{ borderStyle: 'solid', borderColor: 'black', borderRadius: '20px' }}>DiscoverMore</div>
      </div>

    </div>

  );
}

export default Body;
