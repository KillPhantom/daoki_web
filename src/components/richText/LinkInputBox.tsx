import { useState } from "react";
import { Modal } from "antd";
import { connect } from "react-redux";

/* Styled Components */
import {
  LinkInputTitle,
  LinkInput,
  RecommendLink,
  RecommendLinkWrapper,
  RecommendLinkScore,
  PreviewButtonWrapper,
} from "../../styles/createPage/RichTextEditor";
import BookShelfIcon from "../common/icons/BookShelfIcon";
import { Icon } from "./Components";
import { updateQuoteTopic } from "../../data/actions/CreatePageActions";
import { QuoteTopicType } from "../../data/types/CommonTypes";

const mapDispatchToProps = (dispatch: any) => ({
  addQuoteTopic: (quoteTopic: QuoteTopicType) =>
    dispatch(updateQuoteTopic(quoteTopic)),
});

type PropsType = {
  visible: boolean;
  onClose: () => void;
  initialUrl?: string;
  initialDescription?: string;
  onCancelClick?: () => void;
  setInputValue?: (
    value: string,
    description: string,
    isInternal: boolean
  ) => void;
} & ReturnType<typeof mapDispatchToProps>;

const LinkInputBox = ({
  visible,
  initialUrl = "",
  initialDescription = "",
  onClose,
  setInputValue,
  onCancelClick,
  addQuoteTopic,
}: PropsType) => {
  const [linkValue, setLinkValue] = useState(initialUrl);
  const [suggestTopics, setSuggestTopics] = useState([
    { title: "NFTX 官方中文版", link: "/example-page-2", score: 3320 },
    { title: "NFTX 简介", link: "/example-page-3", score: 10 },
  ]);
  const [description, setDescription] = useState(initialDescription);

  const onLinkChange = (event: any) => {
    // fire a search function here
    setLinkValue(event.target.value);
  };

  return (
    <Modal
      style={{
        minWidth: "410px",
        boxShadow: "0px 14px 28px 0px rgba(30, 96, 218, 0.1)",
        borderRadius: "4px",
      }}
      title="Add Links"
      visible={visible}
      okText="Save"
      onOk={() => {
        if (setInputValue) {
          setInputValue(linkValue, description, true);
        }
        onClose();
      }}
      onCancel={() => {
        if (onCancelClick) {
          onCancelClick();
        }
        onClose();
      }}
    >
      <LinkInputTitle>Links</LinkInputTitle>
      <LinkInput
        type="text"
        placeholder="Add your link here"
        onChange={(event: any) => onLinkChange(event)}
        value={linkValue}
      />
      <LinkInputTitle>Description</LinkInputTitle>
      <LinkInput
        type="text"
        placeholder="Give your link a brief description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <LinkInputTitle>
        Or chose recommended daoki topics for(demo only)
      </LinkInputTitle>
      <LinkInputTitle incline>
        {window.getSelection()?.toString()}
      </LinkInputTitle>
      {suggestTopics.map((item) => (
        <RecommendLinkWrapper>
          <BookShelfIcon overrideStyle={{ width: "24px", height: "24px" }} />
          <RecommendLink
            onClick={() => {
              addQuoteTopic(item);
              if (setInputValue) {
                setInputValue(item.link, item.title, true);
              }
              onClose();
            }}
          >
            {item.title}
          </RecommendLink>
          <RecommendLinkScore>{item.score} quote score</RecommendLinkScore>
          <PreviewButtonWrapper
            onClick={() => {
              window.open(item.link);
            }}
          >
            <Icon>visibility</Icon>
          </PreviewButtonWrapper>
        </RecommendLinkWrapper>
      ))}
    </Modal>
  );
};

export default connect(null, mapDispatchToProps)(LinkInputBox);
