import axios from "axios";

export const getProperties = () => {
  axios
    .get("http://localhost:8000/api/properties")
    .then((properties) => properties.data)
    .catch((Error) => console.error(Error));
};

export const getUserLog = () => {
  axios
    .get("http://localhost:8000/api/me")
    .then((user) => user.data)
    .catch((Error) => console.error(Error));
};
