import React from "react";
import "../styles/properties.scss";

function UserProperty({ data }) {
  return (
    <div className="properties">
      {/* <h1>Propiedades</h1> */}
      <h2>Provincia</h2>
      <p>{data?.province}</p>
      <h2>Ciudad</h2>
      <p>{data?.city}</p>
      <h2>Dirección</h2>
      <p>{data?.adress}</p>
      <h2>número</h2>
      <p>{data?.number}</p>
      <h2>Precio</h2>
      <p>{data?.price}</p>
    </div>
  );
}

export default UserProperty;
