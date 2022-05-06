import { useState, useEffect } from "react";
import { Modal } from "antd";
import { connect } from "react-redux";

/* Styled Components */
import {
  LinkInputTitle,
  LinkInput,
} from "../../styles/createPage/RichTextEditor";

import { DATA_TYPE } from "../../data/Constants";
/* Actions */
import { updateTwitterWidget } from "../../data/actions/CreatePageActions";
import { parseTwitterLink } from "../common/Helper";

const mapDispatchToProps = (dispatch: any) => ({
  addNewTwitterWidget: (twitterId: string, id: string) =>
    dispatch(
      updateTwitterWidget({
        body: twitterId,
        id,
        type: DATA_TYPE.TWITTER_WIDGET,
      })
    ),
});

type PropsType = {
  visible: boolean;
  onClose: () => void;
  initialTwitterLink?: string;
  onCancelClick?: () => void;
  positionId: number;
} & ReturnType<typeof mapDispatchToProps>;

const TwitterLinkInputBox = ({
  initialTwitterLink,
  visible,
  positionId,
  onClose,
  onCancelClick,
  addNewTwitterWidget,
}: PropsType) => {
  const [twitterLink, setTwitterLink] = useState(initialTwitterLink);
  const onLinkChange = (event: any) => {
    // fire a search function here
    setTwitterLink(event.target.value);
  };
  const onOkClick = () => {
    if (!twitterLink) {
      Modal.warning({
        title: "Error",
        content: "Twitter link cannot be empty",
      });
      return;
    }
    const parsedTwitterId = parseTwitterLink(twitterLink);
    if (!parsedTwitterId || isNaN(Number(parsedTwitterId))) {
      Modal.warning({
        title: "Invalid twitter link format",
        content: "Currently only specific Twitter links are supported",
      });
      return;
    }
    addNewTwitterWidget(parsedTwitterId, String(positionId));
    onClose();
    setTwitterLink("");
  };

  useEffect(() => {
    return () => {
      setTwitterLink("");
    };
  }, []);

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
      onOk={onOkClick}
      onCancel={() => {
        if (onCancelClick) {
          onCancelClick();
        }
        onClose();
        setTwitterLink("");
      }}
    >
      <LinkInputTitle>Twitter Link</LinkInputTitle>
      <LinkInput
        type="text"
        placeholder="Add your link here"
        onChange={(event: any) => onLinkChange(event)}
        value={twitterLink}
      />
    </Modal>
  );
};

export default connect(null, mapDispatchToProps)(TwitterLinkInputBox);
