import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import List from "./List";

describe("Given a List component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      <Provider>
        render(
        <List />
        );
      </Provider>;
    });
  });
});
