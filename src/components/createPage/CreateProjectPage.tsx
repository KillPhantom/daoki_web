import { useEffect, useState } from "react";
import { connect, MapDispatchToProps } from "react-redux";

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
import { DATA_TYPE, RICH_TEXT_DEFAULT_DATA } from "../../data/Constants";
import { ContentType } from "../../data/types/CommonTypes";
import { StateType } from "../../data/types/StateType";

/* Selectors */
import {
  getCreatePageQuoteTopics,
  getCreatePageData,
  getCreatePageTopic,
} from "../../data/selectors/CreatePageSelectors";

/* Actions */
import {
  moveContentUp,
  moveContentDown,
  deleteContent,
  updateTextContent,
  updateCodeSnippet,
  updateTwitterWidget,
  createTopic,
  updateTopicTitle,
  resetState,
} from "../../data/actions/CreatePageActions";

const MODULE_TYPE = {
  TEXT: "Text template",
  TWITTER: "Twitter link",
  CODE: "Code template",
};

const mapStateToProps = (state: StateType) => ({
  quoteTopics: getCreatePageQuoteTopics(state),
  contentList: getCreatePageData(state),
  topicTitle: getCreatePageTopic(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  createNewTopic: (
    title: string,
    content: Array<ContentType>,
    operator: string
  ) => dispatch(createTopic(title, content, operator)),
  moveItemUp: (id: number) => dispatch(moveContentUp(id)),
  moveItemDown: (id: number) => dispatch(moveContentDown(id)),
  deleteItem: (id: number) => dispatch(deleteContent(id)),
  addNewTextEditor: (id: number) =>
    dispatch(
      updateTextContent({
        title: "",
        body: RICH_TEXT_DEFAULT_DATA,
        type: DATA_TYPE.RICH_TEXT,
        id,
      })
    ),
  addNewTwitterWidget: (twitterId: string, id: number) =>
    dispatch(
      updateTwitterWidget({
        body: twitterId,
        id,
        type: DATA_TYPE.TWITTER_WIDGET,
      })
    ),
  addNewCodeSnippet: (id: number) =>
    dispatch(
      updateCodeSnippet({
        body: "",
        id,
        type: DATA_TYPE.CODE,
        language: "js",
      })
    ),
  updateTitle: (title: string) => dispatch(updateTopicTitle(title)),
  resetData: () => dispatch(resetState()),
});

type PropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const CreateProjectPage = ({
  addNewTwitterWidget,
  addNewCodeSnippet,
  addNewTextEditor,
  quoteTopics,
  moveItemUp,
  moveItemDown,
  deleteItem,
  contentList,
  createNewTopic,
  updateTitle,
  topicTitle,
  resetData,
}: PropsType) => {
  const [showInitialPanel, setShowInitialPanel] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPositionId, setCurrentPositionId] = useState(0);

  useEffect(() => {
    return () => {
      resetData();
    };
  }, []);
  const onSubmitClick = () => {
    createNewTopic(topicTitle, contentList, "1231231231231231232asfsfwef23");
  };

  const onAddButtonClick = () => {
    setShowInitialPanel(false);
    setShowDropdown(false);
    setCurrentPositionId(currentPositionId + 1);
  };
  const onTextTemplateClick = () => {
    onAddButtonClick();
    // leave time for the dropdown to disappear
    addNewTextEditor(currentPositionId);
    // TODO add logic
  };

  const onMirrorLinkClick = () => {
    onAddButtonClick();

    // TODO
  };

  const onTwitterLinkClick = () => {
    onAddButtonClick();
    addNewTwitterWidget("1511654147363246081", currentPositionId);
  };
  const onCodeTemplateClick = () => {
    onAddButtonClick();
    addNewCodeSnippet(currentPositionId);
  };

  const menu = [
    { menuText: MODULE_TYPE.TEXT, menuOnClick: onTextTemplateClick },
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
                <ProjectTitleInput
                  placeholder="Put your title here"
                  value={topicTitle}
                  onChange={(event) => updateTitle(event.target.value)}
                />
              </ProjectTitle>

              <Button
                disabled
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
                onClick={onSubmitClick}
              >
                Submit
              </Button>
            </ProjectTitleWrapper>
            <EditWrapper>
              <ModuleWrapper>
                <ContextMenu />
                <ModuleContentContainer>
                  {contentList.map((item: any) => {
                    switch (item?.type) {
                      case DATA_TYPE.RICH_TEXT:
                        return (
                          <RichTextEditor
                            richTextData={item}
                            position={item.id}
                            onDelete={() => deleteItem(item.id)}
                            onMoveItemUp={() => moveItemUp(item.id)}
                            onMoveItemDown={() => moveItemDown(item.id)}
                          />
                        );
                      case DATA_TYPE.CODE:
                        return <CodeBlock id={item.id} />;
                      case DATA_TYPE.TWITTER_WIDGET:
                        return (
                          <TwitterWidget
                            twitterId={item.body}
                            onDelete={() => deleteItem(item.id)}
                            onMoveItemUp={() => moveItemUp(item.id)}
                            onMoveItemDown={() => moveItemDown(item.id)}
                          />
                        );
                      default:
                        return null;
                    }
                  })}
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
              <QuoteTopicMenu quoteTopics={quoteTopics} />
            </EditWrapper>
            <ExternalLinkSection />
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectPage);
