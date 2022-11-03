#!/usr/bin/env node
import { greeting, fisrtplay } from "../src/cli.js"
const username = greeting();
console.log('What is the result of the expression?');

export {username}
