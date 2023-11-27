import React, { useEffect } from "react";
import Navbar from "../commons/Navbar";
import "../styles/alquiler.scss";
import Property from "./Property";
import { useParams } from "react-router";

function Alquiler() {
  const search = "alquiler";
  const { ubicacion } = useParams();
  const contenido = () => {
    return ubicacion;
  };

  return (
    <>
      <div className="container alquiler">
        <Navbar />
        <h2 className="mt-4 mb-4">Propiedades en Alquiler</h2>
        {contenido(<Property search={search} ubicacion={ubicacion} />)}

        {/* <Property search={search} ubicacion={ubicacion} /> */}
      </div>
    </>
  );
}

export default Alquiler;
