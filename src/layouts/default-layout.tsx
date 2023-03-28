
// libs
import { Outlet } from "react-router-dom";

// components
import { Header } from "../components/header";

export function DefaultLayout(){
  return(
    <>
      <Header />
      <Outlet />
    </>
  );
}