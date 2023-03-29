import { Paragraph } from "../shared/texts/paragraph/styles";
import { Title } from "../shared/texts/title/styles";
import { CardContainer, CardContent } from "./styles";

interface CardArticleProps{
  title: string;
  paragraph: string;
  created_at: string;
}

export function CardArticle({ title, paragraph, created_at }: CardArticleProps){
  return (
    <CardContainer>
      <CardContent>
        <h1>{title}</h1>
        <p>{paragraph}</p>

        <p>{created_at}</p>
      </CardContent>
    </CardContainer>
  );   
}