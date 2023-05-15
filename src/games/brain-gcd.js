import getRandomInt from '../random-generator.js';

const gcd = (num1, num2) => {
  let a = Math.abs(num1);
  let b = Math.abs(num2);
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
};

const brainGcd = () => {
  const questionsAndAnswer = [];
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  questionsAndAnswer.push(question, correctAnswer.toString());
  return questionsAndAnswer;
};
export default brainGcd;
