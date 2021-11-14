import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <NavLink className="nav-link" to="/users" exact>
        USERS
      </NavLink>
      <NavLink className="nav-link" to="/users/login" exact>
        LOGIN
      </NavLink>
    </header>
  );
};

export default Header;
