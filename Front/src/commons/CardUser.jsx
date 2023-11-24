import { useState } from "react";
import axios from "axios";

const CardUser = ({ user }) => {
  const [edit, setEdit] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    phone: "",
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
        email: userData.email,
        password: passwordActual,
      })
      .then((result) => {
        if (!result) return "contraseña incorrecta";
        else {
          axios
            .post(
              `http://localhost:8000/api/users/update/?userEmail=${userData.email}`,
              {
                name: userData.name,
                lastName: userData.lastName,
                phone: userData.phone,
                email: userData.email,
                password: passwordActual,
              },
              { withCredenials: true }
            )
            .then((res) => res.data);
        }
      });
  };
  return (
    <>
      <button onClick={handleClick}>
        <i></i> EDITAR
      </button>
      {!edit && (
        <div>
          <div className="userProfile">
            <h1>Datos personales</h1>
            <div className="informacion">
              <h3>NOMBRE COMPLETO</h3>
              <p>
                {user.name} {user.lastName}
              </p>
              <h3>TELÉFONO</h3>
              <p>{user.phone}</p>
              <h3>E-MAIL</h3>
              <p>{user.email}</p>
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
              <input
                type="password"
                name="passwordActual"
                value={passwordActual}
                placeholder="ESCRIBA SU PASSWORD ACTUAL"
                onChange={handlePasswordActual}
              />
              <br />
              <label htmlFor="password">PASSWORD NUEVA</label>
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
    </>
  );
};

export default CardUser;
