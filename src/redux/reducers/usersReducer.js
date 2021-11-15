import actionTypes from "../actions/actionTypes";

const usersReducer = (users = [], action) => {
  let newUsers;

  switch (action.type) {
    case actionTypes.loadUsers:
      newUsers = [...action.users];
      break;

    case actionTypes.createUser:
      newUsers = [...newUsers, action.user];
      break;
    default:
      newUsers = users;
  }
  return newUsers;
};

export default usersReducer;
