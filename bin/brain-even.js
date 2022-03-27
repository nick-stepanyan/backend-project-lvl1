#!/usr/bin/env node
import answer from '../src/cli-even.js';
import { greeting } from '../src/cli.js';

greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(answer());
