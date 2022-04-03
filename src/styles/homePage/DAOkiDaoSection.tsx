import styled from "styled-components";

/* Assets */
import Dot from "../../assets/images/dot_bottom.png";
import Circle from "../../assets/images/circle_green.png";

export const SectionWrapper = styled.div`
  width: 100%;
  height: 1080px;
  padding-top: 110px;
  background: linear-gradient(
    270deg,
    rgba(227, 247, 255, 0.1) 0%,
    #e3f7ff 49%,
    rgba(227, 247, 255, 0) 100%
  );
  margin-top: -40px;
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

export const ContentWrapper = styled.div`
  position: relative;
`;

export const ContentCardWrapper = styled.div<{ isCollapsed?: boolean }>`
  width: 1280px;
  position: relative;
  height: ${({ isCollapsed }) => (isCollapsed ? "180px" : "fit-content")};
  margin: 16px auto 0;
  background: #ffffff;
  box-shadow: 0px 14px 28px 0px rgba(30, 96, 218, 0.14);
  border-radius: 4px;
  padding: 24px;
  overflow: hidden;
`;

export const ContentCardTitleWrapper = styled.div`
  display: flex;
`;

export const ContentCardTitle = styled.div<{ color?: string }>`
  font-size: 28px;
  font-weight: bold;
  color: ${({ color }) => color ?? "#FFA700"};
  line-height: 36px;
  margin-left: 8px;
`;

export const ContentCardBody = styled.div`
  text-align: left;
  font-size: 18px;
  margin: 16px 0 0 48px;
  font-weight: 400;
  color: #142542;
  line-height: 23px;
`;

export const CardShadowCover = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1280px;
  height: 69px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  border-radius: 4px;
`;

export const DotSquare = styled.img.attrs({ src: Dot })`
  position: absolute;
  top: -46px;
  left: 510px;
`;

export const BottomCircle = styled.img.attrs({ src: Circle })`
  position: absolute;
  bottom: -100px;
  right: 400px;
`;
