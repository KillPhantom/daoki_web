import { useNavigate } from "react-router-dom";

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
import { Modal } from "antd";

/* HOCs */
import EditSideBarHOC from "../common/hoc/EditSideBarHOC";

import type { TopicAbstractType } from "../../data/types/CommonTypes";

type PropsType = {
  topic: TopicAbstractType;
};
const TopicCard = ({ topic }: PropsType) => {
  const navigator = useNavigate();
  return (
    <TopicCardWrapper onClick={() => navigator("/topic/" + topic.id)}>
      <TopicCardPreview>
        <TopicDefaultIcon />
        <TopicCardShareIconWrapper
          onClick={(event) => {
            event.stopPropagation();
            window.navigator.clipboard.writeText(
              "https://daoki.xyz/topic/" + topic.id
            );
            Modal.info({
              title: "You have copied the link to clipboard!",
              content: "Share with your friend for what you've done!",
            });
          }}
        >
          <ShareIcon />
        </TopicCardShareIconWrapper>
      </TopicCardPreview>

      <TopicCardTitle>{topic.title}</TopicCardTitle>
      <TopicAttributeWrapper>
        <TopicAttributeTitle>Quote index</TopicAttributeTitle>
        <TopicAttributeValue>
          {topic.index ?? "Coming soon"}
        </TopicAttributeValue>
      </TopicAttributeWrapper>
      <TopicAttributeWrapper>
        <TopicAttributeTitle>View count</TopicAttributeTitle>
        <TopicAttributeValue>{topic.viewCount}</TopicAttributeValue>
      </TopicAttributeWrapper>
    </TopicCardWrapper>
  );
};

export default EditSideBarHOC(TopicCard);
