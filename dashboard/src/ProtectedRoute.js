// ProtectedRoute.js
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie

const ProtectedRoute = ({ children }) => {
    console.log("Cookies on Dashboard:", document.cookie);
    setTimeout(() => {
        console.log("Cookies on Dashboard:", document.cookie);
      }, 500);
    useEffect(()=>{
        axios.post("http://localhost:8080/",{},{
            withCredentials: true,
          }).then((res)=>{
            let some=res.data.status;
          console.log(res.data.status);
          if(!some)
            window.location.replace("http://localhost:3000/login");
        })
      },[]);
  return children;
};

export default ProtectedRoute;
