import React , {useState} from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url  from '../url.json';


export default function   () {



  const history = useHistory();

const [user, setUser] = useState({

firstname:"",
lastname:"",
email:"",
password:"",
cpassword:""

});

const [errors, setErrors] = useState({
  cpassword: '',
});

let name , value;
const handleInputs = (e) => {
console.log(e);
name = e.target.name; 
value = e.target.value;
setUser({...user,[name]:value});

if (name === 'password' || name === 'cpassword') {
  validatePasswords(name, value);
}



}

const validatePasswords = (name, value) => {
  if (name === 'password' && user.cpassword && value !== user.cpassword) {
    setErrors({ cpassword: 'Passwords do not match' });
  } else if (name === 'cpassword' && user.password && value !== user.password) {
    setErrors({ cpassword: 'Passwords do not match' });
  } else {
    setErrors({ cpassword: '' });
  }
};
const [allEntry , setAllEntry] = useState([]);

const submitForm = async (e) => {
      
  e.preventDefault();


  if (user.cpassword !== user.password) {
    return; // Prevent form submission if passwords don't match
  }

  performRegistration();
}


const performRegistration = async () => {
  try {
  var userRegister =  {

u_first_name:user.firstname,
u_last_name:user.lastname,
u_email:user.email,
u_password:user.password,
u_role:"CUSTOMER"

  }

// }



 const newEntry = {firstname:user.firstname,lastname:user.lastname,email:user.email,password:user.password,cpassword:user.cpassword};
 setAllEntry([...allEntry , newEntry]);

//  try {
  const response = await fetch(url.url+'/api/User/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userRegister),
  });

  if (response.ok) {

    console.log(response)
    // Handle successful signup
    console.log('User signed up successfully');

    toast.success('Login Successfull !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, 
  });

    setTimeout(() => {
      history.push("/");
    }, 3000);
     
  
  } else {
    // Handle signup error
    console.error('Signup failed:', response.statusText);
  }
} catch (error) {
  // Handle fetch error
  console.error('Error during signup:', error);
}

// Reset the form after submission
setUser({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  cpassword: '',
});





  }
                      //  useEffect(() => {
                      //   console.log(allEntry);
                      // }, [allEntry]);

   
                   
                                      


                    

  return (
    <div>
                   <ToastContainer />

      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase">PixelSpot</h2>
                  <div className="mb-3">
                    <Form onSubmit={submitForm}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          FirstName
                        </Form.Label>
                        <Form.Control  name = "firstname"  type="text" placeholder="Enter Name" value={user.firstname} onChange={handleInputs} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          LastName
                        </Form.Label>
                        <Form.Control  name = "lastname"  type="text" placeholder="Enter Name" value={user.lastname} onChange={handleInputs} />
                      </Form.Group>



                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control name = "email"  type="email" placeholder="Enter email" value={user.email} onChange={handleInputs}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control name = "password"  type="password" placeholder="Password" value={user.password} onChange={handleInputs}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name = "cpassword"  type="password" placeholder="Password" value={user.cpassword} onChange={handleInputs}/>
                      </Form.Group>
                      {errors.cpassword && <span className="error">{errors.cpassword}</span>}
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        {/* <a href="/login" className="text-primary fw-bold"> */}
                        <Link to="/login">Sign In</Link>
                        
                        {/* </a> */}
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
