// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";


export const MainContainer = styled.div`
  width: 100%;
  height: 60vh;
  padding: 20px 50px 20px 50px;

  display: flex;

  justify-content: center;
  align-items: center;

  ${MediaQuerys.sm} {
    width: 100% !important;
    height: 90vh;
    padding: 20px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 20px;

  img {
    width: 300px;
  }

  ${MediaQuerys.sm} {
    flex-direction: column;

    img {
      width: 150px;
    }
  }
`;

export const MainText = styled.div`
  /* width: 70%; */
  /* width: 70%; */
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 150px;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;

  border: none;
  background: var(--green-600);
  color: var(--green-800);
  font-weight: 700;

  cursor: pointer;
`;