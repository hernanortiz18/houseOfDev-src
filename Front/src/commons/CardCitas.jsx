//CARD CITAS
//HACER PEDIDOS AXIOS UN AXIOS ID USUARIO Y PROPIEDAD
// const userId = useSelector((state) => state.user.id);la pesona logueada
// const { userId} = useParams();

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Cardcitas({ data }) {
  console.log(data);

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

  console.log("xxxxxxxxxxxxxxxxxxxxxxxxx", user);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={property.img} class="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        {/* <p className="card-text">{cita.dateTime}date</p> */}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">User :{user.lastName}</li>
        <li className="list-group-item">Telefono:{user.phone}</li>
        <li className="list-group-item">Email: {user.email}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-primary mx-2 mt-2">Aceptar cita</button>
        <button className="btn btn-danger mx-2 mt-2">Cancelar cita</button>
      </div>
    </div>
  );
}

export default Cardcitas;
