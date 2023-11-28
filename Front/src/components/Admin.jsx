import React from "react";
import NavbarAdmin from "../commons/NavbarAdmin";
import "../styles/createproperties.scss";
import UserProperty from "../commons/UserProperty";
import { Link } from "react-router-dom";

//Renderizamos las propiedades en admin!
const Admin = ({ property }) => {
  return (
    <>
      <NavbarAdmin />

      {/* <div className="container">
        <div className="d-flex flex-row flex-wrap">
          {property.length &&
            property.map((data, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card">
                  <Link to={`propiedades/${data.id}`}>
                    <UserProperty data={data} />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div> */}
    </>
  );
};

export default Admin;
