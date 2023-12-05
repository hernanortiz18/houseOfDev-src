//AQUI HACEMOS LA CARD DE LOS USUARIO PARA LA VISTA DEL ADMIN

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function UserIdentification() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${id}`)
      .then((res) => res.data)
      .then((users) => setUser(users))
      .catch(() => "Detalle del usuario no encontrado");
  }, []);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Nombre: {user.name} </li>
          <li className="list-group-item">Apelido: {user.lastName} </li>
          <li className="list-group-item">E-mail: {user.email}</li>
          <li className="list-group-item">Telefono: {user.phone}</li>
        </ul>
      </div>
    </>
  );
}

export default UserIdentification;
