import startGame from '../startGame.js';
import gameDataReturn from '../utils/gameDataReturn.js';
import getRandNum from '../utils/getRandNum.js';

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
  return gameDataReturn(
    'Find the greatest common divisor of given numbers.',
    `${firstRandNum} ${secRandNum}`,
    String(correctAnswer),
  );
};

export default () => startGame(gcdGame);
