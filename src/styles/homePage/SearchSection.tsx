import styled from "styled-components";

export const HotTopicsWrapper = styled.div`
  width: 60%;
  margin-top: 40px;
  min-height: 666px;
  background: #f5f7fd;
`;

export const HotTopicTitle = styled.div`
  margin: 16px;
  font-size: 40px;
  font-weight: bold;
  color: #1e60da;
  line-height: 51px;
  text-align: left;
`;

export const HotTopicLine = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #c9d9f7;
`;

export const HotTopicContentWrapper = styled.div`
  display: flex;
  text-align: left;
`;

export const HotTopicCardWrapper = styled.div`
  min-height: 540px;
  margin: 16px;
  max-width: 400px;
  width: 50%;
  background: #ffffff;
`;

export const HotTopicCardTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #142542;
  line-height: 31px;
  margin: 16px;
`;

export const PreviewInfoItem = styled.div``;

export const ItemBulletPoint = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #1e60da;
  margin-top: 14px;
`;

export const PreviewInfoItemHeader = styled.div`
  display: flex;
  margin: 22px 0 0 16px;
`;

export const PreviewInfoItemHeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #142542;
  line-height: 31px;
  padding: 0 4px 4px;
  margin-left: 4px;
`;

export const PreviewInfoItemBody = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #142542;
  line-height: 23px;
  margin-left: 44px;
  text-align: left;
`;

export const RewardListsWrapper = styled.div`
  width: 30%;
  min-height: 660px;
  background: #f6fbf9;
  margin-top: 40px;
`;

export const RewardListTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #3ac28d;
  line-height: 51px;
  text-align: left;
  margin: 16px;
`;

export const RewardListTitleBottomLine = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #96dab7;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1280px;
  box-shadow: 0px 14px 28px 0px rgba(30, 96, 218, 0.2);
  background: white;
  padding: 16px;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  margin: 150px 10% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

export const SearchBarWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 14px 28px 0px rgba(30, 96, 218, 0.2);
  border-radius: 4px;
  display: flex;
  position: relative;
`;

export const SearchBarInputWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

export const SearchBarInput = styled.input.attrs({
  type: "text",
  placeholder: "Search Text",
})`
  font-size: 24px;
  font-weight: 400;
  color: #142542;
  line-height: 31px;
  border: none;
  width: 80%;
  height: 30px;
  margin-top: 25px;
  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.div`
  width: 180px;
  height: 80px;
  background: #1e60da;
  border-radius: 0px 4px 4px 0px;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  line-height: 31px;
  padding-top: 20px;
  position: absolute;
  right: 0;
  top: 0;
`;
