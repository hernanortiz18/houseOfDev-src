import { Link } from "react-router-dom";
import AdminProperty from "./AdminProperty";
import "../styles/AdminProperties.scss";

//GRID
const CardPropertiesAdmin = ({ property }) => {
  return (
    <div className="containerGrilla">
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {property.length &&
          property.map((data, i) => (
            <div className="col" key={i}>
              <div className="">
                <Link to={`propiedades/${data.id}`}>
                  <AdminProperty data={data} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardPropertiesAdmin;
