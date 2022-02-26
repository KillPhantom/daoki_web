/* Styled Components */
import {
  Logo,
  HeaderContainer,
  IconWrapper,
} from "../../../styles/homePage/topSection/Header";

/* Child Component */
import HeaderText from "./HeaderText";
import TwitterIcon from "../../common/icons/TwitterIcon";
import GithubIcon from "../../common/icons/GithubIcon";
import DiscordIcon from "../../common/icons/DiscordIcon";

/* Constants */
// import { MENU_KEY } from "../../data/Constants";

const Header = () => {
  // const [currentMenu, setCurrentMenu] = useState(MENU_KEY.HOME);
  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
      {/* <MenuContainer>
        <HeaderText
          text={MENU_KEY.HOME}
          isSelected={currentMenu === MENU_KEY.HOME}
          onItemClick={() => setCurrentMenu(MENU_KEY.HOME)}
        />
        <HeaderText
          text={MENU_KEY.CREATE_PROJECT}
          isSelected={currentMenu === MENU_KEY.CREATE_PROJECT}
          onItemClick={() => setCurrentMenu(MENU_KEY.CREATE_PROJECT)}
        />
        <HeaderText
          text={MENU_KEY.PROJECT_POOL}
          isSelected={currentMenu === MENU_KEY.PROJECT_POOL}
          onItemClick={() => setCurrentMenu(MENU_KEY.PROJECT_POOL)}
        />
      </MenuContainer> */}
      <IconWrapper>
        <TwitterIcon overrideStyle={{ marginRight: "32px" }} />
        <DiscordIcon overrideStyle={{ marginRight: "32px" }} />
        <GithubIcon />
      </IconWrapper>
    </HeaderContainer>
  );
};

export default Header;
