import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginForm from "./LoginForm";
import configureStore from "../../redux/store/index";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should render two inputs and a submit button", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const usernameInput = screen.getByRole("textbox", { name: "Username" });
      const passwordInput = screen.getByLabelText(/password/i);
      const button = screen.getByRole("button");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
