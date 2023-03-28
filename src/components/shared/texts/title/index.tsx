// styles
import { ReactNode } from "react";
import { Title } from "./styles";

// interface types
interface TitleTextProps {
  children: ReactNode;
}

export function TitleText({ children}: TitleTextProps){
  return(
    <Title>{children}</Title>
  );
}