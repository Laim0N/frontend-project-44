import { getRandomInt, playGame } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 0; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(1, 1000);
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    const question = `Question: ${randomNum}`;
    questionsAndAnswers.push([question, correctAnswer]);
  }
  playGame(questionsAndAnswers);
};
export default primeGame;
