import { getRandomUsers } from "../../factories/userFactory";
import actionTypes from "../actions/actionTypes";
import usersReducer from "./usersReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives a list of users and a loadUsersAction", () => {
    test("Then it should return a new list of users", () => {
      const initialUsers = [];
      const usersList = getRandomUsers(3);
      const action = {
        type: actionTypes.loadUsers,
        users: usersList,
      };

      const result = usersReducer(initialUsers, action);

      expect(result).toEqual(usersList);
    });
  });
  describe("When it receives a users list and an unknown action", () => {
    test("Then it should return the received users list", () => {
      const initialUsers = [];
      const action = {
        type: "whatever",
      };

      const result = usersReducer(initialUsers, action);

      expect(result).toEqual(initialUsers);
    });
  });
});
