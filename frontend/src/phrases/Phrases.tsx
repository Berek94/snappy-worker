import React, { useEffect } from "react";
import Page from "../common/components/Page";
import Title from "../common/components/Title";
import AddPhraseForm from "./AddPhraseForm";
import { usePhrasesContext } from "../common/context/PhrasesContext";
import usePhrasesRequests from "../common/hooks/usePhrasesRequests";

const Phrases = () => {
  const { phrases, addPhrase } = usePhrasesContext();
  const { getPhrasesRequest } = usePhrasesRequests();

  useEffect(() => {
    (async () => {
      const phrasesList = await getPhrasesRequest();
      addPhrase(phrasesList);
    })();
  }, []);

  return (
    <Page>
      <Title tag="h2">Фразы</Title>
      <AddPhraseForm onSubmit={addPhrase} />
      {phrases.map((phrase) => (
        <p key={phrase}>{phrase}</p>
      ))}
    </Page>
  );
};

export default Phrases;
