import { connect } from "react-redux";
import { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

/* Styled Components */
import {
  MainContentWrapper,
  TextContentWrapper,
  Title,
  SubTitle,
  FormContentWrapper,
  FormUnorderedList,
  FormUnorderedListSpan,
  FormTitle,
  MyProjectCard,
  ErrorText,
  TopCircle,
  TopDot,
} from "../../../styles/homePage/topSection/MainContent";

import { emailValidationCheck } from "../../common/Helper";

import { submitCollaboratorInfo } from "../../../data/actions/HomePageActions";
import { MY_PROJECT_ROUTE } from "../../../routes";

const mapDispatchToProps = (dispatch: any) => ({
  submitInfo: (email: string, detail: string) =>
    dispatch(submitCollaboratorInfo(email, detail)),
});

type PropsType = {
  isOfficial?: boolean;
} & ReturnType<typeof mapDispatchToProps>;

const MainContent = ({ isOfficial, submitInfo }: PropsType) => {
  const navigate = useNavigate();
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
    });
  };

  return (
    <MainContentWrapper>
      <TextContentWrapper>
        <Title>DAOKi</Title>
        <SubTitle>connecting decentralized knowledge nodes.</SubTitle>
      </TextContentWrapper>
      {isOfficial ? (
        <FormContentWrapper>
          <MyProjectCard />
          <Button
            style={{
              background: "#3AC28D",
              color: "white",
              borderRadius: "4px",
              width: "100%",
              marginTop: "100px",
            }}
            onClick={() => navigate(MY_PROJECT_ROUTE)}
          >
            My Project
          </Button>
        </FormContentWrapper>
      ) : (
        <FormContentWrapper>
          <TopCircle />
          <TopDot />
          <FormTitle>Become an early community builder</FormTitle>
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
                What do you want to do for DAOKI?
              </FormUnorderedListSpan>
            </li>
          </FormUnorderedList>
          <textarea
            placeholder="Describe what you want to do with daoki here..."
            style={{
              height: 120,
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
              background: "#3AC28D",
              color: "white",
              borderRadius: "4px",
              width: "100%",
              marginTop: "100px",
            }}
            onClick={onClickSubmit}
          >
            Submit
          </Button>
        </FormContentWrapper>
      )}
    </MainContentWrapper>
  );
};

export default connect(null, mapDispatchToProps)(MainContent);
