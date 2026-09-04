import React, {useEffect, useState} from 'react'
import {useNavigate, useRoutes} from 'react-router-dom'


// pages list 
// import Dashboard from "./components/dashboard/Dashboard"
import Profile from "./components/user/Profile"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import {useAuth} from "./authContext"
import Home from "./components/Home";


const ProjectRoutes = () => {
    const { currentUser: currUser, setCurrentUser } = useAuth();
    const navigate = useNavigate();


    useEffect (() =>{
        const userIdTemp = localStorage.getItem('userId');

        if(userIdTemp && !currUser){
            setCurrentUser(userIdTemp);
        }

        if(!userIdTemp && !["/auth", "/signup"].includes(window.location.pathname)){
            navigate("/auth");
        }

        if(userIdTemp && window.location.pathname === "/auth"){
            navigate("/");
        }
    },[currUser, navigate, setCurrentUser]);


    let element = useRoutes([
      { path: "/*", element: <Home /> },
      { path: "/auth", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/profile", element: <Profile /> },
    ]);

    return element;
}


export default ProjectRoutes;
