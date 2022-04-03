/* Styled Components */
import {
  TopSection,
  RotateWrapper,
  Wrapper,
  TopBgLeft,
  TopBgRight,
} from "../../styles/homePage/HomePage";

/* Child Components */
// import RichTextEditor from "./richtext/RichTextEditor";
import Header from "./topSection/Header";
import MainContent from "./topSection/MainContent";
import IntroductionSection from "./IntroductionSection";
import DAOkiDaoSection from "./DAOkiDaoSection";

const EarlyStageHomePage = () => {
  return (
    <Wrapper>
      <TopSection>
        <RotateWrapper>
          <TopBgLeft />
          <TopBgRight />
          <Header />
          <MainContent />
        </RotateWrapper>
      </TopSection>
      <IntroductionSection />
      <DAOkiDaoSection />
    </Wrapper>
  );
};

export default EarlyStageHomePage;
