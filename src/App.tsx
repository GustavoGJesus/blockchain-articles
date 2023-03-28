// styles
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/global";

//libs
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer />
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;
