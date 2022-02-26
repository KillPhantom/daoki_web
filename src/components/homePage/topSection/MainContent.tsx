import { Button } from "antd";

/* Styled Components */
import {
  MainContentWrapper,
  TextContentWrapper,
  Title,
  SubTitle,
  Body,
  FormContentWrapper,
  FormUnorderedList,
  FormUnorderedListSpan,
  FormTitle,
} from "../../../styles/homePage/topSection/MainContent";

const MainContent = () => {
  const onTextInputChange = (e: any) => {
    console.log("Change:", e?.target?.value);
  };
  return (
    <MainContentWrapper>
      <TextContentWrapper>
        <Title>DAOKI</Title>
        <SubTitle>Connecting history and decentralized knowledge</SubTitle>
        <Body>
          brief introduction to the projectbrief introduction to the project
          brief introduction to the projectbrief introduction to the project
          brief introduction to the projectbrief introduction to the project
          brief introduction to the
        </Body>
      </TextContentWrapper>
      <FormContentWrapper>
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
        />
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
          onChange={onTextInputChange}
        />

        <Button
          style={{
            background: "#3AC28D",
            color: "white",
            borderRadius: "4px",
            width: "100%",
            marginTop: "100px",
          }}
        >
          Submit
        </Button>
      </FormContentWrapper>
    </MainContentWrapper>
  );
};

export default MainContent;
