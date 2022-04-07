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
  quotedTopics?: Array<QuoteTopicType | null | undefined>;
  quoteTopics?: Array<QuoteTopicType | null | undefined>;
};

const QuoteTopicMenu = ({ quotedTopics, quoteTopics }: PropsType) => {
  const navigate = (url: string) => {
    window.location.href = url;
  };

  return (
    <ModuleQuoteWrapper>
      <ModuleQuoteContainer>
        <ModuleTitleWrapper>
          <LeftColorBar />
          <ModuleTitle>Quote topic</ModuleTitle>
        </ModuleTitleWrapper>
        {quoteTopics?.map(
          (item: QuoteTopicType | null | undefined) =>
            item && (
              <QuoteTitleWrapper>
                <ShieldIcon overrideStyle={{ width: "20px", height: "20px" }} />
                <QuoteTitle onClick={() => navigate(item.link)}>
                  {item.title}
                </QuoteTitle>
              </QuoteTitleWrapper>
            )
        )}
      </ModuleQuoteContainer>
      <ModuleQuotedContainer>
        <ModuleTitleWrapper>
          <LeftColorBar />
          <ModuleTitle>Quoted topic</ModuleTitle>
        </ModuleTitleWrapper>
        {quotedTopics?.map(
          (item: QuoteTopicType | null | undefined) =>
            item && (
              <QuoteTitleWrapper>
                <ShieldIcon overrideStyle={{ width: "26px", height: "26px" }} />
                <QuoteTitle onClick={() => navigate(item.link)}>
                  {item.title}
                </QuoteTitle>
              </QuoteTitleWrapper>
            )
        )}
      </ModuleQuotedContainer>
    </ModuleQuoteWrapper>
  );
};

export default QuoteTopicMenu;
