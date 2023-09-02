import questionAndAnswer from './questionAndAnswer.js';

export default () => {
  const minNumOne = 1;
  const minNumFive = 5;
  const maxNumTen = 10;
  const maxNumHundred = 100;

  const step = Math.floor(Math.random() * (maxNumTen - minNumFive) + minNumFive);
  const hidenNumber = Math.floor(Math.random() * (step - minNumOne - minNumFive) + minNumFive);
  const progressionSteps = Math.floor(Math.random() * (maxNumTen - minNumOne) + minNumOne);
  let startNumber = Math.floor(Math.random() * (maxNumHundred - minNumOne) + minNumOne);

  const progressionArr = [];
  let correctAnswer = 0;

  for (let i = 0; i < step; i += 1) {
    if (i === hidenNumber) {
      correctAnswer = startNumber;
      progressionArr.push('..');
    } else {
      progressionArr.push(startNumber);
    }
    const nexNum = startNumber + progressionSteps;
    startNumber = nexNum;
  }

  return questionAndAnswer('What number is missing in the progression?', progressionArr.join(' '), String(correctAnswer));
};
