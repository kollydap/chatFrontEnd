import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };
  const loginUser = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`dj-rest-auth/login/`, {
        password: formData.password,
        username: formData.username,
      })
      .then((res) => {
        localStorage.setItem("key", res.data.key);
        navigate("/");
      });
  };

  return (
    <div className="login">
      <form className="login__form">
        {/* <h1>StringBox</h1> */}
        <input
          // value={input}
          // onChange={(e) => setInput(e.target.value)}
          className="user__input"
          placeholder="UserName"
          name="username"
          onChange={handleChange}
          required
        />

        <input
          // value={input}
          // onChange={(e) => setInput(e.target.value)}
          className="user__input"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
        <button className="login__button" onClick={loginUser}>Login</button>
        <p style={{marginTop:"10px"}}>Don't have an account ? <Link to="/register"> SignUp</Link></p>
      </form>
    </div>
  );
}

export default Login;
