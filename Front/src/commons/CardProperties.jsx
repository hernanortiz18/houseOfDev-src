const PropertyCard = ({ property }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {property.map((data, i) => (
            <div className="col-md-4" key={i}>
              <Link to={`propiedades/${(data, i)}`}>
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
