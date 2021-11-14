import actionTypes from "./actionTypes";

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});
