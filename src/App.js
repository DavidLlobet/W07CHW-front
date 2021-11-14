import { BrowserRouter, Routes, Route } from "react-router-dom";

import SocialPage from "./pages/SocialPage";
import { paths } from "./paths/paths";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* <Header /> */}
          <Route path={paths.socialPage} element={<SocialPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
