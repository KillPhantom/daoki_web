/* Styled Components */
import { TopSection, RotateWrapper } from "../../styles/homePage/HomePage";

/* Child Components */
// import RichTextEditor from "./richtext/RichTextEditor";
import Header from "./topSection/Header";
import MainContent from "./topSection/MainContent";
import IntroductionSection from "./IntroductionSection";
import DAOkiDaoSection from "./DAOkiDaoSection";
import SearchSection from "./searchSection/SearchSection";
import EarlyStageHomePage from "./EarlyStageHomePage";

const HomePage = () => {
  const isOfficial = process.env.REACT_APP_IS_OFFICIAL;
  return isOfficial ? (
    <>
      <TopSection>
        <RotateWrapper>
          <Header isOfficial />
          <MainContent isOfficial />
        </RotateWrapper>
      </TopSection>
      <SearchSection />
      <IntroductionSection />
      <DAOkiDaoSection />
    </>
  ) : (
    <EarlyStageHomePage />
  );
};

export default HomePage;
