import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/Login-form/LoginForm";
import "./login.css";

function Login({ setAuth }) {

  const navigate = useNavigate();

  function handleAuth(username, password) {
    setAuth({ username, password });
    navigate("/blogposts");

  }

  return (

    <>
    
    
      <div className="outer-container login-outer">
        <div className="inner-container">
          <main className="login-page">
              <h2>Login pagina</h2>
              <p>Druk op de knop om je in te loggen</p>
              
            <LoginForm 
                setAuth={ handleAuth }
                navigate={ navigate }
            />
          </main>
        </div>
      </div>
    

  </>


  )

}

export default Login;