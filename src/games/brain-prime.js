import getRandomInt from '../random-generator.js';

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
  const questionsAndAnswer = [];
  const randomNum = getRandomInt(1, 1000);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = `Question: ${randomNum}`;
  questionsAndAnswer.push(question, correctAnswer);
  return questionsAndAnswer;
};
export default primeGame;
