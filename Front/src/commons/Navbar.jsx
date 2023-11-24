import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-custom fixed-top">
        <div className="container-fluid">
          <Link to={"/"} className="nav-link">
            House Of Dev
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/comprar"} className="nav-link">
                  En Venta
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/alquiler"} className="nav-link">
                  Alquiler
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/agenda"} className="nav-link">
                  Agenda Tu Visita
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/servicios"} className="nav-link">
                  Nuestros Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/perfil"} className="nav-link">
                  Mi perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/nosotros"} className="nav-link">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contacto"} className="nav-link">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Registrate
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Log In
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
