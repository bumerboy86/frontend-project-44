import gameDataReturn from '../utils/gameDataReturn.js';
import startGame from '../startGame.js';
import getRandNum from '../utils/getRandNum.js';

const calcGame = () => {
  const firstNum = getRandNum(1, 100);
  const secNum = getRandNum(1, 100);
  const mathOperator = Math.random() < 0.5;
  const correctAnswer = mathOperator ? firstNum + secNum : firstNum * secNum;

  return gameDataReturn(
    'What is the result of the expression?',
    `${firstNum} ${mathOperator ? '+' : '*'} ${secNum}`,
    String(correctAnswer),
  );
};

export default () => startGame(calcGame);
