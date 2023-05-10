/* eslint-disable no-console */
import chalk from 'chalk';
import readlineSync from 'readline-sync';

console.log(chalk.yellow('Welcome to the Brain Games!'));
const name = readlineSync.question('May I have your name?');
const userGreeting = () => console.log(`Hello, ${name}!`);

export { userGreeting, name };
