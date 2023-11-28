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
      <div className="container comprar">
        <Navbar />
        <h2 className="tituloVenta">Propiedades en venta</h2>
        <Property search={search} ubicacion={ubicacion} />
      </div>
    </>
  );
}

export default Venta;
