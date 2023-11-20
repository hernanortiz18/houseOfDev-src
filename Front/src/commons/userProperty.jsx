import React from "react";

function userProperty({ property }) {
  return (
    <>
      <h1>Propiedades</h1>
      <h2>Provincia</h2>
      <p>{property.province}</p>
      <h2>Ciudad</h2>
      <p>{property.city}</p>
      <h2>Dirección</h2>
      <p>{property.adress}</p>
      <h2>número</h2>
      <p>{property.number}</p>
      <h2>Precio</h2>
      <p>{property.price}</p>
    </>
  );
}

export default userProperty;
