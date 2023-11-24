import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import "../styles/navbarAdmin.scss";
import icono from "../assets/img/Group 177.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-admin fixed-top">
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
              <li className="nav-item">
                <Link to={"/crearPropiedades"} className="nav-link">
                  Crear propiedades
                </Link>
              </li>
              <li className="nav-item">
                <Link to={""} className="nav-link">
                  Usuarios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
