import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { name }  from '../src/cli.js';

const randomNum = () => Math.floor(Math.random() * 100 + 1);

const playGame = (questionsAndAnswers) => {
  for (let i = 0; i < questionsAndAnswers.length; i += 1) {
    const [question, correctAnswer] = questionsAndAnswers[i];
    console.log(`${question}`);
    const answer = readlineSync.question(`You answer: `);
    if (answer === correctAnswer) {
      console.log(chalk.green('Correct!'));
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}')`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulation, ${name}!`);
};

export { randomNum, playGame } ; 