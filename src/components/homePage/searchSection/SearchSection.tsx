import { useEffect } from "react";
import { connect } from "react-redux";

/* Styled Components */
import {
  ContentWrapper,
  Wrapper,
} from "../../../styles/homePage/SearchSection";

/* Actions */
import { fetchHomePageInitialData } from "../../../data/actions/HomePageActions";

/* Child Components */
import HotTopics from "./HotTopics";
import RewardLists from "./RewardLists";
import SearchBar from "./SearchBar";

const mapDispatchToProps = (dispatch: any) => ({
  fetchInitialData: () => dispatch(fetchHomePageInitialData),
});

type PropsType = ReturnType<typeof mapDispatchToProps>;

const SearchSection = ({ fetchInitialData }: PropsType) => {
  useEffect(() => {
    fetchInitialData();
  }, []);
  return (
    <Wrapper>
      <SearchBar />
      <ContentWrapper>
        <HotTopics />
        <RewardLists />
      </ContentWrapper>
    </Wrapper>
  );
};

export default connect(null, mapDispatchToProps)(SearchSection);
