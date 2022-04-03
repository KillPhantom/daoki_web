import styled from "styled-components";

/* Images */

export const Wrapper = styled.div`
  background: linear-gradient(
    270deg,
    rgba(227, 247, 255, 0.1) 0%,
    #e3f7ff 49%,
    rgba(227, 247, 255, 0) 100%
  );
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  padding-bottom: 300px;
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

export const MainBodyWrapper = styled.div`
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

export const ModuleContentContainer = styled.div``;

export const ModuleQuoteWrapper = styled.div`
  width: 240px;
  margin-left: 14px;
`;

export const ModuleQuoteContainer = styled.div`
  background: white;
`;
export const ModuleQuotedContainer = styled.div`
  background: white;
  margin-top: 12px;
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
`;

export const ProjectTitle = styled.div`
  height: 86px;
  text-align: left;
  background: white;
  width: 100%;
  max-width: 1024px;
  margin-right: 40px;
  font-size: 28px;
  font-weight: 500;
  color: #142542;
  line-height: 40px;
  padding: 24px 0 0 12px;
  width: 100%;
`;

export const ModuleTitleWrapper = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid rgba(20, 37, 66, 0.1);
`;

export const LeftColorBar = styled.div`
  width: 2px;
  height: 20px;
  background: linear-gradient(360deg, #b6ff2e 0%, #3ac28d 100%);
  border-radius: 1px;
  margin: 4px 4px 4px 0;
`;

export const ModuleTitle = styled.div`
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #142542;
  line-height: 28px;
  margin-left: 2px;
  text-align: left;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 70px;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #142542;
  line-height: 33px;
  min-width: 144px;
  background: white;
  border: none;
  position: absolute;
  top: 4px;
  left: 0px;
`;

export const RichTextWrapper = styled.div`
  padding: 20px 0 0;
  text-align: left;
  max-width: 768px;
  margin: 0 20px;
`;
