import { ParagraphText } from "../shared/texts/paragraph";
import { TitleText } from "../shared/texts/title";
import { MainContainer, MainContent } from "./styles";

export function Main(){
  return (
    <MainContainer>
      <MainContent>
        <TitleText>Blockchain Article 🌳</TitleText>

        <ParagraphText>
          Write articles to help the web3 community and earn the plant token
        </ParagraphText>
      </MainContent>
    </MainContainer>
  );
}