import UserProperty from "./UserProperty";
import { Link } from "react-router-dom";

const CardProperties = ({ property }) => {
  return (
    <div className="container">
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
    </div>
  );
};

export default CardProperties;
