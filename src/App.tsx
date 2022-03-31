import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

/* Routes */
import { HOME_ROUTE, CREATE_PROJECT_ROUTE } from "./routes";

import HomePage from "./components/homePage/HomePage";
import CreateProjectPage from "./components/createPage/CreateProjectPage";

const App = () => {
  const isOfficial = process.env.REACT_APP_IS_OFFICIAL;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          {isOfficial && (
            <Route
              path={CREATE_PROJECT_ROUTE}
              element={<CreateProjectPage />}
            />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
