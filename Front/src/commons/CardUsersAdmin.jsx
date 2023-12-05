//AQUI HACEMOS LA CARD DE LOS USUARIO PARA LA VISTA DEL ADMIN

import React, { useEffect } from "react";

function CardUsersAdmin({ data }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Nombre: {data.name} </li>
          <li className="list-group-item">Apelido: {data.lastName} </li>
          <li className="list-group-item">E-mail: {data.email}</li>
          <li className="list-group-item">Telefono: {data.phone}</li>
        </ul>
      </div>
    </>
  );
}

export default CardUsersAdmin;
