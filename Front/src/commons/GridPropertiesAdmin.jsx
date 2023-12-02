import { Link } from "react-router-dom";

import "../styles/AdminProperties.scss";
import CardAdminProperty from "./CardAdminProperty";

//GRID
const GridPropertiesAdmin = ({ property }) => {
  return (
    <div className="containerGrilla">
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {property.length &&
          property.map((data, i) => (
            <div className="col" key={i}>
              <div className="">
                <Link to={`propiedades/${data.id}`}>
                  <CardAdminProperty data={data} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridPropertiesAdmin;
