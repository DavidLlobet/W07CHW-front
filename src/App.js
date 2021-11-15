import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import SocialPage from "./pages/SocialPage";
import { paths } from "./paths/paths";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={paths.socialPage} element={<SocialPage />} />
          <Route path={paths.loginPage} element={<LoginPage />} />
          <Route path={paths.registerPage} element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
