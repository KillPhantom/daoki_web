import { useState } from "react";

/* Styled Components */
import {
  Wrapper,
  ContentWrapper,
  Content,
  RichTextWrapper,
  AddMoreButton,
  ProjectTitleWrapper,
  ProjectTitle,
  ProjectTitleInput,
  EditWrapper,
  ModuleWrapper,
  ModuleContextContainer,
  ModuleContentContainer,
  ModuleQuoteWrapper,
  ModuleQuoteContainer,
  ModuleQuotedContainer,
  ModuleTitleWrapper,
  ModuleTitle,
  LeftColorBar,
} from "../../styles/createPage/CreateProjectPage";

/* Child Components */
import { Button, Dropdown } from "antd";
import CreateProjectMenu from "./CreateProjectMenu";
import RichTextEditor from "../richText/RichTextEditor";
import Header from "../homePage/topSection/Header";
import ExternalLinkSection from "./ExternalLinksSection";

const MODULE_TYPE = {
  TEXT: "Text template",
  MIRROR: "Mirror link",
  TWITTER: "Twitter link",
  CODE: "Code template",
};

const CreateProjectPage = () => {
  const [showInitialPanel, setShowInitialPanel] = useState(true);
  const [contentList, setContentList] = useState<Array<any>>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [positionList, setPositionList] = useState<Array<number>>([]);
  const [currentPosition, setCurrentPosition] = useState(0);

  const onTextTemplateClick = () => {
    setShowInitialPanel(false);
    setShowDropdown(false);
    setCurrentPosition(currentPosition + 1);
    positionList.push(currentPosition);
    setPositionList(positionList);
    // leave time for the dropdown to disappear
    window.setTimeout(
      () =>
        setContentList([
          ...contentList,
          <RichTextWrapper>
            <RichTextEditor position={currentPosition} />
          </RichTextWrapper>,
        ]),
      10
    );
    // TODO add logic
  };

  const onMirrorLinkClick = () => {
    setShowInitialPanel(false);
    setShowDropdown(false);
    // TODO
  };

  const onTwitterLinkClick = () => {
    setShowInitialPanel(false);
    setShowDropdown(false);
    // TODO
  };
  const onCodeTemplateClick = () => {
    setShowInitialPanel(false);
    setShowDropdown(false);
    // TODO
  };

  const menu = [
    { menuText: MODULE_TYPE.TEXT, menuOnClick: onTextTemplateClick },
    { menuText: MODULE_TYPE.MIRROR, menuOnClick: onMirrorLinkClick },
    { menuText: MODULE_TYPE.TWITTER, menuOnClick: onTwitterLinkClick },
    { menuText: MODULE_TYPE.CODE, menuOnClick: onCodeTemplateClick },
  ];

  return (
    <Wrapper>
      <Header isOfficial />
      <ContentWrapper>
        {showInitialPanel ? (
          <Content>
            <Dropdown
              overlay={<CreateProjectMenu menu={menu} />}
              trigger={["click"]}
            >
              <Button
                style={{
                  background: "#3AC28D",
                  color: "white",
                  borderRadius: "4px",
                  width: "370px",
                  marginTop: "24%",
                }}
              >
                + Create Project
              </Button>
            </Dropdown>
          </Content>
        ) : (
          <>
            <ProjectTitleWrapper>
              <ProjectTitle>
                <ProjectTitleInput placeholder="Put your title here" />
              </ProjectTitle>

              <Button
                style={{
                  background: "rgba(30, 96, 218, 0.1)",
                  border: "1px solid #1E60DA",
                  borderRadius: "4px",
                  width: "116px",
                  height: "40px",
                  margin: "20px 10px 0 0 ",
                }}
              >
                Save to AR
              </Button>
              <Button
                style={{
                  background: "#3AC28D",
                  color: "white",
                  borderRadius: "4px",
                  width: "116px",
                  height: "40px",
                  marginTop: "20px ",
                }}
              >
                Submit
              </Button>
            </ProjectTitleWrapper>
            <EditWrapper>
              <ModuleWrapper>
                <ModuleContextContainer>
                  <ModuleTitleWrapper>
                    <LeftColorBar />
                    <ModuleTitle>Context</ModuleTitle>
                  </ModuleTitleWrapper>
                </ModuleContextContainer>
                <ModuleContentContainer>
                  {contentList.map((item) => item)}
                  <Dropdown
                    overlay={<CreateProjectMenu menu={menu} />}
                    trigger={["click"]}
                    onVisibleChange={(flag) => setShowDropdown(flag)}
                    visible={showDropdown}
                  >
                    <AddMoreButton>+ More</AddMoreButton>
                  </Dropdown>
                </ModuleContentContainer>
              </ModuleWrapper>
              <ModuleQuoteWrapper>
                <ModuleQuoteContainer>
                  <ModuleTitleWrapper>
                    <LeftColorBar />
                    <ModuleTitle>Quote topic</ModuleTitle>
                  </ModuleTitleWrapper>
                </ModuleQuoteContainer>
                <ModuleQuotedContainer>
                  <ModuleTitleWrapper>
                    <LeftColorBar />
                    <ModuleTitle>Quoted topic</ModuleTitle>
                  </ModuleTitleWrapper>
                </ModuleQuotedContainer>
              </ModuleQuoteWrapper>
            </EditWrapper>
            <ExternalLinkSection />
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default CreateProjectPage;
