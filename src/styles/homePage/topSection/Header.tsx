import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeaderContainer = styled.div`
  margin: 0 10%;
  padding-top: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #000000;
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1280px;
`;

export const HeaderTextContainer = styled.div`
  justify-content: center;
  margin: 0 20px;
`;

export const MenuContainer = styled.div`
  display: flex;
  margin-left: 90px;
`;

export const MenuText = styled.div<{ isSelected?: boolean }>`
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
  text-align: center;
  margin-left: 55px;
  ${({ isSelected }) => isSelected && "color:#3AC28D"};
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const RightMenuWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 40px;
  display: flex;
`;
export const IconWrapper = styled.div`
  display: flex;
  margin-right: 40px;
  margin-top: 6px;
`;

export const Button = styled.button`
  background: #000000;
  padding: 4px 14px;
  border-radius: 4px;
  color: white;
  font-size: 24px;
  font-weight: 500;
  line-height: 31px;
`;