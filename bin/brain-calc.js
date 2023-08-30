#!/usr/bin/env node

const askQuestion = require('../src/cli');

console.log('Welcome to the Brain Games!');

const userName = askQuestion('May I have your name?: ');

console.log(`Hello, ${userName}!`);

const step = 3;
let finish = false;

console.log('What is the result of the expression?');

for (let i = 0; i < step; i += 1) {
  const firstNum = Math.floor(Math.random() * 100) + 1;
  const secNum = Math.floor(Math.random() * 100) + 1;
  const rand = Math.random() < 0.5 ? '*' : '+';
  const correctAnswer = rand === '+' ? firstNum + secNum : firstNum * secNum;
  console.log(`Question: ${firstNum} ${rand} ${secNum}`);
  const question = askQuestion('Your answer: ');
  if (correctAnswer === Number(question)) {
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
