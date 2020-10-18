const mock = ["раз", "два", "три"];

export const getPhrasesRequest = async () => {
  try {
    return mock;
  } catch (error) {
    throw error;
  }
};
