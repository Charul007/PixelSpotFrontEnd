
import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import url  from '../url.json';


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
      const response = await fetch(url.url+`/api/User/UpdateUser`, {
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
