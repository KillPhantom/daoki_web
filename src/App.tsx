import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

/* Routes */
import { HOME_ROUTE, CREATE_PROJECT_ROUTE, EXAMPLE_PAGE_1 } from "./routes";

import { PageOneData } from "./data/Example";

import HomePage from "./components/homePage/HomePage";
import CreateProjectPage from "./components/createPage/CreateProjectPage";
import TopicDisplayPage from "./components/displayPage/TopicDisplayPage";

const App = () => {
  const isOfficial = process.env.REACT_APP_IS_OFFICIAL;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          {isOfficial && (
            <>
              <Route
                path={CREATE_PROJECT_ROUTE}
                element={<CreateProjectPage />}
              />
              <Route
                path={EXAMPLE_PAGE_1}
                element={<TopicDisplayPage topic={PageOneData} />}
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
