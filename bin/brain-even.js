const askQuestion = require('../src/cli');

console.log('Welcome to the Brain Games!');

const userName = askQuestion('May I have your name?: ');

console.log(`Hello, ${userName}!`);

const isEven = (number) => number % 2 === 0;

const step = 3;
let finish = false;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < step; i += 1) {
  const sicretNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(sicretNumber) ? 'yes' : 'no';
  const question = askQuestion(`Question: ${sicretNumber} `);
  if (correctAnswer === question) {
    console.log('Correct!');
    finish = true;
  } else {
    console.log(
      `'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
    );
    finish = false;
    break;
  }
}
if (finish) {
  console.log(`Congratulations, ${userName}!`);
}
