import React, { createContext, useContext, useState } from "react";

export type Command = {
  name: string;
  description: string;
};

type CommandsContextType = {
  commands: Command[];
  setCommands: (commands: Command[]) => void;
};

export const CommandsContext = createContext({} as CommandsContextType);

export const CommandsContextProvider: React.FC = ({ children }) => {
  const [commands, setCommands] = useState<Command[]>([]);

  return (
    <CommandsContext.Provider value={{ commands, setCommands }}>
      {children}
    </CommandsContext.Provider>
  );
};

export const useCommandsContext = () => useContext(CommandsContext);
