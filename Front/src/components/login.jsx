import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../commons/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userReducer } from "../redux/user";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.user);

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
      .then((res) => dispatch(setUser(res.data)))
      .then(() => {
        setPassword("");
        setEmail("");
      })
      .then(() => navigate("/contenido"));
  };

  return (
    <>
      {userLog.id ? (
        <>{navigate("/contenido")}</>
      ) : (
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
      )}
    </>
  );
}
export default Login;
