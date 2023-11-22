import React from "react";

function UserProperty({ data }) {
  return (
    <>
      <h1>Propiedades</h1>
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
    </>
  );
}

export default UserProperty;
