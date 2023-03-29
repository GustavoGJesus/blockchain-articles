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
          title="Investors Flock to US Money Market Funds Amid Banking Crisis"
          paragraph="As the global banking crisis continues to fuel concerns among investors, the popularity of US money market funds is surging. According to Emerging Portfolio Fund Research (EPFR) data obtained by the Financial Times, more than $286 billion has been invested in these funds so far in March. "
          created_at="28 mar 2023"
        />
        <CardArticle
          title="Investors Flock to US Money Market Funds Amid Banking Crisis"
          paragraph="As the global banking crisis continues to fuel concerns among investors, the popularity of US money market funds is surging. According to Emerging Portfolio Fund Research (EPFR) data obtained by the Financial Times, more than $286 billion has been invested in these funds so far in March. "
          created_at="28 mar 2023"
        />
        <CardArticle
          title="Investors Flock to US Money Market Funds Amid Banking Crisis"
          paragraph="As the global banking crisis continues to fuel concerns among investors, the popularity of US money market funds is surging. According to Emerging Portfolio Fund Research (EPFR) data obtained by the Financial Times, more than $286 billion has been invested in these funds so far in March. "
          created_at="28 mar 2023"
        />
        <CardArticle
          title="Investors Flock to US Money Market Funds Amid Banking Crisis"
          paragraph="As the global banking crisis continues to fuel concerns among investors, the popularity of US money market funds is surging. According to Emerging Portfolio Fund Research (EPFR) data obtained by the Financial Times, more than $286 billion has been invested in these funds so far in March. "
          created_at="28 mar 2023"
        />
        <CardArticle
          title="Investors Flock to US Money Market Funds Amid Banking Crisis"
          paragraph="As the global banking crisis continues to fuel concerns among investors, the popularity of US money market funds is surging. According to Emerging Portfolio Fund Research (EPFR) data obtained by the Financial Times, more than $286 billion has been invested in these funds so far in March. "
          created_at="28 mar 2023"
        />
      </CardContainer>
    </ArticlesListContainer>
  );
}