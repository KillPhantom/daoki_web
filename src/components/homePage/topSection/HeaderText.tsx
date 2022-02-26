/* Styled Components */
import {
  MenuText,
  MenuTextBottomLine,
  HeaderTextContainer,
} from "../../../styles/homePage/topSection/Header";

type PropsType = {
  isSelected: boolean;
  text: string;
  onItemClick: () => void;
};

const HeaderText = ({ isSelected, text, onItemClick }: PropsType) => {
  return (
    <HeaderTextContainer onClick={onItemClick}>
      <MenuText isSelected={isSelected}>{text}</MenuText>
      <MenuTextBottomLine isSelected={isSelected} />
    </HeaderTextContainer>
  );
};

export default HeaderText;
