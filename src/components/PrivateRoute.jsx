import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ 
    component: Component, 
    isAuthenticated, 
    redirectTo,
  
  }) => {
    // console.log('isAuthenticated:', isAuthenticated);
  return (
  
    isAuthenticated ? <Component /> : <Navigate to={ redirectTo }/>
  
  )
  }

export default PrivateRoute;