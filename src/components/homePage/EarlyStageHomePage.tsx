/* Styled Components */
import { TopSection } from "../../styles/homePage/HomePage";

/* Child Components */
// import RichTextEditor from "./richtext/RichTextEditor";
import Header from "./topSection/Header";
import MainContent from "./topSection/MainContent";
import IntroductionSection from "./IntroductionSection";
import DAOkiDaoSection from "./DAOkiDaoSection";

const EarlyStageHomePage = () => {
  return (
    <>
      <TopSection>
        <Header />
        <MainContent />
      </TopSection>
      <IntroductionSection />
      <DAOkiDaoSection />
      <div style={{ height: "400px", width: "100%" }} />
    </>
  );
};

export default EarlyStageHomePage;
