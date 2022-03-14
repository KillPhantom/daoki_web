import { useState } from "react";
import { Modal } from "antd";

/* Styled Components */
import {
  LinkInputTitle,
  LinkInput,
  RecommendLink,
} from "../../styles/createPage/RichTextEditor";

type PropsType = {
  visible: boolean;
  onClose: () => void;
  initialUrl?: string;
  initialDescription?: string;
  onCancelClick?: () => void;
  setInputValue?: (value: string, description: string) => void;
};
const LinkInputBox = ({
  visible,
  initialUrl = "",
  initialDescription = "",
  onClose,
  setInputValue,
  onCancelClick,
}: PropsType) => {
  const [linkValue, setLinkValue] = useState(initialUrl);
  const [suggestLinks, setSuggestLinks] = useState(["https:www.google.com"]);
  const [description, setDescription] = useState(initialDescription);

  const onLinkChange = (event: any) => {
    // fire a search function here
    setLinkValue(event.target.value);
  };

  return (
    <Modal
      style={{
        maxWidth: "410px",
        boxShadow: "0px 14px 28px 0px rgba(30, 96, 218, 0.1)",
        borderRadius: "4px",
      }}
      title="Add Links"
      visible={visible}
      okText="Save"
      onOk={() => {
        if (setInputValue) {
          setInputValue(linkValue, description);
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
      <LinkInputTitle>Chose recommend links</LinkInputTitle>
      {suggestLinks.map((item) => (
        <div>
          <RecommendLink
            onClick={() => {
              setLinkValue(item);
            }}
          >
            {item}
          </RecommendLink>
        </div>
      ))}
    </Modal>
  );
};

export default LinkInputBox;
