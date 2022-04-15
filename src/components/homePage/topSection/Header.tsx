import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/* Styled Components */
import {
  HeaderContainer,
  IconWrapper,
  MenuText,
  MenuContainer,
  RightMenuWrapper,
  HeaderWrapper,
  Logo,
} from "../../../styles/homePage/topSection/Header";

/* Child Component */
import TwitterIcon from "../../common/icons/TwitterIcon";
import GithubIcon from "../../common/icons/GithubIcon";
import DiscordIcon from "../../common/icons/DiscordIcon";
import WalletButton from "./WalletButton";
import { Modal } from "antd";

/* Routes */
import {
  isOnHomePage,
  isOnCreateProjectPage,
  MY_PROJECT_ROUTE,
} from "../../../routes";

import { CREATE_PROJECT_ROUTE, DEMO_ROUTE } from "../../../routes";

type PropsType = {
  isOfficial?: boolean;
};

const Header = ({ isOfficial }: PropsType) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo
          onClick={() => {
            if (!isOnHomePage(location)) {
              navigate(DEMO_ROUTE);
            }
          }}
        />
        {isOfficial && (
          <MenuContainer>
            <MenuText onClick={() => navigate(MY_PROJECT_ROUTE)}>
              My Project
            </MenuText>
            <MenuText
              isSelected={isOnCreateProjectPage(location)}
              onClick={() => navigate(CREATE_PROJECT_ROUTE)}
            >
              Create Project
            </MenuText>
          </MenuContainer>
        )}
        <RightMenuWrapper>
          <IconWrapper>
            <TwitterIcon
              overrideStyle={{ marginRight: "32px" }}
              onClick={() => window.open("https://twitter.com/DAOki_DAO")}
            />
            <DiscordIcon
              overrideStyle={{ marginRight: "32px" }}
              onClick={() => window.open("https://discord.gg/6YnradNndM")}
            />
            <GithubIcon
              onClick={() => {
                Modal.info({
                  content: "Coming soon",
                });
              }}
            />
          </IconWrapper>
          {isOfficial && <WalletButton />}
        </RightMenuWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
