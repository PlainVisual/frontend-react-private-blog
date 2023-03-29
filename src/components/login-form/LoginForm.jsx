import React from "react";
import { useState } from "react";

function LoginForm({ setAuth, navigate }) {

  const [ formState, setFormState ] = useState({

    username: "",
    password: "",

  });

  function handleFormChange(e) {

    const changedFieldName = e.target.name;
       
    console.log("changedFieldName:", changedFieldName);
    
    setFormState({

      ...formState,
      [changedFieldName]: e.target.value,

    });

  }

  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = formState;
    setAuth( username, password );
    navigate("/blogposts");
    console.log(formState)
  }

  return (



    <>
      <form onSubmit={ handleSubmit }>
            <fieldset>
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                autoComplete="username" 
                name="username" 
                id="username"
                placeholder="Enter username"
                value={ formState.username }
                onChange={ handleFormChange }
              />
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                autoComplete="current-password" 
                name="password" 
                id="user-password" 
                placeholder="Enter password"
                value={ formState.password } 
                onChange={ handleFormChange }
              />
            </fieldset>
            <button type="submit">Login</button>
      </form>
    </>


  )

}

export default LoginForm;