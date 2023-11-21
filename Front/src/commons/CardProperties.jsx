import UserProperty from "./UserProperty";
import { useSelector } from "react-redux";

const PropertyCard = () => {
  const properties = useSelector((state) => {
    console.log(state);
    return state.properties;
  });

  return (
    <>
      <div className="container">
        <div className="row">
          {properties.map((data, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`propiedades/${data.id}`}>
                <UserProperty property={data} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
