// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../../../styles/global";

export const Paragraph = styled.h1`
  font-size: 22px;
  font-weight: 500;

  ${MediaQuerys.sm} {
    font-size: 15px;
  }
`;
