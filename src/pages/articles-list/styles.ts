// styles
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MediaQuerys } from "../../styles/global";

export const ArticlesListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 20px 80px 20px 80px;

  ${MediaQuerys.sm} {
    padding: 5px;
  }
`;

export const SearchAndCreateContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;

  input {
    width: 250px;
    border: none;
    padding: 10px 8px 10px 8px;

    border-radius: 10px;
    border: 2px solid var(--green-800);
    background: transparent;

    outline: none;
    font-size: 15px;
    font-weight: 700;

    ${MediaQuerys.sm} {
      width: 200px;
      font-size: 12px;
    }
  }
`;

export const Button = styled.button`
  width: 150px;
  padding: 15px;

  border-radius: 10px;

  border: none;
  background: var(--green-800);
  color: var(--green-600);

  font-weight: 600;
  font-size: 15px;

  cursor: pointer;

  ${MediaQuerys.sm} {
    padding: 15px;
    font-size: 12px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 40px;
  gap: 20px;

`;