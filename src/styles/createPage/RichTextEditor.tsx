import styled from "styled-components";

export const Wrapper = styled.div``;

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
}))`
  font-size: 24px;
  font-weight: 500;
  color: #142542;
  line-height: 33px;
  min-width: 144px;
  background: #f5f7fd;
  border: none;
  border-bottom: 1px solid rgba(20, 37, 66, 0.1);
  position: absolute;
  top: 4px;
  left: 4px;
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

export const LinkInputTitle = styled.div`
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #142542;
  line-height: 22px;
  text-align: left;
  margin-top: 6px;
`;

export const LinkInput = styled.input.attrs((props) => ({
  type: `${props.type}`,
  placeholder: `${props.placeholder}`,
}))`
  margin-top: 8px;
  padding-left: 6px;
  width: 356px;
  height: 40px;
  background: #f5f7fd;
  border-radius: 4px;
  border: 1px solid #c9d9f7;
`;

export const RecommendLink = styled.a`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #1e60da;
  line-height: 22px;
`;
