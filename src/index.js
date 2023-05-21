import readlineSync from 'readline-sync';
import chalk from 'chalk';
import userGreeting from './cli.js';

const name = userGreeting();

const playGame = (description, getQuestionAndAnswer) => {
  const rounds = 3;
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`${question}`);
    const answer = readlineSync.question('You answer: ');
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

export default playGame;
