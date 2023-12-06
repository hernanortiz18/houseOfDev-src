import React, { useEffect } from "react";
import Navbar from "../commons/Navbar";
import "../styles/alquiler.scss";
import Property from "./Property";
import { useParams } from "react-router";
import Carrusel from "../commons/Carrusel";

function Alquiler() {
  const search = "alquiler";
  const { ubicacion } = useParams();

  return (
    <>
      <div className="container alquiler">
        <div className="container-fluid vh-100 ">
          <Navbar />
          <Carrusel />
          <Property search={search} ubicacion={ubicacion} />
        </div>
      </div>
    </>
  );
}

export default Alquiler;
