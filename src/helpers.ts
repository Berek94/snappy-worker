export const getRandomNumber = (maxNumber: number) =>
  Math.floor(Math.random() * maxNumber);

export const calcChance = (percentageOfChance: number) =>
  percentageOfChance >= getRandomNumber(100);
