import startGame from '../startGame.js';
import { getRandNum } from '../utils.js';

const gcdGame = () => {
  const checkGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return checkGcd(b, a % b);
  };
  const firstRandNum = getRandNum(1, 100);
  const secRandNum = getRandNum(1, 100);
  const correctAnswer = checkGcd(firstRandNum, secRandNum);

  return {
    questionText: 'Find the greatest common divisor of given numbers.',
    generatedValue: `${firstRandNum} ${secRandNum}`,
    answer: String(correctAnswer),
  };
};

export default () => startGame(gcdGame);
