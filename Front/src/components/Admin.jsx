import React from "react";
import NavbarAdmin from "../commons/navbaradmin";
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
