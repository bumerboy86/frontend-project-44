#!/usr/bin/env node
const askQuestion = require('../src/cli');

console.log('Welcome to the Brain Games!');
const userName = askQuestion('May I have your name?: ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');
let progressionArr = [];
let finish = false;
const rounds = 3;

for (let i = 0; i < rounds; i += 1) {
  const step = Math.floor(Math.random() * (11 - 5) + 5);
  const hidenNumber = Math.floor(Math.random() * (step - 1 - 5) + 5);
  const progressionSteps = Math.floor(Math.random() * (11 - 1) + 1);
  let startNumber = Math.floor(Math.random() * (100 - 1) + 1);
  let secret = 0;
  for (let j = 0; j < step; j += 1) {
    if (j === hidenNumber) {
      secret = startNumber;
      progressionArr.push('..');
    } else {
      progressionArr.push(startNumber);
    }
    const nexNum = startNumber + progressionSteps;
    startNumber = nexNum;
  }
  console.log(`Question: ${progressionArr.concat(' ')}`);
  const question = askQuestion('Your answer: ');
  if (secret === Number(question)) {
    console.log('Correct!');
    finish = true;
    progressionArr = [];
  } else {
    console.log(
      `Your answer: ${question}\n'${question}' is wrong answer ;(. Correct answer was '${secret}'.\nLet's try again, ${userName}!`,
    );
    finish = false;
    break;
  }
}
if (finish) {
  console.log(`Congratulations, ${userName}!`);
}
