import axios from "axios";
import { createUserAction, loadUsersAction } from "../actions/actionCreators";

const urlApi = "https://w07chw.herokuapp.com/users";

export const loadUsersThunk = () => async (dispatch) => {
  const token = localStorage.getItem("David");

  const response = await axios.get(urlApi + "/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const users = await response.data;
  dispatch(loadUsersAction(users));
};

export const createUserThunk = () => async (dispatch) => {
  const token = localStorage.getItem("David");

  const response = await axios.post(urlApi + "/register", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const user = await response.data;
  dispatch(createUserAction(user));
};
