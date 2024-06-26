//CARD CITAS
//HACER PEDIDOS AXIOS UN AXIOS ID USUARIO Y PROPIEDAD
// const userId = useSelector((state) => state.user.id);la pesona logueada
// const { userId} = useParams();

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

function Cardcitas({ data }) {
  const [user, setUser] = useState([]);
  const userId = data.prospectId;

  const [property, setProperty] = useState([]);
  const propertyId = data.propertyId;

  // const [cita, setCita] = useState([]);
  // const citaId = data.visits.id;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${userId}`)
      .then((res) => res.data)
      .then((user) => setUser(user))
      .catch(() => "Usuario no encontrado");
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/properties/${propertyId}`)
      .then((res) => res.data)
      .then((property) => setProperty(property))
      .catch(() => "Propiedad no encontrada");
  }, []);

  // useEffect(() => {
  //   axios(`http://localhost:8000/api/visits/${id}`)
  //     .then((res) => res.data)
  //     .then((cita) => setCita(cita))
  //     .catch(() => "No hay citas");
  // });

  const dateConfirm = () => {
    axios
      .put(
        "http://localhost:8000/api/visits/dateConfirm",
        {
          to: user.email,
        },
        { returning: true }
      )
      .then((result) => toast.success("LA CITA FUE CONFIRMADA"))
      .catch((err) => toast.error("HA OCURRIDO UN ERROR CON SU SOLICITUD"));
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <ToastContainer />
      <img src={property.img} class="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{data.dateTime}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">User :{user.lastName}</li>
        <li className="list-group-item">Telefono:{user.phone}</li>
        <li className="list-group-item">Email: {user.email}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-primary mx-2 mt-2" onClick={dateConfirm}>
          Aceptar cita
        </button>
      </div>
    </div>
  );
}

export default Cardcitas;
