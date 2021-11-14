import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useUsers from "./hooks/useUsers";

import SocialPage from "./pages/SocialPage";
import { paths } from "./paths/paths";

function App() {
  const { loadUsers } = useUsers();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div className="container">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path={paths.socialPage} exact>
            <SocialPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
