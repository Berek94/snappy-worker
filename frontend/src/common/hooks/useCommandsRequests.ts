import { useCallback } from "react";

const useCommandsRequests = () => {
  const getCommandsRequest = useCallback(async () => {
    try {
      return (await fetch("/api/commands")).json();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { getCommandsRequest };
};

export default useCommandsRequests;
