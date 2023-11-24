import React from "react";
import NavbarAdmin from "../commons/NavbarAdmin";

import "../styles/createproperties.scss";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <NavbarAdmin />
      <Link to="/crearPropiedades"></Link>
    </>
  );
}

export default Admin;
