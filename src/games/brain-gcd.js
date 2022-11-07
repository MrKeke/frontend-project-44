#!/usr/bin/env node
import { randomInteger } from '../cli.js';
import playing from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}
const round = () => {
  const num1 = randomInteger(1, 20);
  const num2 = randomInteger(1, 20);
  const question = `${num1} ${num2}`;
  const answer = NOD(num1, num2);
  return [answer.toString(), question];
};
const playthisgame = () => playing(gameRule, round);
export default playthisgame;
