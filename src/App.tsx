// styles
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/global";

// components
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <Main />
    </>
  );
}

export default App;
