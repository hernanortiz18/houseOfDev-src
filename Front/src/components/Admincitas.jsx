import axios from "axios";
import React, { useEffect, useState } from "react";
import Gridcitas from "../commons/Gridcitas";
import NavbarAdmin from "../commons/NavbarAdmin";

function Admincitas() {
  const [user, setCitas] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/visits`)
      .then((res) => res.data)
      .then((users) => setCitas(users))
      .catch(() => "Cita no encontrada");
  }, []);
  return (
    <div>
      <NavbarAdmin />
      <div>
        <h1>Proximas Citas</h1>
        <Gridcitas user={user} />
      </div>
    </div>
  );
}
//En el componente Admincitas la prop <Gridcitas user={user} />, se lo envia al componente Gridcitas que lo recibe con  const Gridcitas = ({ user })
//nota:el user de la izquierda de user={user} en Admincitas es lo que tiene que matchear con la prop del otro componente.
export default Admincitas;
