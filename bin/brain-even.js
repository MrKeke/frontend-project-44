#!/usr/bin/env node
import {greet, fisrtplay}  from "../src/cli.js"
export const username = greet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
fisrtplay()
