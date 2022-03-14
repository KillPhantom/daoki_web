/* Styled Components */
import {
  Wrapper,
  Description,
  ExternalLink,
} from "../../styles/createPage/ExternalLinkComponents";

type PropsType = {
  index: string;
  description: string;
  url: string;
};
const ExternalLinkComponent = ({ index, description, url }: PropsType) => {
  return (
    <Wrapper>
      <Description>{`[${index}] ${description}`}</Description>
      <ExternalLink>
        <a href={url}>{url}</a>
      </ExternalLink>
    </Wrapper>
  );
};

export default ExternalLinkComponent;
