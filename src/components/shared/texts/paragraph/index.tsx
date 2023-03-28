// styles
import { ReactNode } from "react";
import { Paragraph } from "./styles";

// interface types
interface ParagraphTextProps {
  children: ReactNode;
}

export function ParagraphText({ children }: ParagraphTextProps) {
  return <Paragraph>{children}</Paragraph>;
}
