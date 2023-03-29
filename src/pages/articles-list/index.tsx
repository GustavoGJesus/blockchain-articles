// styles
import { CardArticle } from "../../components/card-articles";
import { ArticlesListContainer, Button, CardContainer, SearchAndCreateContent } from "./styles";

export function ArticlesList(){
  return (
    <ArticlesListContainer>
      <SearchAndCreateContent>
        <input placeholder="Search article" type="text" name="" id="" />
        <Button>Create new post</Button>
      </SearchAndCreateContent>

      <CardContainer>
        <CardArticle
          title="Hello World!"
          paragraph="Test props, test design, test all"
          created_at="28 mar 2023"
        />
        <CardArticle
          title="Hello World!"
          paragraph="Test props, test design, test all"
          created_at="28 mar 2023"
        />
      </CardContainer>
    </ArticlesListContainer>
  );
}