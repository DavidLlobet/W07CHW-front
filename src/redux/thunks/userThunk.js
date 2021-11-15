import axios from "axios";
import { loadUsersAction } from "../actions/actionCreators";

const urlApi = "https://w07chw.herokuapp.com/users/users";

export const loadUsersThunk = () => async (dispatch) => {
  const token = localStorage.getItem("David");

  const response = await axios.get(urlApi, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const users = await response.data;
  dispatch(loadUsersAction(users));
};
