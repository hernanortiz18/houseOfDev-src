import { Link } from "react-router-dom";
import Cardcitas from "./Cardcitas";

//GRID
const Gridcitas = ({ user }) => {
  return (
    <div className="">
      <div className="row">
        {user.length &&
          user.map((data, i) => (
            <div className="col-md-3 mb-3" key={i}>
              <div className="d-flex justify-content-center align-items-center">
                <Cardcitas data={data} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gridcitas;
