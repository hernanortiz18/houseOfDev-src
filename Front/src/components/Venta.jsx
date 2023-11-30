import React from "react";
import Navbar from "../commons/Navbar";
import "../styles/venta.scss";
import Property from "./Property";
import { useParams } from "react-router";
import Carrusel from "../commons/Carrusel";

function Venta() {
  const search = "comprar";
  const { ubicacion } = useParams();
  return (
    <>
      <div className="container comprar">
        <div className="container-fluid vh-100 comprar">
          <Navbar />
          <Carrusel />

          <Property search={search} ubicacion={ubicacion} />
        </div>
      </div>
    </>
  );
}

export default Venta;
