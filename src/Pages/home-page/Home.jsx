import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

function Home() {

  return (

    <>
      <div className="outer-container">
          <div className="inner-container">
            <main className="home-page">
              <div className="header-image"></div>
              <div className="header-content">
              <h1>Webdev News</h1>
              <Link className="nav-link" to="/Login">Go to Login</Link>
              </div>
              
            </main>
          </div>
      </div>     
      
    </>



  )

}

export default Home;