#!/usr/bin/env node

const askQuestion = require('../src/cli');

const checkGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return checkGcd(b, a % b);
};

console.log('Welcome to the Brain Games!');

const userName = askQuestion('May I have your name?: ');

console.log(`Hello, ${userName}!`);

const step = 3;
let finish = false;

console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < step; i += 1) {
  const firstNum = Math.floor(Math.random() * 100) + 1;
  const secNum = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = checkGcd(firstNum, secNum);
  console.log(`Question: ${firstNum} ${secNum}`);
  const question = askQuestion('Your answer: ');
  if (correctAnswer === Number(question)) {
    console.log('Correct!');
    finish = true;
  } else {
    console.log(
      `Your answer: ${question}\n'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
    );
    finish = false;
    break;
  }
}
if (finish) {
  console.log(`Congratulations, ${userName}!`);
}
