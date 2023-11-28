import React, { useEffect } from "react";
import Navbar from "../commons/Navbar";
import "../styles/alquiler.scss";
import Property from "./Property";
import { useParams } from "react-router";

function Alquiler() {
  const search = "alquiler";
  const { ubicacion } = useParams();
  // const ubicacion = "debugueando";
  console.log("xxxxxxxxxxxxxx", ubicacion);
  return (
    <>
      <div className="container alquiler">
        <Navbar />
        <h2 className="titulo">Propiedades en Alquiler</h2>
        <Property search={search} ubicacion={ubicacion} />
      </div>
    </>
  );
}

export default Alquiler;
