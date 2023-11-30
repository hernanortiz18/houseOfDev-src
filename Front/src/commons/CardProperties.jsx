import UserProperty from "./UserProperty";
import "../styles/cardproperties.scss";

//GRID
const CardProperties = ({ property }) => {
  return (
    <div className="containerGrilla">
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {property.length &&
          property.map((data, i) => (
            <div className="col-2" key={i}>
              <UserProperty data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardProperties;
