import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navigation.css";

function Navigation({ isAuth, setAuth }) {

  const navigate = useNavigate();

  function handleLogout() {
    setAuth(false);
    navigate("/");

  }

  return (

    <>
    <div className="outer-container nav-outer">
      <div className="inner-container nav-inner">
          <nav>
              <ul>
              <li>
                <NavLink 
                  to="/">
                  Home
                </NavLink>
              </li>

              <li className={ !isAuth ? "nav-logout" : ""}>
                <NavLink to="/blogposts">Blogposts</NavLink>
              </li>

              <li className={ isAuth ? "nav-login" : ""}>
                <NavLink to="/login">Login</NavLink>
              </li>
              <button 
                className={ !isAuth ? "nav-logout" : ""}
                onClick={ handleLogout } >uitloggen</button>
              </ul>
            </nav>
            
            </div>
      </div>

    </>

  )

}


export default Navigation;