// styles
import { HeaderContainer, HeaderContent } from "./styles";

// assets
import Logo  from "../../assets/logo.png"

export function Header(){

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="logo" />
      </HeaderContent>
    </HeaderContainer>
  );
}