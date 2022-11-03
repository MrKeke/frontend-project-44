#!/usr/bin/env node
import { greeting, fisrtplay } from "../src/cli.js"
const username = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
fisrtplay()

// export {username}
