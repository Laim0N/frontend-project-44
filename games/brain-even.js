#!/usr/bin/env node
/* eslint-disable no-console */
import { randomNum, playGame } from '../src/index.js';

const isEven = (number) => number % 2 === 0;
const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const num = randomNum();
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    const question = `Question: ${num}`;
    questionsAndAnswers.push([question, correctAnswer]);
  }
  playGame(questionsAndAnswers);
};

export default evenGame;




// const evenGame = () => {
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   for (let i = 0; i < 3; i += 1) {
//     const num = randomNum();
//     const correctAnswer = isEven(num) ? 'yes' : 'no';
//     console.log(`Question: ${num}`);
//     const answer = readlineSync.question('You answer: ');
//     if (correctAnswer === answer) {
//       console.log(chalk.green('Correct!'));
//     } else {
//       console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}')`);
//       console.log(`Let's try again, ${name}`);
//       break;
//     }
//     if (i === 2) {
//       console.log(`Congratulation, ${name}!`);
//     }
//   }
// };