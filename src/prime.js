import questionAndAnswer from './questionAndAnswer.js';

export default () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };
  const randomtNum = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(randomtNum) ? 'yes' : 'no';
  return questionAndAnswer('Answer "yes" if given number is prime. Otherwise answer "no".', randomtNum, correctAnswer);
};
