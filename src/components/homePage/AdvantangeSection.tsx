/* Styled Components */
import {
  SectionWrapper,
  SectionTitleTopLine,
  SectionTitle,
  SectionCardWrapper,
} from "../../styles/homePage/AdvantageSection";

/* Child Components */
import AdvantageCard from "./AdvantageCard";

const AdvantageSection = () => {
  return (
    <SectionWrapper>
      <SectionTitleTopLine />
      <SectionTitle>Our Advantages</SectionTitle>
      <SectionCardWrapper>
        <AdvantageCard
          title="Advantage"
          body="Brief introduction to the project"
          buttonText="Function Jump"
        />
        <AdvantageCard
          title="Advantage"
          body="Brief introduction to the project"
          buttonText="Function Jump"
        />
        <AdvantageCard
          title="Advantage"
          body="Brief introduction to the project"
          buttonText="Function Jump"
        />
      </SectionCardWrapper>
    </SectionWrapper>
  );
};

export default AdvantageSection;
