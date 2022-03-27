import readlineSync from 'readline-sync';
import { name } from './cli.js';

export default () => {
  let lap = 3; // number of rounds
  const result = `Congratulations, ${name}!`;
  while (lap > 0) {
    const number = Math.floor(Math.random() * (100)); // number generating
    console.log(number);
    const answer = readlineSync.question('Your answer: '); // answer
    lap -= 1;
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      return `yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`;
    } else if (answer === 'no') {
      return `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`;
    } else {
      return `It is a wrong answer, try again, ${name}!`;
    }
  }
  return result;
};
