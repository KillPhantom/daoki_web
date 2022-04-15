import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

/* Styled Components */
import {
  Button,
  MainContentWrapper,
  TitleWrapper,
  Title,
  ContentWrapper,
  Wrapper,
  MainContent,
  InfoText,
} from "../../styles/myProjectPage/MyProjectPage";

/* Child Components */
import TopicCard from "./TopicCard";
import Header from "../homePage/topSection/Header";

/* Routes */
import { CREATE_PROJECT_ROUTE } from "../../routes";
import { StateType } from "../../data/types/StateType";
import {
  getUserAuthToken,
  getUserTopics,
} from "../../data/selectors/UserSelectors";

const mapStateToProps = (state: StateType) => ({
  isLoggedIn: getUserAuthToken(state),
  topics: getUserTopics(state),
});

type PropsType = ReturnType<typeof mapStateToProps>;

const MyProjectPage = ({ isLoggedIn, topics }: PropsType) => {
  const navigate = useNavigate();

  const topicContent = topics?.map((item) => <TopicCard topic={item} />);

  const mainContent = isLoggedIn ? (
    <ContentWrapper>
      {topics.length > 0 ? (
        topicContent
      ) : (
        <InfoText>You have no topic yet</InfoText>
      )}
    </ContentWrapper>
  ) : (
    <ContentWrapper>
      <InfoText>Connect your wallet to see your topics</InfoText>
    </ContentWrapper>
  );

  return (
    <Wrapper>
      <Header isOfficial />
      <MainContent>
        <MainContentWrapper>
          <TitleWrapper>
            <Title>My Project</Title>
            <Button
              onClick={() => {
                navigate(CREATE_PROJECT_ROUTE);
              }}
            >
              Create Project
            </Button>
          </TitleWrapper>
          {mainContent}
        </MainContentWrapper>
      </MainContent>
    </Wrapper>
  );
};

export default connect(mapStateToProps)(MyProjectPage);
