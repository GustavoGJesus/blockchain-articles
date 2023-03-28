// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../../../styles/global";

export const Title = styled.h1`
  font-size: 70px;
  font-weight: 800;

  ${MediaQuerys.sm} {
    font-size: 50px;
  }
`;
