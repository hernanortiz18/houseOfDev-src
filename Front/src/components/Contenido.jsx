import React from "react";
import Navbar from "../commons/Navbar";
import "../styles/contenido.scss";
import { Link } from "react-router-dom";

//import "../styles/navbar.scss";
function Contenido() {
  return (
    <div className="container">
      <Navbar />
      <div className="form-container">
        <h2>¿Qué estás buscando?</h2>
        <form>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="opcionBusqueda"
              id="alquiler"
              value="alquiler"
            />
            <label className="form-check-label" htmlFor="alquiler">
              Alquiler
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="opcionBusqueda"
              id="comprar"
              value="comprar"
            />
            <label className="form-check-label" htmlFor="comprar">
              Comprar
            </label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Ubicación"
            />
          </div>
          <Link>
            <button type="button" className="btn btn-primary">
              Ver Propiedades
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Contenido;
