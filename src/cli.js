import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name?: ');
var name = '';
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = askName();
  console.log(`Hello, ${name}!`);
  return name;
};

export { greeting, name };
