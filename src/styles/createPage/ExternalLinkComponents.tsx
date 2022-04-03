import styled from "styled-components";

export const Wrapper = styled.div`
  width: 30%;
  max-width: 300px;
  margin: 6px 6px 0;
`;

export const Description = styled.div`
  font-size: 16px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #142542;
  line-height: 22px;
  text-align: left;
`;

export const ExternalLink = styled.div`
  font-size: 16px;
  font-family: PingFang-SC-Regular, PingFang-SC;
  font-weight: 400;
  color: #1e60da;
  line-height: 22px;
  text-align: left;
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
