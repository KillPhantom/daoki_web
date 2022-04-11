/* Styled Components */
import {
  SearchBarWrapper,
  SearchBarInputWrapper,
  SearchButton,
  SearchBarInput,
} from "../../../styles/homePage/SearchSection";

/* Child Components */
import { Modal } from "antd";

/* Child Components */
import SearchIcon from "../../common/icons/SearchIcon";

const SearchBar = () => {
  const onSearch = () => {};
  return (
    <SearchBarWrapper>
      <SearchIcon overrideStyle={{ margin: "28px" }} />
      <SearchBarInput />
      <SearchButton
        onClick={() =>
          Modal.info({
            content: "Coming soon",
          })
        }
      >
        Search
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
