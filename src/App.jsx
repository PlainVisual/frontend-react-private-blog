
import './App.css'
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/home-page/Home';
import Blogposts from './Pages/blog-post/Blogposts';
import Blogpage from './Pages/blog-singlepage/Blogpage';
import Login from './Pages/login-page/Login';
import NotFound from './Pages/404-page/NotFound';
import userAuth from './helperfunction/auth';
// components
import Navigation from './components/navigation/Navigation';
import PrivateRoute from './components/PrivateRoute';
import './App.css';


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

 
  const setAuth = ({ username, password }) => { 
    const users = userAuth();
    // console.log(users);
    // console.log(username, password);
    // console.log(isAuthenticated);
    
    
    const authenticatedUser = users.find(
      
      user => user.username === username && user.password === password
      
    );

    if (authenticatedUser) {
      toggleIsAuthenticated(true);
    }

    else {
      toggleIsAuthenticated(false);
    }

    // console.log("user", authenticatedUser);
    
  };

  return (
    <>
      
      <Navigation 
      isAuth={isAuthenticated}
      setAuth={setAuth}
      />
      
      <Routes>
        <Route 
          path="/" 
          element={ <Home /> }
        />
        <Route 
          path="/blogposts"
          element={
            <PrivateRoute  
              isAuthenticated={isAuthenticated}
              component={ Blogposts }
              redirectTo="/login"
            > 
            </PrivateRoute>
            }
        />
        <Route 
          // dynamische link naar single page
          path="/blogposts/:id" 
          element={
            <PrivateRoute  
              isAuthenticated={isAuthenticated}
              component={ Blogpage }
              redirectTo="/login"> 
            </PrivateRoute>
            }
        />
        <Route 
          path="/login" 
          element={ <Login setAuth={setAuth}
                            isAuthenticated={isAuthenticated}/> }
        />
        <Route 
          path="*" 
          element={ <NotFound /> }
        />
      </Routes>

    </>
  );
}


export default App;