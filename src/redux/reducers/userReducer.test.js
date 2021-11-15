import userReducer from "./userReducer";
import userActionTypes from "../actions/actionTypes";

describe("Given a userReducer reducer", () => {
  describe("When it receives a user and a loginUser action", () => {
    test("Then it should return an authenticated user", () => {
      const user = {
        isAuthenticated: false,
        user: {},
      };
      const action = {
        type: userActionTypes.loginUser,
        user,
      };

      const newUser = userReducer(user, action);

      expect(newUser).toHaveProperty("isAuthenticated", true);
    });
  });

  describe("When it receives a user and a loginUser action", () => {
    test("Then it should return the same user", () => {
      const user = {
        isAuthenticated: false,
        user: {
          username: "Buleano",
          password: "Buleano",
        },
      };
      const action = {
        type: userActionTypes.loginUser,
        user,
      };

      const newUser = userReducer(user, action);

      expect(newUser).toHaveProperty("user", "username", "Buleano");
      expect(newUser).toHaveProperty("user", "password", "Buleano");
    });
  });
});
