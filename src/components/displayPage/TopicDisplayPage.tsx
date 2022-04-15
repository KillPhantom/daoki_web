import { useParams } from "react-router-dom";
import { connect } from "react-redux";

/* Styled Components */
import {
  Wrapper,
  ContentWrapper,
  ProjectTitle,
  ProjectTitleWrapper,
  MainBodyWrapper,
  ModuleWrapper,
  ModuleContentContainer,
} from "../../styles/displayPage/TopicDisplayPage";

/* Child Components */
import Header from "../homePage/topSection/Header";
import ExternalLinkSection from "../createPage/ExternalLinksSection";
import ContextMenu from "../createPage/ContextMenu";
import RichTextViewer from "../richText/RichTextViewer";
import QuoteTopicMenu from "../createPage/QuoteTopicMenu";

/* Constants */

import { DATA_TYPE, LINK_TYPE } from "../../data/Constants";
import {
  CodeTextType,
  RichTextType,
  TwitterWidgetType,
} from "../../data/types/CommonTypes";
import { fetchTopicDetail } from "../../data/actions/CreatePageActions";
import { useEffect } from "react";
import { StateType } from "../../data/types/StateType";

import { getCreatePageState } from "../../data/selectors/CreatePageSelectors";

const mapStateToProps = (state: StateType) => ({
  topicData: getCreatePageState(state),
});
const mapDispatchToProps = (dispatch: any) => ({
  fetchTopic: (topicId: string) => dispatch(fetchTopicDetail(topicId)),
});

type PropsType = {
  topic?: any;
} & ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const TopicDisplayPage = ({
  topic: OverrideTopicData,
  fetchTopic,
  topicData,
}: PropsType) => {
  const { topicId } = useParams<{ topicId: string }>();
  useEffect(() => {
    if (topicId) {
      fetchTopic(topicId);
    }
  }, [topicId]);
  const topic = OverrideTopicData ?? topicData;
  const contentList = topic.data.map(
    (item: RichTextType | TwitterWidgetType | CodeTextType) => {
      switch (item.type) {
        case DATA_TYPE.RICH_TEXT:
          return <RichTextViewer richTextData={item} />;
        default:
          return null;
      }
    }
  );

  let result = null;
  // override external link to this page only for example page
  if (OverrideTopicData) {
    result = [];
    const richTextData = topic.data;
    let currentIndex = 0;
    for (const data of richTextData) {
      if (data) {
        const textData = data.body;
        for (const allTypeData of textData) {
          if (allTypeData.type === LINK_TYPE && !allTypeData.isInternal) {
            result.push({
              index: currentIndex,
              url: allTypeData.url,
              description: allTypeData.description,
            });
            currentIndex++;
          }
          // find link in the nested children data
          const childrenLinks = allTypeData?.children?.filter(
            (item: any) => item.type === LINK_TYPE && !item.isInternal
          );
          for (const linkItem of childrenLinks) {
            result.push({
              index: currentIndex,
              url: linkItem.url,
              description: linkItem.description,
            });
            currentIndex++;
          }
        }
      }
    }
  }

  return (
    <Wrapper>
      <Header isOfficial />
      <ContentWrapper>
        <>
          <ProjectTitleWrapper>
            <ProjectTitle>{topic.title}</ProjectTitle>
          </ProjectTitleWrapper>
          <MainBodyWrapper>
            <ModuleWrapper>
              <ContextMenu />
              <ModuleContentContainer>
                {contentList.map((item: any) => item)}
              </ModuleContentContainer>
            </ModuleWrapper>
            <QuoteTopicMenu
              quoteTopics={topic.quoteTopics}
              quotedTopics={topic.quotedTopics}
            />
          </MainBodyWrapper>
          <ExternalLinkSection overrideExternalLinks={result} />
        </>
      </ContentWrapper>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicDisplayPage);
