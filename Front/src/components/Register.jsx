import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../styles/register.scss";
import headImg from "../assets/img/Group179.png";
import { Link } from "react-router-dom";

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
    <div className="fondo">
      <div className="register">
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

          <button className="btn btn-primary mx-2" type="submit">
            Register
          </button>
          <Link to="/login">
            <button className="btn btn-success mx-2">Log in</button>
   
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
