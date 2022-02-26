import styled from "styled-components";

/* Assets */
import AboutUsBackground from "../../assets/images/about_us_background.png";

export const SectionWrapper = styled.div`
  width: 100%;
  height: 848px;
  padding-top: 110px;
  background-image: url(${AboutUsBackground});
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

export const SectionSubtitle = styled.div`
  margin: 0 20%;
  font-size: 24px;
  font-weight: 400;
  color: #142542;
  line-height: 31px;
  margin-top: 24px;
`;
