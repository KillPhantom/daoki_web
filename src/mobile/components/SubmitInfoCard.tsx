import { connect } from "react-redux";
import { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

/* Styled Components */
import {
  FormContentWrapper,
  FormUnorderedList,
  FormUnorderedListSpan,
  FormTitle,
  ErrorText,
} from "../styles/MobileHomePage";

import { emailValidationCheck } from "../../components/common/Helper";

import { submitCollaboratorInfo } from "../../data/actions/HomePageActions";

const mapDispatchToProps = (dispatch: any) => ({
  submitInfo: (email: string, detail: string) =>
    dispatch(submitCollaboratorInfo(email, detail)),
});

type PropsType = ReturnType<typeof mapDispatchToProps>;

const SubmitInfoCard = ({ submitInfo }: PropsType) => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [textInputValue, setTextInputValue] = useState("");
  const [emailInputError, setEmailInputError] = useState<string | null>(null);
  const [textInputError, setTextInputError] = useState<string | null>(null);

  const onClickSubmit = () => {
    if (!emailValidationCheck(emailInputValue)) {
      setEmailInputError("Please use a valid email.");
      return;
    }
    if (textInputValue.length < 10) {
      setTextInputError("Please provide more information.");
      return;
    }
    submitInfo(emailInputValue, textInputValue);
    Modal.success({
      content: "Thanks for you participation!",
      centered: true,
    });
  };

  return (
    <FormContentWrapper>
      <FormUnorderedList>
        <li>
          <FormUnorderedListSpan>E-mail</FormUnorderedListSpan>
        </li>
      </FormUnorderedList>
      <input
        placeholder="your email"
        style={{
          width: "100%",
          border: "solid 1px #C9D9F7",
          background: "#F5F7FD",
          padding: "6px 16px",
        }}
        onChange={(e) => {
          setEmailInputValue(e.target.value);
          setEmailInputError(null);
        }}
        value={emailInputValue}
      />
      {emailInputError && <ErrorText>{emailInputError}</ErrorText>}
      <FormUnorderedList style={{ marginTop: "16px" }}>
        <li>
          <FormUnorderedListSpan>
            What do you want to do for Daoki?
          </FormUnorderedListSpan>
        </li>
      </FormUnorderedList>
      <textarea
        placeholder="Describe what you want to do with daoki here..."
        style={{
          height: 100,
          width: "100%",
          border: "solid 1px #C9D9F7",
          background: "#F5F7FD",
          padding: "6px 16px",
        }}
        value={textInputValue}
        onChange={(e) => {
          setTextInputValue(e.target.value);
          setTextInputError(null);
        }}
      />
      {textInputError && <ErrorText>{textInputError}</ErrorText>}
      <Button
        style={{
          background: "#188AEC",
          color: "white",
          borderRadius: "4px",
          width: "100%",
          marginTop: "10px",
        }}
        onClick={onClickSubmit}
      >
        Submit
      </Button>
    </FormContentWrapper>
  );
};

export default connect(null, mapDispatchToProps)(SubmitInfoCard);
