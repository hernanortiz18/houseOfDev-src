import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";
import icono from "../assets/img/Group 177.png";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/users/logout",
        {
          name: user,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => navigate("/contenido"));
    dispatch(setUser(""));
  };

  const handleLoginClick = () => {
    const newUser = {
      user: user.name,
    };
    dispatch(setUser(newUser));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-custom fixed-top">
        <div className="container-fluid">
          <Link to={"/"} className="nav-link">
            <img src={icono} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {user.isAdmin ? (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link admin-nav-option">
                    Vista Admin
                  </Link>
                </li>
              ) : (
                <></>
              )}
              <li className="nav-item">
                <Link to={"/comprar/all"} className="nav-link">
                  En Venta
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/alquiler/all"} className="nav-link">
                  Alquiler
                </Link>
              </li>

              {user.id ? (
                <li className="nav-item">
                  <Link to={"/perfil"} className="nav-link">
                    Mi perfil
                  </Link>
                </li>
              ) : (
                <></>
              )}

              {user.id ? (
                <li className="nav-item">
                  <Link to={"/favorites"} className="nav-link">
                    Mis Favoritos
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {user.id ? (
                <p>Welcome {user.name}!</p>
              ) : (
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Registrate
                  </Link>
                </li>
              )}
              {user.name ? (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-danger mx-2"
                  >
                    Log out
                  </button>
                </li>
              ) : (
                //
                <li className="nav-item">
                  <Link
                    to={"/login"}
                    className="nav-link"
                    size="large"
                    onClick={handleLoginClick}
                  >
                    {user.name ? user.name : "Login"}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
