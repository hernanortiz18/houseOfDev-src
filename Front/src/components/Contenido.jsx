import React, { useState } from "react";
import Navbar from "../commons/Navbar";
import "../styles/contenido.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { setProperties } from "../redux/properties";
import { useDispatch } from "react-redux";

function Contenido() {
  const dispatch = useDispatch();

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
    const action = setProperties(search);
    console.log("ACTIONNNNNN", action);
    dispatch(action);
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
              checked={search === "compra"}
              id="comprar"
              value="compra"
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
          <Link to={"/results"}>
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
