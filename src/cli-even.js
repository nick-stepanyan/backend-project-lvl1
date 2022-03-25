import readlineSync from 'readline-sync';
import { name } from '../bin/brain-even.js';
// console.log(name)
export const askName = () => readlineSync.question('May I have your name?: ');
export default () => {
  // const name = askName();
  let lap = 3; // number of rounds
  let result = '';
  while (lap > 0) {
    const number = Math.floor(Math.random() * (100)); // number generating
    console.log(number);
    const answer = readlineSync.question('Your answer: '); // answer
    lap -= 1;
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      result = `yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`;
      break;
    } else if (answer === 'no') {
      result = `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`;
      break;
    } else {
      result = `It is a wrong answer, try again, ${name}!`;
      break;
    }
  }
  return result;
};
