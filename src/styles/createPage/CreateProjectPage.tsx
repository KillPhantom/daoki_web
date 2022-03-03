import styled from "styled-components";

/* Images */
import BackgroundImg from "../../assets/images/background.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${BackgroundImg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
