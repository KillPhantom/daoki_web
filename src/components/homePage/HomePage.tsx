/* Styled Components */
import { TopSection } from "../../styles/homePage/HomePage";

/* Child Components */
// import RichTextEditor from "./richtext/RichTextEditor";
import Header from "./topSection/Header";
import MainContent from "./topSection/MainContent";
import IntroductionSection from "./IntroductionSection";
import AdvantageSection from "./AdvantangeSection";
import DAOkiDaoSection from "./DAOkiDaoSection";
import SearchSection from "./searchSection/SearchSection";
import EarlyStageHomePage from "./EarlyStageHomePage";

const HomePage = () => {
  const isOfficial = process.env.REACT_APP_IS_OFFICIAL;
  return isOfficial ? (
    <>
      <TopSection>
        <Header isOfficial />
        <MainContent isOfficial />
      </TopSection>
      <IntroductionSection />
      <SearchSection />
      <AdvantageSection />
      <DAOkiDaoSection />
    </>
  ) : (
    <EarlyStageHomePage />
  );
};

export default HomePage;
