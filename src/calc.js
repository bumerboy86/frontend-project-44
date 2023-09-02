import questionAndAnswer from './questionAndAnswer.js';

export default () => {
  const firstNum = Math.floor(Math.random() * 100) + 1;
  const secNum = Math.floor(Math.random() * 100) + 1;
  const mathOperator = Math.random() < 0.5 ? '*' : '+';
  const correctAnswer = mathOperator === '+' ? firstNum + secNum : firstNum * secNum;

  return questionAndAnswer('What is the result of the expression?', `${firstNum} ${mathOperator} ${secNum}`, String(correctAnswer));
};
