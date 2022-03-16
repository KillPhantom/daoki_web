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
  IconTextContainerWrapper,
  IconTextBody,
  IconTextTitle,
  IconTextWrapper,
  IconWrapper,
} from "../../styles/homePage/IntroductionSection";

/* Child Components */
import IconTextContainer from "./IconTextContainer";
import ExchangeIcon from "../common/icons/ExchangeIcon";
import SphereIcon from "../common/icons/SphereIcon";

const IntroductionSection = () => {
  return (
    <Wrapper>
      <LeftPanel>
        <ShortLine />
        <LeftPanelTitle>What is DAOki ?</LeftPanelTitle>
        <LeftPanelBody>
          “A day in crypto is a year in the off-chain world”. Crypto moves fast,
          tons of new projects and concepts come out everyday. How should we
          keep updated and get a grasp of innovative ideas? DAOki provides a way
          for crypto people to get access to structured knowledge and concepts
          within several clicks and auto-reference links.
        </LeftPanelBody>
        <BottomLineWrapper>
          <BottomLineCircle />
          <BottomLine />
        </BottomLineWrapper>
      </LeftPanel>
      <RightPanel>
        <IconTextContainerWrapper>
          <IconWrapper>
            <ExchangeIcon />
          </IconWrapper>
          <IconTextWrapper>
            <IconTextTitle>
              Isolated knowledge points increase investment barriers in crypto
            </IconTextTitle>
            <IconTextBody>
              <strong>[Open]</strong>Permissionless, composable and
              decentralized editor tool for everyone. People can add various
              content types like text from mirror, twitter, medium, jpeg NFT
              from Opensea, music or video NFTs from any third–party platform
            </IconTextBody>
            <IconTextBody>
              <strong>[Connect]</strong> A rich knowledge base with
              cross-reference links. Easy for both readers and editors to access
              related background content for better demonstration of complicated
              ideas
            </IconTextBody>
            <IconTextBody>
              <strong>[Distinctions]</strong> Based on the expertise and
              feedback from the user community, DAOki will rank different pages
              for easier usages.
            </IconTextBody>
          </IconTextWrapper>
        </IconTextContainerWrapper>
        <IconTextContainer
          icon={<SphereIcon />}
          title="DAO in DAOki and why"
          body="As a data/knowledge aggregator, DAOki needs wide recognition 
          and verification for its curated information. From scattered 
          opinions to structured knowledge base, the whole curation process 
          requires a lot of effort in organizing and assessing data, which is 
          nearly impossible to accomplish by a small team. While DAO on the 
          other hand, can gather power from countless people. "
        />
      </RightPanel>
    </Wrapper>
  );
};

export default IntroductionSection;
