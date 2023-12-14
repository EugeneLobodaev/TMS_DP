import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer";

const getStarted = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
