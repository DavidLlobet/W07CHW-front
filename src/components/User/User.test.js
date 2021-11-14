import { render, screen } from "@testing-library/react";
import { getRandomUser } from "../../factories/userFactory";
import User from "./User";

describe("Given a User component", () => {
  describe("When it is called", () => {
    test("Then it should render a <article> with a heading with the user name", () => {
      const user = getRandomUser();

      render(<User user={user} />);

      const userCard = screen.getByRole("article");
      const heading = screen.getByRole("heading");

      expect(userCard).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });
});
