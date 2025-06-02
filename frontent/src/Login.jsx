


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { token, changeToken } = useContext(AuthContext);
  const [LoginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { email, password } = LoginInfo;
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.success) {
        toast.success("LoggedIn successfully");
        localStorage.setItem("user-name",data.name);
        localStorage.setItem("token", data.jwtToken);
        // if (changeToken) changeToken(data.jwtToken);
        setTimeout(() => navigate("/home"), 1000);
      }

    } catch (error) {
      toast.error(error.message || "Login failed. Check credentials.");
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>CP DUEL</h1>
        <span className="login-header-sub">Competitive Programming Platform</span>
      </header>
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handlesubmit}>
          <input
            className="login-input"
            type="email"
            name="email"
            value={LoginInfo.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            className="login-input"
            type="password"
            name="password"
            value={LoginInfo.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button className="login-button" type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;