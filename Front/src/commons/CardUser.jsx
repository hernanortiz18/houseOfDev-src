const CardUser = ({ user }) => {
  return (
    <>
      <div className="user-view">
        <h1>MI PERFIL</h1>
        <button>EDITAR</button>
        <h3>NOMBRE</h3>
        <p>{user.name}</p>
        <h3>APELLIDO</h3>
        <p>{user.lastName}</p>
        <h3>E-MAIL</h3>
        <p>{user.email}</p>
        <h3>TELÉFONO</h3>
        <p>{user.phone}</p>
        <h3>PASSWORD</h3>
        <input />
      </div>
    </>
  );
};

export default CardUser;
