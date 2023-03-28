// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";


export const MainContainer = styled.div`
  width: 100%;
  height: 50vh;
  padding: 20px 50px 20px 50px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  ${MediaQuerys.sm} {
    width: 100% !important;
    height: 50vh;
    padding: 20px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;