import styled from "styled-components";

export const Wrapper = styled.div<{ right?: string; bottom?: string }>`
  position: absolute;
  z-index: 1;
  bottom: ${({ bottom }) => bottom ?? "0px"};
  right: ${({ right }) => right ?? "-24px"};
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(30, 96, 218, 0.1);
  border-radius: 4px;
  width: 30px;
  border: 1px solid #cedcf7;
`;

export const IconDivider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #cedcf7;
`;
