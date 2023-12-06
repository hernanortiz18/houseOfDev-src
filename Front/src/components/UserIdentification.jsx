//AQUI HACEMOS LA CARD DE LOS USUARIO PARA LA VISTA DEL ADMIN

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavbarAdmin from "../commons/NavbarAdmin";
import { useSelector } from "react-redux";

function UserIdentification() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  // const [admin, setAdmin] = useState(user.isAdmin);
  const userLog = useSelector((state) => state.user);
  const superAdmin = userLog.superAdmin;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${id}`)
      .then((res) => setUser(res.data))
      // .then((users) => setUser(users))
      .catch(() => "Detalle del usuario no encontrado");
  }, []);

  const handleAdmin = () => {
    axios
      .put(
        `http://localhost:8000/api/users/adminupdate/${id}`,
        { isAdmin: !user.isAdmin },
        { withCredentials: true }
      )

      .then((res) => res.data)
      .then(() => setUser(user))
      // .then(() => setAdmin(useadmin))
      .catch((error) => console.log("error nuevo administrador"));
  };

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

            {superAdmin ? (
              <button onClick={handleAdmin}>
                {!user.isAdmin ? (
                  <span> nuevo administrador</span>
                ) : (
                  <span>quitar admin</span>
                )}
              </button>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserIdentification;
