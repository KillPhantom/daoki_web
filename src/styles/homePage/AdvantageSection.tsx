import styled from "styled-components";

/* Assets */
import AdvantageBackground from "../../assets/images/advantage_background.png";

export const SectionWrapper = styled.div`
  width: 100%;
  height: 848px;
  padding-top: 110px;
  background-image: url(${AdvantageBackground});
`;

export const SectionTitleTopLine = styled.div`
  margin: 0 48%;
  width: 56px;
  height: 4px;
  background: linear-gradient(90deg, #b6ff2e 0%, #3ac28d 100%);
`;

export const SectionTitle = styled.div`
  font-size: 56px;
  font-weight: 500;
  color: #142542;
  line-height: 72px;
`;

export const SectionCardWrapper = styled.div`
  display: flex;
  margin: 0 10%;
`;
export const CardWrapper = styled.div`
  width: 410px;
  height: 500px;
  margin: 25px 25px 0 0;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 14px 28px 0px rgba(30, 96, 218, 0.14);
  position: relative;
`;

export const CardTopSection = styled.div`
  width: 360px;
  height: 180px;
  background: #005ee2;
`;

export const CardTopSectionTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  line-height: 41px;
  padding: 18% 0 0 24px;
  text-align: left;
`;

export const CardBody = styled.div`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  color: #142542;
  line-height: 23px;
  text-align: left;
`;
