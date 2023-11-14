import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../styles/register.scss";

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
    <form onSubmit={handleSubmit} className="formRegister">
      <label htmlFor="name">Name</label>
      <input
        value={registerData.name}
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="lastName">Last name</label>
      <input
        value={registerData.lastName}
        type="text"
        name="lastName"
        placeholder="lastName"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="phone">phone</label>
      <input
        value={registerData.phone}
        type="text"
        name="phone"
        placeholder="phone"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">email</label>
      <input
        value={registerData.email}
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        value={registerData.password}
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default Register;