import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../commons/Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/users/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => {
        setPassword("");
        setEmail("");
      })
      .then(() => {
        axios.then(() => navigate("/contenido"));
      });
  };

  return (
    <>
      <Navbar />
      <div className="estiloLogin">
        <form onSubmit={handleLogin}>
          <input
            value={email}
            onChange={handleChangeEmail}
            placeholder="EMAIL"
            className="form-control"
            id="floatingInput"
            type="email"
          ></input>
          <br />

          <input
            value={password}
            onChange={handleChangePassword}
            type="password"
            placeholder="PASSWORD"
            className="form-control"
            id="floatingPassword"
          ></input>

          <br />
          <Link to={"/"}>
            <p>¿Olvidaste tu contraseña?</p>
          </Link>

          <Link to="/register">
            <button className="btn btn-primary mx-2">REGISTER</button>
          </Link>

          <button type="submit" className="btn btn-success mx-2">
            LOG IN
          </button>
        </form>
      </div>
    </>
  );
}
export default Login;
