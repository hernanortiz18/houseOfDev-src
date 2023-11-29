import React, { useEffect } from "react";
import Navbar from "../commons/Navbar";
import "../styles/alquiler.scss";
import Property from "./Property";
import { useParams } from "react-router";
import Carrusel from "../commons/Carrusel";

function Alquiler() {
  const search = "alquiler";
  const { ubicacion } = useParams();
  // const ubicacion = "debugueando";
  console.log("xxxxxxxxxxxxxx", ubicacion);
  return (
    <>
      <div className="">
        <Navbar />
        <Carrusel />
        <Property search={search} ubicacion={ubicacion} />
      </div>
    </>
  );
}

export default Alquiler;
