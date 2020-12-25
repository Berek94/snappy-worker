export const getRandomNumber = (maxNumber: number) =>
  Math.floor(Math.random() * maxNumber);

export const calcChance = (percentageOfChance: number) =>
  percentageOfChance >= getRandomNumber(100);

export const getDate = () => {
  const date = new Date();
  const utcHours = date.getUTCHours();
  const moscowHoursOffset = 3;
  date.setHours(utcHours + moscowHoursOffset);

  return date;
};
