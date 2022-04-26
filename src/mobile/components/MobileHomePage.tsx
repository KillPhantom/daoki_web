import {
  Wrapper,
  BackgroundImage,
  Title,
  ColorfulTitle,
  LogoWrapper,
  TextBody,
  IconWrapper,
} from "../styles/MobileHomePage";
import { Logo } from "../../styles/homePage/topSection/Header";

/* Child Components */
import SubmitInfoCard from "./SubmitInfoCard";
import TwitterIcon from "../../components/common/icons/TwitterIcon";
import GithubIcon from "../../components/common/icons/GithubIcon";
import DiscordIcon from "../../components/common/icons/DiscordIcon";
import { Modal } from "antd";

const MobileHomePage = () => {
  return (
    <Wrapper>
      <BackgroundImage />
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <ColorfulTitle>Daoki Mobile</ColorfulTitle>
      <Title>
        is coming soon! 👋🏻 <br />
        view our desktop version
      </Title>
      <TextBody>
        Join our community by submitting your information below!
      </TextBody>
      <SubmitInfoCard />

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
    </Wrapper>
  );
};

export default MobileHomePage;
