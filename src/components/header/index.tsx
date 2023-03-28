// styles
import { HeaderContainer, HeaderContent } from "./styles";

// assets
import Logo  from "../../assets/logo.png"
import { Link } from "react-router-dom";

export function Header(){

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </HeaderContent>
    </HeaderContainer>
  );
}