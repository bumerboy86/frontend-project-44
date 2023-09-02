import questionAndAnswer from './questionAndAnswer.js';

export default () => {
  const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(randomNumber);
  return questionAndAnswer('Answer "yes" if the number is even, otherwise answer "no".', randomNumber, correctAnswer);
};
