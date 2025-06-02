
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';//to use the token in context

// const ProtectedRoute = ({ children }) => {
//   const {token} = useAuth();
//   return (token ? children : <Navigate to="/" />);
// };

// export default ProtectedRoute;
// components/ProtectedRoute.js
// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "./AuthContext";

// const ProtectedRoute = ({ children }) => {
// //   const { token } = useContext(AuthContext);

//   if (token) {
//     const savedToken = localStorage.getItem("token");
//     if(savedToken != null){

//         return children;
//     }
//   }
//   else{

//       return <Navigate to="/" />
//     }
  
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check for token or authentication flag
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
