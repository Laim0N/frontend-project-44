#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { name } from '../src/cli.js';



const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('You answer: ');
    if ((isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no')) {
      console.log(chalk.green('Correct!'));
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${isEven(num) ? 'yes' : 'no'}')`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulation, ${name}!`);
    }
  }
};
export default evenGame;
