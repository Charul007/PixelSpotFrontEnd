import React, { useState } from 'react';
import '../uploadImage/UploadImage.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';




function UploadImage() {
  const history = useHistory();
  const [image, setImage] = useState('');
  const user = JSON.parse(localStorage.getItem("login"));

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  function handleApi() {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
      
      axios.post('http://localhost:54610/api/Photo/UploadPhoto/'+user.u_id, formData)
        .then((res) => {
          console.log(res);
          toast.success('Photo Upload Successfull !', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000, 
        });
  
          setTimeout(() => {
            history.push("/yourProfile");
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log('No image selected');
    }

    axios.get('http://localhost:54610/api/Photo/getPhotos')
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
} 



  

  return (
    <div className='uuploadbox '>
                   <ToastContainer />

      <input type="file" name='file' onChange={handleImage} style={{border:'none'}}/>
      <br/>
      <br/>
      <button onClick={handleApi} style={{backgroundColor:'green'}}> Submit</button>
    </div>
  );
}

export default UploadImage;
