import axios from "axios";
import React, { useEffect, useState } from "react";
import Gridcitas from "../commons/Gridcitas";
import NavbarAdmin from "../commons/NavbarAdmin";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Admincitas() {
  const [cita, setCitas] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isAdmin = user.isAdmin;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/visits`)
      .then((res) => res.data)
      .then((users) => setCitas(users))
      .catch(() => "Cita no encontrada");
  }, []);

  return (
    <>
      {isAdmin ? (
        <div>
          <NavbarAdmin />
          <div>
            <h1>Proximas Citas</h1>
            <Gridcitas cita={cita} />
          </div>
        </div>
      ) : (
        navigate("/contenido")
      )}
    </>
  );
}
//En el componente Admincitas la prop <Gridcitas user={user} />, se lo envia al componente Gridcitas que lo recibe con  const Gridcitas = ({ user })
//nota:el user de la izquierda de user={user} en Admincitas es lo que tiene que matchear con la prop del otro componente.
export default Admincitas;
