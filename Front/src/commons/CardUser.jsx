import { useContext, useState } from "react";
import axios from "axios";
import "../styles/profile.scss";
import { useSelector } from "react-redux";

const CardUser = ({ user }) => {
  const { email } = user;
  const [edit, setEdit] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    phone: 0,
    email: "",
    password: "",
  });

  const [passwordActual, setPasswordActual] = useState("");

  const handleClick = (e) => {
    setEdit(!edit);
  };

  const handlePasswordActual = (e) => {
    setPasswordActual(e.target.value);
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8000/api/users/passwordValidate", {
        params: {
          email: email,
          password: passwordActual,
        },
      })
      .then((result) => {
        console.log("SALIÓ");
        if (!result) return "contraseña incorrecta";
        else {
          axios
            .put(
              `http://localhost:8000/api/users/update/?userEmail=${user.email}`,
              {
                name: userData.name,
                lastName: userData.lastName,
                phone: userData.phone,
                email: userData.email,
                password: userData.email,
              }
            )
            .then((res) => res.data)
            .then(() => setEdit(!edit));
        }
      });
  };

  return (
    <div className="container-gral">
      <button onClick={handleClick}>
        <i></i> EDITAR
      </button>
      {!edit && (
        <div className="profile-container">
          <div className="userProfile">
            <h1>Datos personales</h1>
            <div className="informacion">
              <p>NOMBRE COMPLETO</p>
              <h3>
                {user.name} {user.lastName}
              </h3>
              <p>TELÉFONO</p>
              <h3>{user.phone}</h3>
              <p>E-MAIL</p>
              <h3>{user.email}</h3>
            </div>
          </div>
        </div>
      )}

      {edit && (
        <div>
          <div className="userProfile">
            <h1>Datos personales</h1>
            <h3>NOMBRE COMPLETO</h3>
            <form onSubmit={handleSubmit} className="informacion">
              <input
                type="text"
                value={userData.name}
                name="name"
                placeholder="NAME"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                value={userData.lastName}
                name="lastName"
                placeholder="LAST NAME"
                onChange={handleChange}
              />
              <br />
              <h3>TELEFONO</h3>
              <input
                type="text"
                value={userData.phone}
                name="phone"
                placeholder="PHONE"
                onChange={handleChange}
              />
              <br />
              <h3>E-MAIL</h3>
              <input
                type="text"
                value={userData.email}
                name="email"
                placeholder="EMAIL"
                onChange={handleChange}
              />
              <br />
              <h3>CHANGE E-MAIL</h3>
              <label htmlFor="passwordActual">PASSWORD ACTUAL</label>
              <br />
              <input
                type="password"
                name="passwordActual"
                value={passwordActual}
                placeholder="ESCRIBA SU PASSWORD ACTUAL"
                onChange={handlePasswordActual}
              />
              <br />
              <label htmlFor="password">PASSWORD NUEVA</label>
              <br />
              <input
                type="password"
                name="password"
                value={userData.password}
                placeholder="ESCRIBA SU PASSWORD NUEVA"
                onChange={handleChange}
              />

              <button type="submit">GUARDAR</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardUser;
