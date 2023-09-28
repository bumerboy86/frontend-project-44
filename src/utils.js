import readlineSync from 'readline-sync';

export const getRandNum = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
