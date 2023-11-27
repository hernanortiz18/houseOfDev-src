import React from "react";
import Navbar from "../commons/Navbar";
import "../styles/venta.scss";
import Property from "./Property";
import { useParams } from "react-router";

function Venta() {
  const search = "alquiler";
  const { ubicacion } = useParams();

  return (
    <>
      <div className="container alquiler">
        <Navbar />
        <h2 className="mt-4 mb-4">Propiedades en Alquiler</h2>
        <Property search={search} ubicacion={ubicacion} />
      </div>
    </>
  );
}

export default Venta;
