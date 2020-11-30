import axios from "axios";

export const getUsersData = () => {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  });
};
