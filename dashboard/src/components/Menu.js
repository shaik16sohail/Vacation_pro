import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import { useCookies } from "react-cookie";
import { useUser } from "../UserContext";
const Menu = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isBoxVisible, setIsBoxVisible] = useState(false);
    const handleDivClick = () => {
        setIsBoxVisible(!isBoxVisible); // Toggle visibility
    };
  // const user=useUser();
  const { user, email } = useUser();
  const handleLogout = () => {
    // Remove the token cookie
    removeCookie("token", { path: "/" });
    // Redirect to the login page on the landing page app
    window.location.replace("http://localhost:3000/login"); // Adjust URL if needed
  };

    const[selectedMenu,setSelectedMenu]=useState(0);
    const[isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);
    const handleMenuClick=(index)=>{
        setSelectedMenu(index);
    }
    const handleprofileClick=(index)=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }
    const menuClass="menu";
    const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
                style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}
            >
                <p className={selectedMenu==0?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link
                style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}
            >
                <p className={selectedMenu==1?activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link
                style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}
            >
                <p className={selectedMenu==2?activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link
                style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}
            >
                <p className={selectedMenu==3?activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link
                style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}
            >
                <p className={selectedMenu==4?activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link
                style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}
            >
                <p className={selectedMenu==5?activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div>
            {/* <div onClick={handleDivClick} style={{ cursor: 'pointer', padding: '10px' }}>
                {user}
            </div> */}
            <div className="profile" onClick={handleDivClick} >
          <div className="avatar">ZU</div>
          <p className="username">{user}</p>
        </div>

        {isBoxVisible && (
                <div style={{
                    position: 'fixed',
                    top: '70px',
                    right: '20px',
                    padding: '10px',
                    // border: '1px solid black',
                    borderRadius: '15px',
                    width: '150px',
                    backgroundColor: '#E0E0E0',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    zIndex: 1000, // Ensures the dialog is above other elements
                }}>
                    {/* <p style={{ margin: '0 0 10px 0' }}>Are you sure you want to log out?</p> */}
                    <p style={{fontSize:"15px"}}>{email}</p>
                    <button onClick={handleLogout}>Logout</button>
                    {/* <button onClick={() => setIsBoxVisible(false)} style={{ marginLeft: '10px' }}>Cancel</button> */}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Menu;