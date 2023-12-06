import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Navbar from "../commons/Navbar";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/detailProperties.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";

const DetailProperty = () => {
  const [data, setData] = useState({});
  const [visitDate, setVisitDate] = useState(null);
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const userId = user.id;

  const handleDate = (e) => {
    setVisitDate(e);
  };

  const visitTime = (e) => {
    const openingHour = 8;
    const closingHour = 19;
    const selectedHour = e.getHours();
    return selectedHour >= openingHour && selectedHour <= closingHour;
  };

  const handleClick = () => {
    const visitDateString = visitDate.toString();
    const date = visitDateString.slice(4, 15);
    const time = visitDateString.slice(16, 21);
    const dateTime = date.concat(" - ").concat(time).concat(" HS");

    axios
      .post("http://localhost:8000/api/visits/register", {
        dateTime: dateTime,
        prospectId: userId,
        propertyId: id,
      })
      .then(() => toast.success("VISITA REGISTRADA CON EXITO"))
      .catch(() => {
        console.error(Error);
        toast.error("FECHA Y HORA NO DISPONIBLES");
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/properties/${id}`)
      .then((res) => res.data)
      .then((thisProperty) => setData(thisProperty));
  }, []);

  //esta es la vista individual de la propiedad
  return (
    <>
      <Navbar />
      <div className="properties">
        <div className="image-property">
          <img src={data?.img} alt={data?.address} />
        </div>
        <div className="info-property">
          <p>Localidad</p>
          <h3>
            <i class="bi bi-geo-alt-fill"></i>
            {data?.city} <br /> {data?.province}
          </h3>
          <p>Ubicación</p>
          <h3>
            {data?.address} N°{data?.number}
          </h3>
          <p>Características</p>
          <h3>
            <i class="fa-solid fa-ruler-combined"></i> {data?.squareMeters} Mts.
          </h3>
          <h3>
            <i class="fa-solid fa-bath"></i> {data?.bathrooms} -
            <i class="fa-solid fa-bed"></i> {data?.bedrooms}
          </h3>

          <ToastContainer />
          <DatePicker
            className="callendar-input"
            selected={visitDate}
            onChange={handleDate}
            showTimeSelect
            customTimeInput
            timeIntervals={60}
            timeCaption="Hora"
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="ELIGE TU FECHA DE VISITA"
            filterTime={visitTime}
          />
          <br />
          {user.id ? (
            <button onClick={handleClick} className="button-visit">
              RESERVAR VISITA
            </button>
          ) : (
            <Link to="/login">
              <button className="button-visit">LOG IN PARA RESERVAR</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailProperty;
