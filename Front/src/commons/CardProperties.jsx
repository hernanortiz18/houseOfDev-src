import UserProperty from "./UserProperty";

const PropertyCard = ({ property }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {properties.map((data, i) => (
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

export default PropertyCard;
