#!/usr/bin/env node
import { randomInteger } from '../cli.js';
import playing from '../index.js';

const gameRule = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];
const calc = (numberOne, numberTwo, simbol) => {
  let result = 0;
  switch (simbol) {
    case '+':
      result = (numberOne + numberTwo);
      break;
    case '-':
      result = (numberOne - numberTwo);
      break;
    default:
      result = (numberOne * numberTwo);
      break;
  }
  return result;
};
const round = () => {
  const num1 = randomInteger(1, 30);
  const num2 = randomInteger(1, 30);
  const symbol = symbols[randomInteger(0, 2)];
  const que = `${num1} ${symbol} ${num2}`;
  const answer = calc(num1, num2, symbol);
  // console.log(typeof answer)
  return [answer.toString(), que];
};
const playthisgame = () => playing(gameRule, round);
export default playthisgame;
