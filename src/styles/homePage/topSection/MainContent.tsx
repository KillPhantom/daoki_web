import styled from "styled-components";

import MyProjectBackground from "../../../assets/images/my_project_background.png";
import CircleBlue from "../../../assets/images/circle_blue.png";
import DotSquare from "../../../assets/images/dot_top.png";

export const MyProjectCard = styled.img.attrs({ src: MyProjectBackground })`
  margin: 80px auto 0;
`;
export const MainContentWrapper = styled.div`
  display: flex;
  margin: 0 10%;
  margin-top: 120px;
  justify-content: center;
`;

export const TextContentWrapper = styled.div`
  width: 620px;
  text-align: left;
`;

export const Title = styled.div`
  font-size: 80px;
  font-weight: 500;
  color: #142542;
  line-height: 103px;
`;

export const SubTitle = styled.div`
  font-size: 54px;
  font-weight: 400;
  color: #142542;
  line-height: 72px;
  margin-top: 16px;
`;

export const Body = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #142542;
  line-height: 31px;
  margin-top: 10px;
`;

export const FormContentWrapper = styled.div`
  width: 452px;
  margin-left: 160px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0px 14px 28px 0px rgba(30, 96, 218, 0.14);
  padding: 24px;
  position: relative;
`;

export const FormTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #142542;
  line-height: 31px;
  width: 389px;
`;

export const FormUnorderedList = styled.ul`
  text-align: left;
  color: #1e60da;
  padding-left: 14px;
  margin-bottom: 4px;
`;

export const FormUnorderedListSpan = styled.span`
  font-weight: 400;
  color: #142542;
  line-height: 21px;
`;

export const ErrorText = styled.div`
  text-align: left;
  color: red;
  font-weight: 400;
  line-height: 21px;
`;

export const TopCircle = styled.img.attrs({ src: CircleBlue })`
  position: absolute;
  top: -90px;
  right: 20px;
  z-index: -1;
`;

export const TopDot = styled.img.attrs({ src: DotSquare })`
  position: absolute;
  bottom: -60px;
  left: -60px;
  z-index: -1;
`;
