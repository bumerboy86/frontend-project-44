#!/usr/bin/env node
const askprogressionAnswer = require('../src/cli');

console.log('Welcome to the Brain Games!');
const userName = askprogressionAnswer('May I have your name?: ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');
let progressionArr = [];
let finish = false;
const rounds = 3;

for (let i = 0; i < rounds; i += 1) {
  const min = 5;
  const max = 10;
  const step = Math.floor(Math.random() * (max - min) + min);
  const hidenNumber = Math.floor(Math.random() * (step - 1 - min) + min);
  const progressionSteps = Math.floor(Math.random() * (max - 1) + 1);
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
  console.log(`Question: ${progressionArr.join(' ')}`);
  const userAnswer = askprogressionAnswer('Your answer: ');
  if (secret === Number(userAnswer)) {
    console.log('Correct!');
    finish = true;
    progressionArr = [];
  } else {
    console.log(
      `${userAnswer}' is wrong answer ;(. Correct answer was '${secret}'.\nLet's try again, ${userName}!`,
    );
    finish = false;
    break;
  }
}
if (finish) {
  console.log(`Congratulations, ${userName}!`);
}
