import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/properties.scss";

function CardUserProperty({ data }) {
  const user = useSelector((state) => state.user);
  const userId = user.id;
  const propId = data.id;

  const handleClick = (e) => {
    e.preventDefault();
    if (!user.id) {
      toast.warn("necesitas estar loggeado para agregar a favoritos");
    }
    axios
      .post("http://localhost:8000/api/favs/register", {
        prospectId: userId,
        propertyId: propId,
      })
      .then((result) => {
        if (result) toast.success("AGREGADA A FAVORITOS");
        else {
          toast.warn("ESTA PROPIEDAD YA SE ENCUENTRA EN FAVORITOS");
        }
      })
      .catch(() => {
        toast.error("HA OCURRIDO UN ERROR, VUELVE A INTENTARLO");
      });
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={data?.img}
            className="img-fluid rounded-start"
            // style={{ width: "100%", height: "100%" }}
            alt="..."
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="card-text">
                <i class="fa-sharp fa-solid fa-dollar-sign"></i> {data.price}{" "}
              </p>
              <p className="card-text">
                <i className="bi bi-geo-alt-fill"></i> {data.province}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="card-text">
                <i className="fa-solid fa-ruler-combined"></i>{" "}
                {data?.squareMeters}
                {" Mt²"}
              </p>
              <p className="card-text">
                <i class="fa-solid fa-bed"></i> {data?.bedrooms} {" dorm"}
              </p>
              <p className="card-text">
                <i className="fa-solid fa-bath"></i> {data?.bathrooms}
                {" Baños"}
              </p>
            </div>

            <ToastContainer />
            <div className="card-text">
              <button onClick={handleClick} className="btn btn-outline-primary">
                <i className="bi bi-heart-fill"></i>
              </button>
              <Link to={"contactate"}>
                <button className="btn btn-outline-primary">
                  <i className="bi bi-telephone-fill"></i>
                </button>
              </Link>
              <Link to={`/propiedades/${data.id}`}>
                <button className="btn btn-outline-primary">VER MÁS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardUserProperty;
