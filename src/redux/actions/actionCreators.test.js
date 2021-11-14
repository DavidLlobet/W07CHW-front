import { getRandomUsers } from "../../factories/userFactory";
import { loadUsersAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given an actionCreators", () => {
  describe("When it calls a loadUsersAction", () => {
    test("Then it should return a list of users", () => {
      const usersList = getRandomUsers();
      const expectedAction = {
        type: actionTypes.loadUsers,
        users: usersList,
      };

      const actionResult = loadUsersAction(usersList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
