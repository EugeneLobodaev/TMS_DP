import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App(): any {
  return (
    <>
        <Header />
        <Main />
    </>
  );
}

export default App;
