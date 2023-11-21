import React, { useState } from "react";
import Navbar from "../commons/Navbar";
import "../styles/contenido.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import UserProperty from "../commons/userProperty";

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
      .post(`/api/properties/alquiler`, { search: search })
      .then((res) => res.data)

      .then((search) => {
        console.log(search);
        setSearchResult(search);
      })

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
              checked={search === "compra"}
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
          <Link to={"/results"}>
            <button type="button" className="btn btn-primary">
              Ver Propiedades
            </button>
          </Link>
        </form>
      </div>

      {/* mapear */}
      <div className="container">
        <div className="row">
          {searchResult.map((data, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`propiedades/${(data, i)}`}>
                <UserProperty property={data} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contenido;
