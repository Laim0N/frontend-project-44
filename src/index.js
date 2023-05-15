import readlineSync from 'readline-sync';
import chalk from 'chalk';
import userGreeting from './cli.js';
import brainCalc from './games/brain-calc.js';
import brainProgression from './games/brain-progression.js';
import brainGcd from './games/brain-gcd.js';
import primeGame from './games/brain-prime.js';
import evenGame from './games/brain-even.js';

const name = userGreeting();

const selectGame = (gameName) => {
  const nameAndDescription = [];
  switch (gameName) {
    case 'even':
      nameAndDescription.push(evenGame);
      nameAndDescription.push('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      nameAndDescription.push(brainCalc);
      nameAndDescription.push('What is the result of the expression?');
      break;
    case 'gcd':
      nameAndDescription.push(brainGcd);
      nameAndDescription.push('Find the greatest common divisor of given numbers.');
      break;
    case 'prime':
      nameAndDescription.push(primeGame);
      nameAndDescription.push('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    case 'progression':
      nameAndDescription.push(brainProgression);
      nameAndDescription.push('What number is missing in the progression?');
      break;
    default:
      return 'Incalid game selection.';
  }
  return nameAndDescription;
};

const playGame = (game, rounds) => {
  const gameName = selectGame(game);
  const description = gameName[1];
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const questionsAndAnswer = gameName[0]();
    const question = questionsAndAnswer[0];
    const correctAnswer = questionsAndAnswer[1];
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
