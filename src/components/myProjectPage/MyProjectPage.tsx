import { useEffect } from "react";
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

/* Actions */
import {
  deleteUserTopic,
  fetchUserTopics,
} from "../../data/actions/UserActions";
import { getUserIdCookie, getAuthTokenCookie } from "../../utils/Cookie";

const mapStateToProps = (state: StateType) => ({
  isLoggedIn: getUserAuthToken(state),
  topics: getUserTopics(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUserAllTopics: (userId: string) => dispatch(fetchUserTopics(userId)),
  deleteTopic: (topicId: string, token: string) =>
    dispatch(deleteUserTopic(topicId, token)),
});

type PropsType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const MyProjectPage = ({
  isLoggedIn,
  topics,
  fetchUserAllTopics,
  deleteTopic,
}: PropsType) => {
  const navigate = useNavigate();
  const token = getAuthTokenCookie();
  useEffect(() => {
    const userID = getUserIdCookie();
    if (userID && !topics) {
      fetchUserAllTopics(userID);
    }
  }, []);

  const topicContent = topics?.map((item) => (
    <TopicCard
      topic={item}
      onDelete={token ? () => deleteTopic(item.id, token) : undefined}
      overrideRight="0px"
    />
  ));

  const mainContent = isLoggedIn ? (
    <ContentWrapper>
      {topics && topics.length > 0 ? (
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProjectPage);
