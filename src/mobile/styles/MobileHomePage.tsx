import styled from "styled-components";

import background from "../../assets/images/mobile_background.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const BackgroundImage = styled.img.attrs({ src: background })`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Title = styled.div`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 152.7%;
  color: #4b5563;
`;
export const ColorfulTitle = styled.div`
  margin-top: 20%;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  background: linear-gradient(
    190deg,
    #3b82f6 63.77%,
    #ec4899 83.43%,
    #3b82f6 99.94%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const TextBody = styled.div`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #4b5563;
  margin-top: 40px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormContentWrapper = styled.div`
  font-family: "Space Grotesk";
  height: fit-content;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0px 14px 28px 0px rgba(30, 96, 218, 0.14);
  position: relative;
  margin-top: 20px;
  border-radius: 30px;
`;

export const FormUnorderedList = styled.ul`
  text-align: left;
  color: #1e60da;
  padding-left: 14px;
  margin-bottom: 4px;
`;

export const FormUnorderedListSpan = styled.span`
  font-weight: 600;
  color: #142542;
  line-height: 21px;
`;

export const FormTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #142542;
  line-height: 31px;
  width: 389px;
`;

export const ErrorText = styled.div`
  text-align: left;
  color: red;
  font-weight: 400;
  line-height: 21px;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 60px;
`;
