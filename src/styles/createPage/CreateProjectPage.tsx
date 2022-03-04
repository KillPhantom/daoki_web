import styled from "styled-components";

/* Images */
import BackgroundImg from "../../assets/images/background.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${BackgroundImg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

export const Content = styled.div`
  margin: 0 10%;
  width: 100%;
  max-width: 1280px;
  min-height: 700px;
  background: white;
`;

export const MenuText = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  color: #142542;
  line-height: 22px;
  padding: 12px;
  font-family: PingFangSC-Regular, PingFang SC !important;
`;

/* Module */

export const EditWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  margin-top: 24px;
`;

export const ModuleWrapper = styled.div`
  display: flex;
  background: white;
  width: 80%;
`;

export const ModuleContextContainer = styled.div`
  width: 224px;
  min-height: 400px;
  border-right: 1px solid rgba(20, 37, 66, 0.1);
`;
export const ModuleContentContainer = styled.div``;

export const ModuleQuoteWrapper = styled.div`
  width: 240px;
  margin-left: 14px;
`;

export const ModuleQuoteContainer = styled.div`
  background: white;
  padding: 12px;
`;
export const ModuleQuotedContainer = styled.div`
  background: white;
  padding: 12px;
  margin-top: 12px;
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
`;

export const ProjectTitle = styled.div`
  height: 86px;
  background: white;
  width: 100%;
  max-width: 1024px;
  margin-right: 40px;
`;

export const ProjectTitleInput = styled.input.attrs({ type: "text" })`
  border: none;
  font-size: 28px;
  font-weight: 500;
  color: #142542;
  line-height: 40px;
  padding: 24px 0 0 12px;
  width: 100%;
  :focus {
    outline: none;
  }
`;

export const RichTextWrapper = styled.div`
  padding: 20px;
  text-align: left;
  max-width: 768px;
  margin: 20px;
  background: #f5f7fd;
`;

export const AddMoreButton = styled.div`
  width: 100%;
  margin-left: 20px;
  height: 40px;
  max-width: 764px;
  background: rgba(58, 194, 141, 0.08);
  border-radius: 4px;
  border: 1px solid rgba(58, 194, 141, 0.14);
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC !important;
  font-weight: bold;
  color: rgba(58, 194, 141, 0.65);
  line-height: 22px;
  padding-top: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
