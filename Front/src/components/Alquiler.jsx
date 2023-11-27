import React, { useEffect } from "react";
import Navbar from "../commons/Navbar";
import "../styles/alquiler.scss";
import Property from "./Property";

function Alquiler() {
  const search = "alquiler";
  return (
    <>
      <div className="container alquiler">
        <Navbar />
        <h2 className="mt-4 mb-4">Propiedades en Alquiler</h2>
        <Property search={search} />
      </div>
    </>
  );
}

export default Alquiler;
