import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

/* Routes */
import {
  HOME_ROUTE,
  CREATE_PROJECT_ROUTE,
  EXAMPLE_PAGE_1,
  EXAMPLE_PAGE_2,
  EXAMPLE_PAGE_3,
  EXAMPLE_PAGE_4,
  EXAMPLE_PAGE_5,
  TOPIC_PAGE_ROUTE,
  DEMO_ROUTE,
  MY_PROJECT_ROUTE,
} from "./routes";

import {
  PageOneData,
  PageTwoData,
  PageThreeData,
  PageFourData,
  PageFiveData,
} from "./data/Example";

import HomePage from "./components/homePage/HomePage";
import EarlyStageHomePage from "./components/homePage/EarlyStageHomePage";
import CreateProjectPage from "./components/createPage/CreateProjectPage";
import TopicDisplayPage from "./components/displayPage/TopicDisplayPage";
import MyProjectPage from "./components/myProjectPage/MyProjectPage";
import { getIsMobileBrowser } from "./utils/Device";
import MobileHomePage from "./mobile/components/MobileHomePage";

const App = () => {
  if (getIsMobileBrowser()) {
    return <MobileHomePage />;
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={HOME_ROUTE} element={<EarlyStageHomePage />} />
          <Route path={DEMO_ROUTE} element={<HomePage />} />
          <Route path={CREATE_PROJECT_ROUTE} element={<CreateProjectPage />} />
          <Route path={MY_PROJECT_ROUTE} element={<MyProjectPage />} />
          <Route
            path={EXAMPLE_PAGE_1}
            element={<TopicDisplayPage topic={PageOneData} />}
          />
          <Route
            path={EXAMPLE_PAGE_2}
            element={<TopicDisplayPage topic={PageTwoData} />}
          />
          <Route
            path={EXAMPLE_PAGE_3}
            element={<TopicDisplayPage topic={PageThreeData} />}
          />
          <Route
            path={EXAMPLE_PAGE_4}
            element={<TopicDisplayPage topic={PageFourData} />}
          />
          <Route
            path={EXAMPLE_PAGE_5}
            element={<TopicDisplayPage topic={PageFiveData} />}
          />
          <Route path={TOPIC_PAGE_ROUTE} element={<TopicDisplayPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
