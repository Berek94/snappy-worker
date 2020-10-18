import React from "react";
import { Route } from "react-router-dom";
import Main from "./main";
import PhrasesRoot from "./phrases";

const Router = () => {
  return (
    <>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/phrases">
        <PhrasesRoot />
      </Route>
    </>
  );
};

export default Router;
