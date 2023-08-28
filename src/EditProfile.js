// import React, { useState, useEffect } from 'react';
// import { Form } from 'react-bootstrap';
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

// function EditProfile() {
    
//   const user = JSON.parse(localStorage.getItem("login"));

// //   const [firstname, setFirstName] = useState(user.u_firstname);
// //   const [lastname, setLastName] = useState(user.u_lastname);
// //   const [email, setEmail] = useState(user.u_email);

//   const [useredit , setUserEdit] = useState({
//     firstname:"user.u_firstname",
//     lastname:"user.u_lastname",
//     email:"user.u_email"
//   });

//   const {id} = useParams();

// //   useEffect(() => {
// //     if (user) {
// //       setFirstName(user.u_first_name);
// //       setLastName(user.u_last_name);
// //       setEmail(user.u_email);
// //     }
// //   }, [user]);

// useEffect(()=>{

// const edituser = async()=>{
//     const reqdata = await fetch(`http://localhost:54610/api/User/UpdateUser/${id}`);
//     const res = await reqdata.json();
//     setUserEdit(await res);
// }
// edituser();

// },[])


// const  handleEdit =(e)=>{
//     setUserEdit({...useredit,[e.target.name]:e.target.value});
// }



//   return (
//     <div>
//       <h2>Edit Profile</h2>
//       <Form>
//         <Form.Group controlId="firstName">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="firstname"
//             value={useredit.first_name}
//             onChange={(e)=>handleEdit(e)}
//           />
//         </Form.Group>
//         <Form.Group controlId="lastName">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="lastname"
//             value={useredit.last_name}
//             onChange={(e)=>handleEdit(e)}
//           />
//         </Form.Group>
//         <Form.Group controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={useredit.email}
//             onChange={(e)=>handleEdit(e)}
//           />
//         </Form.Group>
//  <br/>
//  <br/>

//  <div>
//     <button>update</button>
//  </div>


//       </Form>
//     </div>
//   );
// }

// export default EditProfile;
import React, { useState} from 'react';
import { Form } from 'react-bootstrap';

function EditProfile() {
  const user = JSON.parse(localStorage.getItem("login"));
  const [useredit, setUserEdit] = useState({
    u_first_name: user.u_first_name,
    last_name: user.u_last_name,
    email: user.u_email
  });



  const handleEdit = (e) => {
    setUserEdit({ ...useredit, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
        debugger;
      const response = await fetch(`http://localhost:54610/api/User/UpdateUser`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(useredit),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        // You can perform further actions here after successful update
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <Form>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="u_first_name"
            value={useredit.u_first_name}
            onChange={handleEdit}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={useredit.last_name}
            onChange={handleEdit}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={useredit.email}
            onChange={handleEdit}
          />
        </Form.Group>
        <br />
        <br />
          <div>
          <button onClick={handleUpdate}>Update</button>
        </div>
      </Form>
    </div>
  );
}

export default EditProfile;
