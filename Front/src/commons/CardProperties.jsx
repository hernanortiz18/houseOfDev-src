import UserProperty from "./UserProperty";
import { Link } from "react-router-dom";

//GRID
const CardProperties = ({ property }) => {
  return (
    <div className="containerGrilla">
      <div className="row">
        {property.length &&
          property.map((data, i) => (
            <div className="" key={i}>
              <div className="card">
                <Link to={`propiedades/${data.id}`}>
                  <UserProperty data={data} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardProperties;
