import questionAndAnswer from './questionAndAnswer.js';

export default () => {
  const checkGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return checkGcd(b, a % b);
  };
  const firstRandNum = Math.floor(Math.random() * 100) + 1;
  const secRandNum = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = checkGcd(firstRandNum, secRandNum);
  return questionAndAnswer('Find the greatest common divisor of given numbers.', `${firstRandNum} ${secRandNum}`, String(correctAnswer));
};
