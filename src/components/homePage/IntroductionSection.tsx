/* Styled Components */
import {
  Wrapper,
  LeftPanel,
  ShortLine,
  LeftPanelTitle,
  LeftPanelBody,
  BottomLineWrapper,
  BottomLineCircle,
  BottomLine,
  RightPanel,
} from "../../styles/homePage/IntroductionSection";

/* Child Components */
import IconTextContainer from "./IconTextContainer";
import BarGraphIcon from "../common/icons/BarGraphIcon";
import ExchangeIcon from "../common/icons/ExchangeIcon";
import SphereIcon from "../common/icons/SphereIcon";

const IntroductionSection = () => {
  return (
    <Wrapper>
      <LeftPanel>
        <ShortLine />
        <LeftPanelTitle>What is DAO ?</LeftPanelTitle>
        <LeftPanelBody>
          brief introduction to the projectbrief introduction to the project
          brief introduction to the projectbrief introduction to the project
          brief introduction to the projectbrief introduction to the project
          brief introduction to the projectbrief introduction to the project
          brief introduction to the projectbrief .
        </LeftPanelBody>
        <BottomLineWrapper>
          <BottomLineCircle />
          <BottomLine />
        </BottomLineWrapper>
      </LeftPanel>
      <RightPanel>
        <IconTextContainer
          icon={<ExchangeIcon />}
          title="DAO is nfklr"
          body="brief 
introduction to the projectbrief introduction "
        />
        <IconTextContainer
          icon={<BarGraphIcon />}
          title="DAO is nfklr"
          body="brief 
introduction to the projectbrief introduction "
        />
        <IconTextContainer
          icon={<SphereIcon />}
          title="DAO is nfklr"
          body="brief 
introduction to the projectbrief introduction "
        />
      </RightPanel>
    </Wrapper>
  );
};

export default IntroductionSection;
