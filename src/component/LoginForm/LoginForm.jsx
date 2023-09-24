import React, { useState } from 'react';
import '../LoginForm/Login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AppContext } from '../../index.js' ;
import url  from '../url.json';


function LoginForm() {

  const history = useHistory();
  const userContext = useContext(AppContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [selectedRole, setSelectedRole] = useState('user');

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!user.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!user.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    var userobject = { u_email : user.email ,
    u_password : user.password};

  const apiUrl = selectedRole === 'admin' ? url.url+'/api/Admin/Login' : url.url+'/api/User/Login';


    if (validateForm()) {
      // debugger;
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userobject),
      })
        .then((response) => {
          if (response.ok) {
            debugger;
           
            return response.json();
          } else {
            throw new Error('Login failed');
          }
        })
        .then((data) => {
          console.log('Login successful:', data);

          localStorage.setItem("login",JSON.stringify(data));
          userContext.setUser(data);

              toast.success('Login Successfull !', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000, 
            });
        
          if (selectedRole === 'admin') {
            localStorage.setItem("login",JSON.stringify(data.User));
           history.push("/admin");
          } else {
            history.push("/");
          }
         
          // var data1 = JSON.parse(data);
         
          
          console.log(data); //debugger;

          setUser({
            email: '',
            password: '',
          });
          setErrors({
            email: '',
            password: '',
          });
        })
        .catch((error) => {
          console.error('Error during login:', error);
          debugger;
          toast.success('Login fail ! Try Again', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000, 
        });
        });
    } else {
      console.log('Form has validation errors');
    }
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };


  const forgotPassword = () =>
  { 
 
  const xhr = new XMLHttpRequest();
 
  xhr.onreadystatechange = () => {
 
    if (xhr.readyState === 4 && xhr.status === 200) {
      debugger;
      const responseData = JSON.parse(xhr.responseText);
      console.log(responseData);
      
     
      debugger;
      
    }
  };
  xhr.open('GET',url.url+'/api/Email/email?getEmail='+user.email );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
 
  history.push('/forgotPassword',user);
 
 
 }




  return (
    <div className='llbox-1 '>
      <form  onSubmit={submitForm}>

        <div className='radiobox' style={{cursor:'pointer'}}>
        <label htmlFor='radio'>Role: </label><br></br>
        Customer : {"   "}
        <input style={{cursor:'pointer'}} type="radio" name="role" value="user"  checked={selectedRole === 'user'}  onChange={handleRoleChange}></input>  
        <br></br>
        Admin : {"  "}
        <input style={{cursor:'pointer'}} type="radio" name="role" value="admin" checked={selectedRole === 'admin'} onChange={handleRoleChange}></input>
        </div>
          <br></br>

        <div>
          <label htmlFor='email'>Email: </label><br></br>
          <input
            type='email'
            name='email'
            id='email'
            autoComplete='off'
            value={user.email}
            onChange={handleInputs}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <br />
        <div>
          <label htmlFor='password'>Password:</label><br></br>
          <input
            type='password'
            name='password'
            id='password'
            minLength={6}
            maxLength={20}
            value={user.password}
            onChange={handleInputs}
          />
          {errors.password && <span className='error'>{errors.password}</span>}
        </div>
        <br />
        &nbsp;&nbsp;<small><a onClick = {forgotPassword} >forgotPassword</a></small>

        <br />
        <div>
          <button type='submit' style={{backgroundColor:'green',width:'60px'}}>Login</button>
        </div><br></br>
        <a onClick={() => {history.push('register')}} >SignUp</a>

      </form>
    </div>
  );
}

export default LoginForm;
