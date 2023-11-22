import React, { useState } from "react";
import Navbar from "../commons/Navbar";
import "../styles/contenido.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function Contenido() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [ubicacion, setUbicacion] = useState("");

  const handleOptionBusqueda = (e) => {
    setSearch(e.target.value);
  };

  // const handleUbicacion = (e) => {
  //   setUbicacion(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8000/api/properties/${search}`)
      .then((res) => res.data)
      .catch((error) => console.log("error"));
  };

  return (
    <div className="container">
      <Navbar />
      <div className="form-container">
        <h2>¿Qué estás buscando?</h2>
        {/* Aqui empieza el checkbox */}
        <form onSubmit={handleSubmit}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="opcionBusqueda"
              id="alquiler"
              checked={search === "alquiler"}
              value="alquiler"
              onChange={handleOptionBusqueda}
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
              checked={search === "comprar"}
              id="comprar"
              value="comprar"
              onChange={handleOptionBusqueda}
            />
            <label className="form-check-label" htmlFor="comprar">
              Comprar
            </label>
          </div>

          {/* UBICACION */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Ubicación"
              // value={ubicacion}
              // onChange={handleUbicacion}
            />
          </div>
          {/* Boton para ver las propiedades */}
          <Link to={`/${search}`}>
            <button type="submit" className="btn btn-primary">
              Ver Propiedades
            </button>
          </Link>
        </form>
      </div>

      {/* mapear */}
    </div>
  );
}

export default Contenido;
