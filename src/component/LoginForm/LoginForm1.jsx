import React, { useState } from 'react';
import '../LoginForm/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import url  from '../url.json';



function LoginForm() {
  debugger;

  const history = useHistory();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

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
    if (validateForm()) {
      // debugger;
      fetch(url.url + '/api/User/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userobject),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Login failed');
          }
        })
        .then((data) => {
          console.log('Login successful:', data);

          
         
          // var data1 = JSON.parse(data);
          localStorage.setItem("login",JSON.stringify(data));
          
          console.log(data); 
          debugger;

          toast.success('Login Successfull !', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000, 
        });
  
          setTimeout(() => {
            history.push("/");
          }, 3000);
           
           debugger;
           
         

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
        });
    } else {
      console.log('Form has validation errors');
    }
  };

  return (
    <div className='box-1'>
             <ToastContainer />
      <form  onSubmit={submitForm}>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
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
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={user.password}
            onChange={handleInputs}
          />
          {errors.password && <span className='error'>{errors.password}</span>}
        </div>
        <br />
        <br />
        <div>
          <button type='submit'>Login</button>
        </div>  <br />

        <a onClick={() => {history.push('register')}} >SignUp</a>
      </form>
    </div>
  );
}

export default LoginForm;
