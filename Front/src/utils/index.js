import axios from "axios";

export const getProperties = (search) => {
  axios
    .get(`http://localhost:8000/api/properties/${seach}`)
    .then((properties) => properties.data)
    .catch((Error) => console.error(Error));
};

export const getUserLog = () => {
  axios
    .get("http://localhost:8000/api/me")
    .then((user) => user.data)
    .catch((Error) => console.error(Error));
};
