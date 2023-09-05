import askQuestion from './cli.js';
import getUserAnswer from './utils/getUserAnswer.js';

export default (fn) => {
  const userName = askQuestion();
  const rounds = 3;
  let finish = false;
  console.log(fn().questionText);
  for (let i = 0; i < rounds; i += 1) {
    const generatedQuestion = fn();
    console.log(`Question: ${generatedQuestion.generatedValue}`);
    const userAnswer = getUserAnswer();
    if (userAnswer === generatedQuestion.answer) {
      console.log('Correct!');
      finish = true;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${generatedQuestion.answer}'.
  Let's try again, ${userName}!`);
      finish = false;
      break;
    }
  }
  if (finish) {
    console.log(`Congratulations, ${userName}!`);
  }
};
