/* Styled Components */
import { TopSection } from "../../styles/homePage/HomePage";

/* Child Components */
// import RichTextEditor from "./richtext/RichTextEditor";
import Header from "./topSection/Header";
import MainContent from "./topSection/MainContent";
import IntroductionSection from "./IntroductionSection";
import AdvantageSection from "./AdvantangeSection";
import AboutUsSection from "./AboutUsSection";

const HomePage = () => {
  return (
    <>
      <TopSection>
        <Header />
        <MainContent />
      </TopSection>
      <IntroductionSection />
      <AdvantageSection />
      <AboutUsSection />
    </>
  );
};

export default HomePage;
