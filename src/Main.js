import React, { Component, useState } from 'react';
import Header from './component/header/Header.jsx';
import Nav from './component/nav/nav.jsx';
import Body from './component/body/body.jsx';
import Footer from './component/footer/footer.jsx';
import ContactUs from './component/contactUs/contactUs.jsx';

import { Switch,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
// import Login from './component/login/login.jsx';
// import Register from './component/register/register.jsx';
// import Upload from './component/upload/upload.jsx';
import editDetails from './component/editDetails/editDetails.jsx';
import Collection from './component/collection/Collection.jsx';
import ForgetPassword from './component/forgetPassword/ForgetPassword.jsx';
import NewPassword from './component/newPassword/NewPassword.jsx';
import UserProfile from './component/popular/OtherProfile.jsx';
import Report from './component/report/Report.jsx';
import YourProfile from './component/yourProfile/YourProfile.jsx';
import OtherProfile from './component/popular/OtherProfile.jsx';
import Latest from './component/latest/Latest.jsx';
import AboutMe from './component/aboutMe/AboutMe.jsx';
import Download from './component/download/Download.jsx';
// import EditProfile from './EditProfile.js';
import UploadImage from './component/uploadImage/UploadImage.jsx';
import LoginForm from './component/LoginForm/LoginForm.jsx';
import Registration from './component/Signup/Signup.jsx';
import AddCollection from './component/addCollection/AddCollection.jsx';
import Public from './component/public/Public.jsx';
import DashBoard from './srcAdmin/components/AdminPanel/Dashboard.jsx'
import adminAboutUs from '../src/srcAdmin/components/AdminPanel/AboutUs.jsx';
import adminsetting from './component/editDetails/editDetails.jsx';
import Sidebar from './srcAdmin/components/Common/Sidebar.jsx';

function Main()
{

    const [showHeader, setShowHeader] = useState(true);
    const usercheck = JSON.parse(localStorage.getItem("login"));
    const [user, setUser] = useState(null);

    // setUser(usercheck);

            return( <div>
                        
                        <Header></Header>
                                              
                        <Nav></Nav>
                       

                        <Switch>

                        <Route exact path="/" component={Body}/>
                        {/* <Route exact path="/login" component={Login}/> */}
                        <Route exact path="/login" component={LoginForm}/>
                        {/* <Route exact path="/register" component={Register}/> */}
                        <Route exact path="/register" component={Registration}/>
                        <Route exact path="/forgotPassword" component={ForgetPassword}/>
                        <Route exact path="/NewPassword" component={NewPassword}/>
                        {/* <Route exact path="/upload" component={Upload}/> */}
                        <Route exact path="/upload" component={UploadImage}/>
                        <Route exact path="/contactUs"  component={ContactUs}/>
                        <Route exact path="/editDetails" component={editDetails}/>
                        {/* <Route exact path="/editDetails" component={EditProfile}/> */}
                        <Route exact path="/userProfile" component={UserProfile}/>
                        <Route exact path="/report" component={Report}/>
                        <Route exact path="/yourProfile" component={YourProfile}/>
                        <Route exact path="/popular" component={OtherProfile}/>
                        <Route exact path="/latest" component={Latest}/>
                        <Route exact path="/aboutMe" component={AboutMe}/>
                        <Route exact path="/downloads" component={Download}/>
                        <Route exact path="/collection" component={Collection}/>
                        <Route exact path="/addCollection" component={AddCollection}/>
                        <Route exact path="/public" component={Public}/>
                        <Route exact path="/admin" component={DashBoard}/>
                        <Route exact path="/adminAboutUs" component={adminAboutUs}/>
                        <Route exact path="/adminsetting" component={adminsetting}/>
                        <Route exact path="/Sidebar" component={Sidebar}/>

                        
                       
                        </Switch>
                    
                        <Footer></Footer>
                    </div>
                );
            
 }



export default Main;