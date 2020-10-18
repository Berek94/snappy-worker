import React from "react";
import { CommandsContextProvider } from "../common/context/CommandsContext";
import Main from "./Main";

const MainRoot = () => (
  <CommandsContextProvider>
    <Main />
  </CommandsContextProvider>
);

export default MainRoot;
