import styled from "styled-components";

export const Wrapper = styled.div<{ showToolBar: boolean }>`
  padding: 20px;
  text-align: left;
  min-width: 768px;
  margin: 20px;
  ${({ showToolBar }) => showToolBar && "background:#f5f7fd"};
  position: relative;
`;

export const EditorTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 70px;
`;
export const EditorTitleInput = styled.input.attrs((props) => ({
  type: `${props.type}`,
  placeholder: `${props.placeholder}`,
  disabled: props.disabled,
}))<{ disabled: boolean }>`
  font-size: 24px;
  font-weight: 500;
  color: #142542;
  line-height: 33px;
  min-width: 144px;
  background: ${({ disabled }) => (disabled ? "white" : "#f5f7fd")};
  border: none;
  position: absolute;
  top: 4px;
  left: 0px;
  :focus {
    outline: none;
  }
`;

export const CompleteButton = styled.button`
  width: 96px;
  height: 32px;
  background: #3ac28d;
  border-radius: 4px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC !important;
  color: white;
  line-height: 22px;
  text-align: center;
  padding-top: 4px;
  position: absolute;
  top: 4px;
  right: 4px;
  border: none;
  cursor: pointer;
`;

export const LinkInputBoxWrapper = styled.div``;

export const LinkInputTitle = styled.div<{ incline?: boolean }>`
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #142542;
  line-height: 22px;
  text-align: left;
  margin-top: 6px;
  ${({ incline }) => incline && "font-style: italic; font-weight:bold;"}
`;

export const LinkInput = styled.input.attrs((props) => ({
  type: `${props.type}`,
  placeholder: `${props.placeholder}`,
}))`
  margin-top: 8px;
  padding-left: 6px;
  width: 100%;
  height: 40px;
  background: #f5f7fd;
  border-radius: 4px;
  border: 1px solid #c9d9f7;
`;

export const RecommendLink = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #1e60da;
  line-height: 22px;
  margin-left: 10px;
  cursor: pointer;
`;

export const RecommendLinkWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  position: relative;
`;

export const RecommendLinkScore = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: black;
  margin-left: 10px;
  line-height: 22px;
  padding: 0 10px;
  border: 1px solid pink;
  border-radius: 20px;
`;

export const PreviewButtonWrapper = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
  cursor: pointer;
`;
