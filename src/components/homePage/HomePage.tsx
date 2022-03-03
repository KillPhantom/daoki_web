/* Styled Components */
import { TopSection } from "../../styles/homePage/HomePage";

/* Child Components */
// import RichTextEditor from "./richtext/RichTextEditor";
import Header from "./topSection/Header";
import MainContent from "./topSection/MainContent";
import IntroductionSection from "./IntroductionSection";
import AdvantageSection from "./AdvantangeSection";
import AboutUsSection from "./AboutUsSection";
import SearchSection from "./searchSection/SearchSection";

const HomePage = () => {
  return (
    <>
      <TopSection>
        <Header isOfficial />
        <MainContent isOfficial />
      </TopSection>
      <IntroductionSection />
      <SearchSection />
      <AdvantageSection />
      <AboutUsSection />
    </>
  );
};

export default HomePage;
