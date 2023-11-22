import UserProperty from "./UserProperty";
import { Link } from "react-router-dom";

const CardProperties = ({ property }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {property.length &&
            property.map((data, i) => (
              <div className="col-md-4" key={i}>
                <Link to={`propiedades/${data.id}`}>
                  <UserProperty data={data} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CardProperties;
