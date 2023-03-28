// styles
import { MainContainer, MainContent, MainText } from "./styles";

// components
import { ParagraphText } from "../shared/texts/paragraph";
import { TitleText } from "../shared/texts/title";

// images
import TokenIcon from "../../assets/token-icon.png"

export function Main(){
  return (
    <MainContainer>
      <MainContent>
        <MainText>
          <TitleText>Blockchain Article</TitleText>

          <ParagraphText>
            Write articles to help the web3 community and earn the plant token
          </ParagraphText>
        </MainText>
        <img src={TokenIcon} alt="icon token"/>
      </MainContent>
    </MainContainer>
  );
}