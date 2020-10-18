import React, { useEffect } from "react";
import Page from "../common/components/Page";
import Title from "../common/components/Title";
import { useCommandsContext } from "../common/context/CommandsContext";
import useCommandsRequests from "../common/hooks/useCommandsRequests";
import "./Main.css";

const Main = () => {
  const { commands, setCommands } = useCommandsContext();
  const { getCommandsRequest } = useCommandsRequests();

  useEffect(() => {
    (async () => {
      const commandsList = await getCommandsRequest();
      setCommands(commandsList);
    })();
  }, []);

  return (
    <Page>
      <Title tag="h1" className="main-title">
        Хэлоу, это Снапи Воркер! 😎
      </Title>
      <section className="main-section">
        <Title tag="h2" className="main-subtitle">
          Команды
        </Title>
        <div className="main-commands">
          {commands.map(({ name, description }) => (
            <React.Fragment key={name}>
              <span style={{ fontWeight: 500 }}>{name}</span>
              <span>{description}</span>
            </React.Fragment>
          ))}
        </div>
      </section>
    </Page>
  );
};

export default Main;
