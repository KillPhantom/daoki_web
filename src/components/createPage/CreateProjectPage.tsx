import { useState } from "react";

/* Styled Components */
import {
  Wrapper,
  ContentWrapper,
  Content,
  AddMoreButton,
  ProjectTitleWrapper,
  ProjectTitle,
  ProjectTitleInput,
  EditWrapper,
  ModuleWrapper,
  ModuleContentContainer,
} from "../../styles/createPage/CreateProjectPage";

/* Child Components */
import { Button, Dropdown } from "antd";
import CreateProjectMenu from "./CreateProjectMenu";
import RichTextEditor from "../richText/RichTextEditor";
import Header from "../homePage/topSection/Header";
import ExternalLinkSection from "./ExternalLinksSection";
import TwitterWidget from "./TwitterWidget";
import CodeBlock from "./CodeBlock";
import ContextMenu from "./ContextMenu";
import QuoteTopicMenu from "../createPage/QuoteTopicMenu";

/* Constants */
import { PageOneData } from "../../data/Example";
import { DATA_TYPE } from "../../data/Constants";

import {
  CodeTextType,
  RichTextType,
  TwitterWidgetType,
} from "../../data/types/CommonTypes";

const MODULE_TYPE = {
  TEXT: "Text template",
  MIRROR: "Mirror link",
  TWITTER: "Twitter link",
  CODE: "Code template",
};

const CreateProjectPage = () => {
  const topic = PageOneData;
  // const contentListOriginal = topic.data.map(
  //   (item: RichTextType | TwitterWidgetType | CodeTextType, index: number) => {
  //     switch (item.type) {
  //       case DATA_TYPE.RICH_TEXT:
  //         return <RichTextEditor richTextData={item} position={index} />;
  //       default:
  //         return null;
  //     }
  //   }
  // );
  const [showInitialPanel, setShowInitialPanel] = useState(true);
  const [contentList, setContentList] =
    useState<Array<any>>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [positionList, setPositionList] = useState<Array<number>>([]);
  const [currentPositionId, setCurrentPositionId] = useState(0);

  const onAddButtonClick = () => {
    setShowInitialPanel(false);
    setShowDropdown(false);
    setCurrentPositionId(currentPositionId + 1);
    positionList.push(currentPositionId);
    setPositionList(positionList);
  };
  const onItemRemoved = (positionId: number) => {
    contentList.splice(positionId, 1); // remove the element
    setContentList(contentList);
  };

  const onTextTemplateClick = () => {
    onAddButtonClick();
    // leave time for the dropdown to disappear
    window.setTimeout(
      () =>
        setContentList([
          ...contentList,
          <RichTextEditor position={currentPositionId} />,
        ]),
      10
    );
    // TODO add logic
  };

  const onMirrorLinkClick = () => {
    onAddButtonClick();

    // TODO
  };

  const onTwitterLinkClick = () => {
    onAddButtonClick();
    window.setTimeout(
      () =>
        setContentList([
          ...contentList,
          <TwitterWidget
            twitterId="933354946111705097"
            onDelete={() => onItemRemoved(currentPositionId)}
          />,
        ]),
      10
    );
  };
  const onCodeTemplateClick = () => {
    onAddButtonClick();
    window.setTimeout(
      () =>
        setContentList([
          ...contentList,
          <CodeBlock position={currentPositionId} />,
        ]),
      10
    );
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
                <ContextMenu />
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
              <QuoteTopicMenu />
            </EditWrapper>
            <ExternalLinkSection />
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default CreateProjectPage;
