import { Link } from "react-router-dom";

import "../styles/AdminProperties.scss";
import CardAdminProperty from "./CardAdminProperty";

//GRID
const GridPropertiesAdmin = ({ property }) => {
  return (
    <div className="">
      <h1>Todas las Propiedades</h1>
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {property.length &&
          property.map((data, i) => (
            <div className="col-md-3 mb-3" key={i}>
              <div className="d-flex justify-content-center align-items-center">
                {/* <Link to={`propiedades/${data.id}`}> */}
                <CardAdminProperty data={data} />
                {/* </Link> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridPropertiesAdmin;
