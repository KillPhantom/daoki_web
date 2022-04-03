import styled from "styled-components";

/* Images */

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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

export const ContextTitle = styled.div`
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #142542;
  line-height: 22px;
  text-align: left;
  margin: 16px 16px 0;
`;
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

export const ProjectTitleInput = styled.input.attrs((props) => ({
  type: `${props.type}`,
  placeholder: `${props.placeholder}`,
  disabled: props.disabled,
}))`
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
  padding: 0 20px;
  text-align: left;
  max-width: 768px;
  margin: 0 20px;
  background: #f5f7fd;
`;

export const TwitterWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  position: relative;
`;

export const AddMoreButton = styled.div`
  margin: 0 20px;
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

export const ExternalLinkMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
`;
export const ExternalLinksWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 120px;
  background: white;
  margin-top: 20px;
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

export const ExternalLinksTitleBottomLine = styled.div`
  width: 1024px;
  height: 1px;
  border: 1px solid rgba(20, 37, 66, 0.1);
`;

export const EmptySpaceHolder = styled.div`
  width: 300px;
  height: 120px;
`;

export const ExternalLinkContentRow = styled.div`
  display: flex;
  padding: 4px 16px 0;
  justify-content: space-between;
`;

export const ExternalLinkContentWrapper = styled.div`
  margin: 0 10px;
  padding-bottom: 12px;
`;
