import { useState } from "react";
import { useLocation } from "react-router-dom";

/* Styled Components */
import {
  HeaderContainer,
  IconWrapper,
  MenuText,
  MenuContainer,
  Button,
  RightMenuWrapper,
  HeaderWrapper,
  Logo,
} from "../../../styles/homePage/topSection/Header";

/* Child Component */
import TwitterIcon from "../../common/icons/TwitterIcon";
import GithubIcon from "../../common/icons/GithubIcon";
import DiscordIcon from "../../common/icons/DiscordIcon";
import WalletButton from "./WalletButton";
/* Routes */
import { isOnHomePage, isOnCreateProjectPage } from "../../../routes";

type PropsType = {
  isOfficial?: boolean;
};

const Header = ({ isOfficial }: PropsType) => {
  const location = useLocation();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        {isOfficial && (
          <MenuContainer>
            <MenuText>My Project</MenuText>
            <MenuText isSelected={isOnCreateProjectPage(location)}>
              Create Project
            </MenuText>
          </MenuContainer>
        )}
        <RightMenuWrapper>
          <IconWrapper>
            <TwitterIcon overrideStyle={{ marginRight: "32px" }} />
            <DiscordIcon overrideStyle={{ marginRight: "32px" }} />
            <GithubIcon />
          </IconWrapper>
          {isOfficial && <WalletButton />}
        </RightMenuWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
