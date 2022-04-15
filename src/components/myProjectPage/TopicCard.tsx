/* Styled Components */
import {
  TopicCardPreview,
  TopicAttributeTitle,
  TopicAttributeValue,
  TopicAttributeWrapper,
  TopicCardShareIconWrapper,
  TopicCardTitle,
  TopicCardWrapper,
} from "../../styles/myProjectPage/MyProjectPage";
import ShareIcon from "../common/icons/ShareIcon";
import TopicDefaultIcon from "../common/icons/TopicDefaultIcon";

import type { TopicAbstractType } from "../../data/types/CommonTypes";

type PropsType = {
  topic: TopicAbstractType;
};
const TopicCard = ({ topic }: PropsType) => {
  return (
    <TopicCardWrapper>
      <TopicCardPreview>
        <TopicDefaultIcon />
        <TopicCardShareIconWrapper>
          <ShareIcon />
        </TopicCardShareIconWrapper>
      </TopicCardPreview>

      <TopicCardTitle>{topic.title}</TopicCardTitle>
      <TopicAttributeWrapper>
        <TopicAttributeTitle>Quote index</TopicAttributeTitle>
        <TopicAttributeValue>{topic.index}</TopicAttributeValue>
      </TopicAttributeWrapper>
      <TopicAttributeWrapper>
        <TopicAttributeTitle>View count</TopicAttributeTitle>
        <TopicAttributeValue>{topic.viewCount}</TopicAttributeValue>
      </TopicAttributeWrapper>
    </TopicCardWrapper>
  );
};

export default TopicCard;
