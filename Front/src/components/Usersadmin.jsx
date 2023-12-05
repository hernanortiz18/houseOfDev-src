import React, { useEffect, useState } from "react";
import GridUsersAdmin from "../commons/GridUsersAdmin";
import axios from "axios";
import NavbarAdmin from "../commons/NavbarAdmin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Usersadmin() {
  const user = useSelector((state) => state.user);
  const isAdmin = user.isAdmin;
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/allUsers`)
      .then((res) => res.data)
      .then((users) => setUsers(users))
      .catch(() => "Usuarios no encontrados");
  }, []);

  return (
    <>
      {isAdmin ? (
        <div>
          <NavbarAdmin />
          <h2>Todos los usuarios</h2>
          <GridUsersAdmin users={users} />
        </div>
      ) : (
        navigate("/contenido")
      )}
    </>
  );
}

export default Usersadmin;
