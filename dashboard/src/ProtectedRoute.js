// ProtectedRoute.js
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie
import { UserContext } from './UserContext'; 
const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // console.log("Cookies on Dashboard:", document.cookie);
    // setTimeout(() => {
    //     console.log("Cookies on Dashboard:", document.cookie);
    //   }, 500);
    useEffect(()=>{
        axios.post("http://localhost:8080/",{},{
            withCredentials: true,
          }).then((res)=>{
            let some=res.data.status;
            
          if(!some)
            window.location.replace("http://localhost:3000/login");
          else{
            setUser(res.data.user);
            setEmail(res.data.email);
          }
            
        }).catch((error) => {
            console.error("Error fetching user data:", error);
            // Handle error (optional)
        })
        .finally(() => {
            setIsLoading(false); // Set loading to false after request
        });
      },[]);
      if (isLoading) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or placeholder
    }

      return (
        <UserContext.Provider value={{user,email}} >
            {children}
        </UserContext.Provider>
    );
};

export default ProtectedRoute;
