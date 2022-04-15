import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
    270deg,
    rgba(227, 247, 255, 0.1) 0%,
    #e3f7ff 49%,
    rgba(227, 247, 255, 0) 100%
  );
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.div`
  margin-top: 56px;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const MainContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 700px;
  background: white;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 86px;
  background-color: rgb(30, 96, 218, 0.1);
  position: relative;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: black;
  line-height: 36px;
  position: absolute;
  top: 26px;
  left: 26px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin: 40px auto;
  flex-wrap: wrap;
  align-item: left;
  transition: all 0.5s;
  padding: 0 20px;
`;

export const Button = styled.div`
  width: 200px;
  height: 40px;
  background: #3ac28d;
  border-radius: 4px;
  text-align: center;
  position: absolute;
  padding: 8px;
  top: 24px;
  color: white;
  right: 24px;
  font-size: 16px;
`;

export const TopicCardWrapper = styled.div`
  width: 280px;
  height: 356px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #000000;
  padding: 16px;
  margin: 12px;
`;

export const TopicCardPreview = styled.div`
  width: 248px;
  height: 206px;
  background: #f5f7fd;
  border-radius: 4px;
  border: 1px solid #000000;
  position: relative;
  padding: 24px 44px 34px;
`;

export const TopicCardShareIconWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: -12px;
`;

export const TopicCardTitle = styled.div`
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #142542;
  line-height: 28px;
  margin-top: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TopicAttributeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
export const TopicAttributeTitle = styled.div`
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #142542;
  line-height: 22px;
`;

export const TopicAttributeValue = styled.div`
  font-size: 16px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #142542;
  line-height: 22px;
`;

export const InfoText = styled.div`
  font-size: 32px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: grey;
  margin-top: 10vh;
`;
