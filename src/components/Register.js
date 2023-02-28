import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../axios";

function Register() {
  const navigate = useNavigate();

  const initialFormData = Object.freeze({
    email: "",
    password: "",
    password2: "",
    username: "",
    first_name: "",
    last_name: "",
  });

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const createUser = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`create-user`, {
        email: formData.email,
        password: formData.password,
        password2: formData.password2,
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
      })
      .then((res) => {
        navigate("/login");
      });
  };

  return (
    <div className="signup">
      <form className="login__form">
        <input
          placeholder="Firstname"
          className="user__input"
          name="first_name"
          onChange={handleChange}
          required
        />

        <input
          placeholder="Lastname"
          className="user__input"
          name="last_name"
          onChange={handleChange}
          required
        />

        <input
          placeholder="Username"
          className="user__input"
          name="username"
          onChange={handleChange}
          required
        />

        <input
          placeholder="email"
          type="email"
          className="user__input"
          name="email"
          onChange={handleChange}
          required
        />

        <input
          placeholder="password"
          type="password"
          className="user__input"
          name="password"
          onChange={handleChange}
          required
        />

        <input
          placeholder="confirm password"
          type="password"
          className="user__input"
          name="password2"
          onChange={handleChange}
          required
        />

        <button className="login__button" onClick={createUser}>
          SignUp
        </button>
        <p style={{marginTop:"10px"}}>Have an account ? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
