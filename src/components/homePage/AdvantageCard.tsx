/* Styled Components */
import {
  CardTopSectionTitle,
  CardTopSection,
  CardWrapper,
  CardBody,
} from "../../styles/homePage/AdvantageSection";

/* Child Components */
import { Button } from "antd";

type PropsType = {
  title: string;
  body: string;
  buttonText: string;
};

const AdvantageCard = ({ title, body, buttonText }: PropsType) => {
  return (
    <CardWrapper>
      <CardTopSection>
        <CardTopSectionTitle>{title}</CardTopSectionTitle>
      </CardTopSection>

      <CardBody>{body}</CardBody>
      <Button
        style={{
          background: "#3AC28D",
          color: "white",
          borderRadius: "4px",
          width: "90%",
          position: "absolute",
          bottom: "24px",
          left: "22px",
        }}
      >
        {buttonText}
      </Button>
    </CardWrapper>
  );
};

export default AdvantageCard;
