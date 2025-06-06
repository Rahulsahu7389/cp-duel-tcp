// import React from 'react'
// import { Link , useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify'

// const Signup = () => {
//     const navigate = useNavigate();
//     const [SignUp, setSignUp] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })
//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setSignUp(prev => ({ ...prev, [name]: value }))
//     }
//     const handlesubmit = async (e) => {
//         e.preventDefault()
//         const { name, email, password } = SignUp;
//         if (name === "" || email === "" || password === "") {
//             toast.error("Please fill all the fields")
//             return
//         }
//         try {
//             const url = "http://localhost:8080/auth/signup"
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(SignUp)
//             })
//             const data = await response.json()
//             const { message, success, error } = data
//             if (success) {
//                 toast.success(message)
//                 setTimeout(() => navigate("/"), 1000)
//             } else if (error) {
//                 const details = error?.details?.[0]?.message || error
//                 toast.error(details)
//             } else if (!success) {
//                 toast.error(message)
//             }
//         } catch (error) {
//             toast.error("Something went wrong")
//         }
//     }
//     console.log(SignUp);
//     return (
//         <div>
//             <form onSubmit={handlesubmit} method="post">
//                 <input type="text" value={SignUp.name} onChange={handleChange} name='name' placeholder='Enter name' required /><br />
//                 <input type="email" value={SignUp.email} onChange={handleChange} name='email' placeholder='Enter email' required /><br />
//                 <input type="password" value={SignUp.password} onChange={handleChange} name="password" placeholder='password' required /><br />
//                 <button>SignUp</button>
//             </form>
//             <h3>Already have account?<Link to={'/'}>Login</Link></h3>
//             <ToastContainer />
//         </div>
//     )
// }

// export default Signup



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // Reuse the same CSS as login for consistency

const Signup = () => {
  const navigate = useNavigate();
  const [SignUp, setSignUp] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp(prev => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = SignUp;
    if (name === "" || email === "" || password === "") {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(SignUp)
      });
      const data = await response.json();
      const { message, success, error } = data;
      if (success) {
        toast.success(message);
        setTimeout(() => navigate("/"), 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || error;
        toast.error(details);
      } else if (!success) {
        toast.error(message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>CP DUEL</h1>
        <span className="login-header-sub">Competitive Programming Platform</span>
      </header>
      <div className="login-card">
        <h2>Sign Up</h2>
        <form onSubmit={handlesubmit} method="post">
          <input
            className="login-input"
            type="text"
            value={SignUp.name}
            onChange={handleChange}
            name='name'
            placeholder='Enter name'
            required
          />
          <input
            className="login-input"
            type="email"
            value={SignUp.email}
            onChange={handleChange}
            name='email'
            placeholder='Enter email'
            required
          />
          <input
            className="login-input"
            type="password"
            value={SignUp.password}
            onChange={handleChange}
            name="password"
            placeholder='Password'
            required
          />
          <button className="login-button" type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
