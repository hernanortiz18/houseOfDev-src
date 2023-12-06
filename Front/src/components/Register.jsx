import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../styles/register.scss";
import headImg from "../assets/img/Group179.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../commons/Navbar";
import { useSelector } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const userLog = useSelector((state) => state.user);

  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.passwordRepeat === registerData.password) {
      axios
        .post(
          "http://localhost:8000/api/users/register",
          {
            name: registerData.name,
            lastName: registerData.lastName,
            phone: registerData.phone,
            email: registerData.email,
            password: registerData.password,
          },
          { withCredentials: true }
        )
        .then((res) => res.data)
        .then(() => navigate("/login"))
        .catch((error) => {
          console.error("Error al registrar: ", error);
          toast.error("LA CONTRASEÑA NO COINCIDE, VUELVE A INGRESARLA");
        });
    } else {
      toast.error("LA CONTRASEÑA NO COINCIDE, VUELVE A INGRESARLA");
    }
  };

  return (
    <>
      {userLog.id ? (
        <>{navigate("/contenido")}</>
      ) : (
        <>
          {" "}
          <Navbar />
          <div className="fondo">
            <div className="register">
              <ToastContainer />;
              <form onSubmit={handleSubmit} className="formRegister">
                <input
                  value={registerData.name}
                  type="text"
                  name="name"
                  placeholder="NAME"
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  value={registerData.lastName}
                  type="text"
                  name="lastName"
                  placeholder="LAST NAME"
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  value={registerData.phone}
                  type="text"
                  name="phone"
                  placeholder="PHONE"
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  value={registerData.email}
                  type="email"
                  name="email"
                  placeholder="E-MAIL"
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  value={registerData.password}
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  value={registerData.passwordRepeat}
                  type="password"
                  name="passwordRepeat"
                  placeholder="REPEAT PASSWORD"
                  onChange={handleChange}
                  required
                />
                <br />

                <button className="btn btn-primary mx-2" type="submit">
                  REGISTER
                </button>
                <Link to="/login">
                  <button className="btn btn-success mx-2">LOG IN</button>
                </Link>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
