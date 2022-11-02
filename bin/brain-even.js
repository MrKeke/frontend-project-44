import { greeting, play } from "../src/cli.js"
const username = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
play()

export {username}
