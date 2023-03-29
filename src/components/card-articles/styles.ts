// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";

export const CardContainer = styled.div`
  width: 80%;
  height: auto;
  border-radius: 10px;
  background: var(--green-800);

  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  ${MediaQuerys.sm} {
    padding: 20px;
  }
`;

export const CardContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  color: var(--white);

  ${MediaQuerys.sm} {
    width: 100%;
  }

  h1 {
    font-size: 30px;
    color: var(--green-600);

    ${MediaQuerys.sm} {
      font-size: 20px;
    }
  }

  p {
    font-size: 15px;

    ${MediaQuerys.sm} {
      font-size: 10px;
    }
  }
`;