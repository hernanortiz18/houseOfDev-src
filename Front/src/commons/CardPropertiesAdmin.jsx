import { Link } from "react-router-dom";
import AdminProperty from "./AdminProperty";

//GRID
const CardPropertiesAdmin = ({ property }) => {
  return (
    <div className="containerGrilla">
      <div className="row">
        {property.length &&
          property.map((data, i) => (
            <div className="" key={i}>
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
