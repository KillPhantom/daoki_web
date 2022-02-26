/* Styled Components */
import {
  IconTextContainerWrapper,
  IconTextBody,
  IconTextTitle,
  IconTextWrapper,
  IconWrapper,
} from "../../styles/homePage/IntroductionSection";

type PropsType = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

const IconTextContainer = ({ icon, title, body }: PropsType) => {
  return (
    <IconTextContainerWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <IconTextWrapper>
        <IconTextTitle>{title}</IconTextTitle>
        <IconTextBody>{body}</IconTextBody>
      </IconTextWrapper>
    </IconTextContainerWrapper>
  );
};

export default IconTextContainer;
