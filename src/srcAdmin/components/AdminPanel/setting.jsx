import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './setting.css'

function EditProfile() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        bio: '',
    });

    const [isError, setIsError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('/User/UpdateUser/${1}'); // Replace with your API endpoint
            setUserData(response.data);
        } catch (error) {
            setIsError('Error fetching user data.');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setUserData((prevUserData) => ({
            ...prevUserData,
            profilePicture: imageFile
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('firstName', userData.u_first_name);
        formData.append('lastName', userData.u_last_name);
        formData.append('email', userData.u_email);
        formData.append('bio', userData.u_about);
        formData.append('profilePicture', userData.profilePicture);

        try {
            await axios.put('/User/UpdateUser/${1}', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }); // Replace with your API endpoint
            setIsSuccess(true);
        } catch (error) {
            setIsError('Error updating profile.');
        }
    };

    return (
        <main className='main-container'>
              <div className="edit-profile">
            <h2>Edit Profile</h2>
            {isError && <div className="error">{isError}</div>}
            {isSuccess && <div className="success">Profile updated successfully.</div>}
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Bio:</label>
                    <textarea
                        name="bio"
                        value={userData.bio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Profile Picture:</label>
                    <input
                        type="file"
                        accept="image/*"
                        name="profilePicture"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
        </main>
      
    );
}

export default EditProfile;
