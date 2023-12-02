import React, { useEffect, useState } from "react";
import GridUsersAdmin from "../commons/GridUsersAdmin";
import axios from "axios";
import NavbarAdmin from "../commons/NavbarAdmin";
function Usersadmin() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/allUsers`)
      .then((res) => res.data)
      .then((users) => setUsers(users))
      .catch(() => "Usuarios no encontrados"),
      [];
  });

  return (
    <>
      <NavbarAdmin />
      <h2>Todos los usuarios</h2>
      <GridUsersAdmin users={users} />
    </>
  );
}

export default Usersadmin;
