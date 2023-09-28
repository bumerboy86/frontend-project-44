import startGame from '../startGame.js';
import { getRandNum } from '../utils.js';

const calcGame = () => {
  const firstNum = getRandNum(1, 100);
  const secNum = getRandNum(1, 100);
  const mathOperator = Math.random() < 0.5;
  const correctAnswer = mathOperator ? firstNum + secNum : firstNum * secNum;

  return {
    questionText: 'What is the result of the expression?',
    generatedValue: `${firstNum} ${mathOperator ? '+' : '*'} ${secNum}`,
    answer: String(correctAnswer),
  };
};

export default () => startGame(calcGame);
