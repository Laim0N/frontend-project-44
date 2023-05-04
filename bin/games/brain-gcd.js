import { playGame, getRandomInt } from "../../src/index.js";
const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  }
  while (a !== b) {
    if (a > b) {
       a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
};

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const question = `Question: ${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2);
    questionsAndAnswers.push([question, correctAnswer.toString()])
  }
  playGame(questionsAndAnswers);
};
export default brainGcd;