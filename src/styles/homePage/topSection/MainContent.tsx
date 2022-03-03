import styled from "styled-components";

import MyProjectBackground from "../../../assets/images/my_project_background.png";

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
  font-size: 56px;
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
