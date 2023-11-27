import React from "react";
import Navbar from "../commons/Navbar";
import "../styles/venta.scss";
import Property from "./Property";

function Venta() {
  const search = "comprar";
  return (
    <>
      <div className="container venta">
        <Navbar />
        <h2>Propiedades en Venta</h2>
        <Property search={search} />
      </div>
    </>
  );
}

export default Venta;
