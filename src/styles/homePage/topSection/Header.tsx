import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 0 10%;
  padding-top: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #000000;
  display: flex;
  justify-content: space-between;
`;

export const HeaderTextContainer = styled.div`
  justify-content: center;
  margin: 0 20px;
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const MenuText = styled.div<{ isSelected?: boolean }>`
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
  text-align: center;
  ${({ isSelected }) => isSelected && "color:#3AC28D"};
`;

export const MenuTextBottomLine = styled.div<{ isSelected?: boolean }>`
  width: 1px;
  height: 23px;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#3AC28D" : "black")};
  margin: 0 50%;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const IconWrapper = styled.div`
  display: flex;
`;
