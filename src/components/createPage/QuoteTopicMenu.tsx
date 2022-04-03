import { useNavigate } from "react-router-dom";

/* Types */
import type { QuoteTopicType } from "../../data/types/CommonTypes";

import {
  ModuleQuoteWrapper,
  ModuleQuoteContainer,
  ModuleQuotedContainer,
  ModuleTitleWrapper,
  ModuleTitle,
  LeftColorBar,
  QuoteTitle,
  QuoteTitleWrapper,
} from "../../styles/createPage/QuoteTopicMenu";

/* Child Component */
import ShieldIcon from "../common/icons/ShiedIcon";

type PropsType = {
  quotedTopics?: Array<QuoteTopicType>;
  quoteTopics?: Array<QuoteTopicType>;
};

const QuoteTopicMenu = ({ quotedTopics, quoteTopics }: PropsType) => {
  const navigate = useNavigate();
  return (
    <ModuleQuoteWrapper>
      <ModuleQuoteContainer>
        <ModuleTitleWrapper>
          <LeftColorBar />
          <ModuleTitle>Quote topic</ModuleTitle>
        </ModuleTitleWrapper>
        {quoteTopics?.map((item: QuoteTopicType) => (
          <QuoteTitleWrapper>
            <ShieldIcon overrideStyle={{ width: "20px", height: "20px" }} />
            <QuoteTitle onClick={() => navigate(item.link)}>
              {item.title}
            </QuoteTitle>
          </QuoteTitleWrapper>
        ))}
      </ModuleQuoteContainer>
      <ModuleQuotedContainer>
        <ModuleTitleWrapper>
          <LeftColorBar />
          <ModuleTitle>Quoted topic</ModuleTitle>
        </ModuleTitleWrapper>
        {quotedTopics?.map((item: QuoteTopicType) => (
          <QuoteTitleWrapper>
            <ShieldIcon overrideStyle={{ width: "26px", height: "26px" }} />
            <QuoteTitle onClick={() => navigate(item.link)}>
              {item.title}
            </QuoteTitle>
          </QuoteTitleWrapper>
        ))}
      </ModuleQuotedContainer>
    </ModuleQuoteWrapper>
  );
};

export default QuoteTopicMenu;
