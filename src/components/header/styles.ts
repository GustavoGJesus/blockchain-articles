// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 20px 50px 20px 50px;


  background: var(--green-800);
  
  ${MediaQuerys.sm}{
    width: 100% !important;
    height: 80px;
    padding: 5px;
  }
`;

export const HeaderContent = styled.div`
  img {
    width: 100px;
  }

  ${MediaQuerys.sm} {
    img{
      width: 80px;
    }
  }
`;