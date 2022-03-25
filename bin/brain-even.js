#!/usr/bin/env node
import answer, { askName } from '../src/cli-even.js';

console.log('Welcome to the Brain Games!');
export const name = askName();
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const answ = answer();
console.log(answ);
