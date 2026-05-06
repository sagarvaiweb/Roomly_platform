import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios' ;
import { toast } from "react-toastify";


function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      const response = await axios.post("http://localhost:3000/auth/signup" , form ) ;
      
        navigate("/login") ;
        toast.success(response?.data?.message);
      
    }
    catch(err){
      toast.error(err.response?.data?.message || err.message) ;
    }
  };

  return (
    <div className="signup-container">
      <div className="auth-card">
        <h2 className="auth-title">SignUp</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Username */}
          <div className="neumorphic-input">
            <i className="bi bi-person-fill"></i>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

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
            Sign Up
          </button>

          <p className="terms-text">
            By signing up, you agree to our <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>

          <p className="login-footer">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} className="login-link">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;