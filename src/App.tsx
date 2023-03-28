// styles
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/global";

// components
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
    </>
  );
}

export default App;
