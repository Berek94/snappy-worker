import { useCallback } from "react";

const mock = ["раз", "два", "три"];

const usePhrasesRequests = () => {
  const getPhrasesRequest = useCallback(async () => {
    try {
      return mock;
    } catch (error) {
      throw error;
    }
  }, []);

  return { getPhrasesRequest };
};

export default usePhrasesRequests;
