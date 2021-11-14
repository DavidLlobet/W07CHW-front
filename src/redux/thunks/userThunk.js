import axios from "axios";
import { loadUsersAction } from "../actions/actionCreators";

const urlApi = "https://w07chw.herokuapp.com/users/users";

export const loadUsersThunk = () => async (dispatch) => {
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGZlMGNjMGQ5MDBhZDEwY2QxODVlYSIsIm5hbWUiOiJTaXIgQm9vbGVhbiIsImlhdCI6MTYzNjg5MTYwOSwiZXhwIjoxNjM3MTUwODA5fQ.PGI5ZiAWQcg_0DdqGSsvblGiOqii9ZuXUaRD6yf-qG4";

  const response = await axios.get(urlApi);
  const users = await response.data;

  dispatch(loadUsersAction(users));
};
