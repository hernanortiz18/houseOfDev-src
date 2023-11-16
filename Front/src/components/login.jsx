import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import estilosLogin from "../styles/login.scss?inline";

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
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => {
        setPassword("");
        setEmail("");
      });
  };

  return (
    <div className={estilosLogin[""]}>
      <h1>Tu nueva vivienda está aqui</h1>
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
        <label htmlFor="floatingPassword">Password</label>
        <br />
        <p>¿Olvidaste tu contraseña?</p>
        <Link to="/register">
          <button className="btn btn-primary mx-2">REGISTER</button>
        </Link>

        <button type="submit" className="btn btn-success mx-2">
          LOG IN
        </button>
      </form>
    </div>
  );
}
export default Login;
