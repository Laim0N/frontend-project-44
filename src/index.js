import readlineSync from 'readline-sync';
import chalk from 'chalk';

const rounds = 3;
const playGame = (description, getQuestionAndAnswer) => {
  console.log(chalk.yellow('Welcome to the Brain Games!'));
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ');
    if (answer === correctAnswer) {
      console.log(chalk.green('Correct!'));
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}')`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
