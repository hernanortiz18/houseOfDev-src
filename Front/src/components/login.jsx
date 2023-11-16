import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
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
        { withCredential: true }
      )
      .then((res) => res.data)
      .then(() => {
        setPassword("");
        setEmail("");
      });
  };

  return (
    <>
      <h1>Tu nueva vivienda está aqui</h1>
      <form onSubmit={handleLogin}>
        <input
          value={email}
          onChange={handleChangeEmail}
          placeholder="EMAIL"
        ></input>
        <br />

        <input
          value={password}
          onChange={handleChangePassword}
          type="password"
          placeholder="PASSWORD"
        ></input>
        <br />
        <p>¿Olvidaste tu contraseña?</p>
        <Link to="/register">
          <button>REGISTER</button>
        </Link>

        <button type="submit">LOG IN</button>
      </form>
    </>
  );
}
export default Login;
