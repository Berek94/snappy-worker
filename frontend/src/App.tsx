import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./menu/Menu";
import Router from "./Router";
import './main.css';

const App = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <Menu />
        <Router />
      </main>
    </BrowserRouter>
  );
};

export default App;
