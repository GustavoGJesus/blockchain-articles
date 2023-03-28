// styles
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/global";

// components
import { Header } from "./components/header";
import { Main } from "./components/main";

//libs
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Global styles={GlobalStyles} />
      <Header />
      <Main />
    </>
  );
}

export default App;
