import "../styles/cardproperties.scss";
import CardUserProperty from "./CardUserProperty";

//GRID
const GridPropertiesUsers = ({ property, filterProperty }) => {
  return (
    <div className="containerGrilla">
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {filterProperty.length > 0 &&
          filterProperty.map((data, i) => (
            <div className="col" key={i}>
              <CardUserProperty data={data} />
            </div>
          ))}
        {!filterProperty.length > 0 &&
          property.length &&
          property.map((data, i) => (
            <div className="col" key={i}>
              <CardUserProperty data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridPropertiesUsers;
