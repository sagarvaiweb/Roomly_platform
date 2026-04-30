import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios' ;

function LoginPage() {
  const navigate = useNavigate();
  
  // State for email and password
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3000/auth/login" , form) ;
      localStorage.setItem( "token" , response.data.token) ; 
      navigate("/") ;
      console.log("you successfully loggedIn") ;
    }
    catch(err){
      console.error(err.response?.data?.message || err.message) ;
    }
  };

  return (
    <div className="signup-container"> 
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          
          {/* Email */}
          <div className="neumorphic-input">
            <i className="bi bi-envelope-fill"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="neumorphic-input">
            <i className="bi bi-lock-fill"></i>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <i
              className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} eye-toggle`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <button className="auth-btn" type="submit">
            Login
          </button>

          <p className="terms-text">
            <a href="#">Forgot Password?</a>
          </p>

          <p className="login-footer">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")} className="login-link">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;