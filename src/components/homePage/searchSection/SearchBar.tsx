import { connect } from "react-redux";
import { useState } from "react";
import { StateType } from "../../../data/types/StateType";
import { AutoComplete } from "antd";
import { useNavigate } from "react-router-dom";

/* Styled Components */
import {
  SearchBarWrapper,
  SearchButton,
  SearchBarInput,
} from "../../../styles/homePage/SearchSection";

/* Child Components */
import SearchIcon from "../../common/icons/SearchIcon";

/* Actions */
import { searchTopic } from "../../../data/actions/HomePageActions";

/* Selectors */
import { getSearchTopicResult } from "../../../data/selectors/HomePageSelectors";

const mapStateToProps = (state: StateType) => ({
  searchResult: getSearchTopicResult(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  searchByName: (keyword: string, page: number, size: number) =>
    dispatch(searchTopic(keyword, page, size)),
});
type PropsType = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const SearchBar = ({ searchByName, searchResult }: PropsType) => {
  const onSearchClick = () => {
    searchByName(inputValue, 0, 100);
  };
  const [inputValue, setInputValue] = useState("");
  const navigator = useNavigate();

  const renderItem = (title: string, topicId: string) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => {
          navigator(`/topic/${topicId}`);
        }}
      >
        {title}
      </div>
    ),
  });

  const options = searchResult?.map((item) => {
    return renderItem(item.title, item.id);
  });
  return (
    <>
      <SearchBarWrapper>
        <SearchIcon overrideStyle={{ margin: "28px" }} />
        <AutoComplete
          value={inputValue}
          options={options}
          style={{ width: "70%" }}
          onChange={(e) => {
            searchByName(e, 0, 100);
            setInputValue(e);
          }}
        >
          <SearchBarInput />
        </AutoComplete>
        <SearchButton onClick={onSearchClick}>Search</SearchButton>
      </SearchBarWrapper>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
