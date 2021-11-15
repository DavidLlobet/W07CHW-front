import actionTypes from "./actionTypes";

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});
