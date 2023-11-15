import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../styles/register.scss";
import image from "../assets/img/Group 179.png";

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/register", {
        name: registerData.name,
        lastName: registerData.lastName,
        phone: registerData.phone,
        email: registerData.email,
        password: registerData.password,
      })
      .then((res) => res.data)
      .then(() => navigate("/login"));
  };

  return (
    <div className="bg-color">
      <div className="bg-imagen">
        <div className="register-container">
          <div className="hod-logo">
            <p className="house">HOUSE</p>
            <p className="ofDev">OF DEV</p>
          </div>
          <form onSubmit={handleSubmit} className="formRegister">
            <input
              value={registerData.name}
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <br />
            <input
              value={registerData.lastName}
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
            />
            <br />
            <input
              value={registerData.phone}
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
            <br />
            <input
              value={registerData.email}
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
            />
            <br />
            <input
              value={registerData.password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <br />
            <button type="submit">Register</button>
            <button>Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
