import React from "react";
import Phrases from "./Phrases";
import { PhrasesContextProvider } from "../common/context/PhrasesContext";

const PhrasesRoot = () => (
  <PhrasesContextProvider>
    <Phrases />
  </PhrasesContextProvider>
);

export default PhrasesRoot;
