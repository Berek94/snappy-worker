import React, { useCallback, useRef } from "react";

type Props = {
  onSubmit: (value: string) => void;
};

const AddPhraseForm: React.FC<Props> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = useCallback(
    (event: React.SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      const inputNode = inputRef.current;

      if (inputNode) {
        onSubmit(inputNode.value);
        inputNode.value = "";
      }
    },
    []
  );

  return (
    <form onSubmit={handleFormSubmit}>
      <input ref={inputRef} />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddPhraseForm;
