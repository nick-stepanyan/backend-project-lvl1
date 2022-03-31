import readlineSync from 'readline-sync';

const rounds = 3; // rounds count

//  приветствие
let name = ' ';
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

// правила игры
export const sayRules = (rule) => console.log(rule);

export const resultComplain = (x) => {
  let i = 0;
  while (i < rounds) {
    console.log(x[i][0]);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = x[i][1];
    i += 1;
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
