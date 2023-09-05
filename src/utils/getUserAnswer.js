import readlineSync from 'readline-sync';

export default () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
