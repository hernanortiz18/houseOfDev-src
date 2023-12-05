//AQUI HACEMOS LA CARD DE LOS USUARIO PARA LA VISTA DEL ADMIN

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavbarAdmin from "../commons/NavbarAdmin";

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
      <NavbarAdmin />
      <h1>Datos Personales</h1>
      <div className="user-icon-container imagenIcono">
        <img
          src={
            "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          }
          class="card-img-top"
          alt="..."
        ></img>
      </div>
      <div className="d-flex justify-content-center align-items-center">
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
      </div>
    </>
  );
}

export default UserIdentification;
