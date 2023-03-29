// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";

export const CardContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background: var(--green-800);

  padding: 30px;
  display: flex;
  flex-direction: column;

  ${MediaQuerys.sm} {
    padding: 20px;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  color: var(--white);
`;