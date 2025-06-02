// src/context/AuthContext.js
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const changeToken = (value)=>{
    if(value!=null){
        setToken(value);
    }
    else{
        setToken(null);
    }
        
  }


  return (
    <AuthContext.Provider value={{ token,changeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
