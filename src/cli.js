import { question } from "readline-sync";
// Приветствие
function greet() {
    console.log(`Welcome to the Brain Games!`)
    const nameUser = question(`May I have your name? `)
    console.log(`Hi, ${nameUser}!`)
}
// случайное число от min до (max+1)
function randomInteger(min=2, max=100) {

    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

export {greet, randomInteger}