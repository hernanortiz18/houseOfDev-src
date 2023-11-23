import React, { useEffect } from "react";
import Navbar from "../commons/Navbar";
import "../styles/alquiler.scss";
import Property from "./Property";

function Alquiler() {
  const search = "alquiler";
  return (
    <>
      <Navbar />
      <h2>Propiedades en Alquiler</h2>
      <Property search={search} />
    </>
  );
}

export default Alquiler;
