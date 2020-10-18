import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type PhrasesContextType = {
  phrases: string[];
  addPhrase: (text: string | string[]) => void;
  deletePhrase: (index: number) => void;
  editPhrase: (text: string, index: number) => void;
};

export const PhrasesContext = createContext<PhrasesContextType>(
  {} as PhrasesContextType
);

export const PhrasesContextProvider: React.FC = ({ children }) => {
  const [phrases, setPhrases] = useState<string[]>([]);

  const addPhrase = useCallback((text: string | string[]) => {
    setPhrases((phrases) => phrases.concat(text));
  }, []);

  const deletePhrase = useCallback((_index: number) => {
    setPhrases((phrases) =>
      phrases.filter((_phrase, index) => index !== _index)
    );
  }, []);

  const editPhrase = useCallback((text, index) => {
    setPhrases((phrases) =>
      phrases.map((phrase, _index) => (_index === index ? text : phrase))
    );
  }, []);

  return (
    <PhrasesContext.Provider
      value={{ phrases, addPhrase, deletePhrase, editPhrase }}
    >
      {children}
    </PhrasesContext.Provider>
  );
};

export const usePhrasesContext = () => useContext(PhrasesContext);
