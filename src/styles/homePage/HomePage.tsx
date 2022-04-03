import styled from "styled-components";

import BgLeft from "../../assets/images/top_bg_left.png";
import BgRight from "../../assets/images/top_bg_right.png";

export const TopSection = styled.div`
  width: 100%;
  height: 830px;
  background: linear-gradient(
    270deg,
    rgba(227, 247, 255, 0.1) 0%,
    #e3f7ff 49%,
    rgba(227, 247, 255, 0) 100%
  );
  transform: rotate(-2deg);
  margin-top: -50px;
  padding-top: 50px;
`;

export const RotateWrapper = styled.div`
  transform: rotate(2deg);
  position: relative;
`;

export const Wrapper = styled.div`
  overflow-x: hidden;
`;

export const TopBgLeft = styled.img.attrs({ src: BgLeft })`
  position: absolute;
  bottom: -326px;
  left: -300px;
`;

export const TopBgRight = styled.img.attrs({ src: BgRight })`
  position: absolute;
  bottom: 60px;
  right: -150px;
`;
