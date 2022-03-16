import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 10%;
  margin: 88px 0;
  text-align: left;
  justify-content: center;
`;

export const LeftPanel = styled.div``;

export const ShortLine = styled.div`
  width: 56px;
  height: 4px;
  background: linear-gradient(90deg, #b6ff2e 0%, #3ac28d 100%);
`;

export const LeftPanelTitle = styled.div`
  font-size: 56px;
  font-weight: 500;
  color: #142542;
  line-height: 72px;
`;

export const LeftPanelBody = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #142542;
  line-height: 31px;
  margin-top: 24px;
  max-width: 540px;
`;

export const BottomLineWrapper = styled.div`
  margin-top: 80px;
  display: flex;
`;
export const BottomLineCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: #3ac28d;
`;
export const BottomLine = styled.div`
  width: 582px;
  height: 1px;
  margin: 8px 0 0 -4px;
  border: 4px solid #3ac28d;
`;

export const RightPanel = styled.div`
  margin-left: 132px;
  margin-top: -60px;
`;

/* IconTextContainer styles */
export const IconTextContainerWrapper = styled.div`
  display: flex;
  margin-top: 60px;
`;

export const IconTextWrapper = styled.div`
  margin-left: 24px;
  max-width: 542px;
`;

export const IconWrapper = styled.div``;

export const IconTextTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #142542;
  line-height: 31px;
  max-width: 386px;
`;

export const IconTextBody = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #142542;
  line-height: 23px;
  margin-top: 14px;
`;
