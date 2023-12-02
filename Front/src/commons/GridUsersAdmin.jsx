//AQUI HACEMOS EL GRID DE TODOS LOS USUARIOS PARA EL ADMIN
import React from "react";
import CardUsersAdmin from "./CardUsersAdmin";
import { Link } from "react-router-dom";

function GridUsersAdmin({ users }) {
  return (
    <div className="containerGrilla">
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {users.length &&
          users.map((data, i) => (
            <div className="col-md-3 mb-3" key={i}>
              <div className="d-flex justify-content-center align-items-center">
                <Link to={`usuario/${data.id}`}>
                  <CardUsersAdmin data={data} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GridUsersAdmin;
