import readlineSync from 'readline-sync';
import { username } from '../bin/brain-even.js';
// Приветствие
const greeting = () =>{
console.log('Welcome to the Brain Games!');
const username = readlineSync.question(`May I have your name? `);
return username;
};
// генерит рандомные числа
const randomizer = () => {
    const number = []
    while(number.length <= 2) {
        number.push((Math.round(Math.random()*100)))
        if(number.includes(0)) {
            number.pop()
            number.push(11)
        }
    }
    return number
};
//  чек на четность
const even = n => !(n % 2);
// вопросник
// const question = () => {
    // const answer = readlineSync.question('Your answer: ')
// }
// вариант ошибки 1
const oshibka_ti_ebannaya = () => {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
    console.log(`Let's try again, ${username}!`)
}
// вариант ошибки 2
const oshibka_ti_ebannaya2 = () => {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
    console.log(`Let's try again, ${username}!`)
}
// в процессе
const proverka = (ans, num) => {
    if(ans === 'yes'){
       return (even(num) ? true : oshibka_ti_ebannaya() && false)
    }else if(ans === 'no') {
        return (even(num) ? oshibka_ti_ebannaya2() && false : !false)
    }else if(ans !== ('yes' || 'no')) {
        (even(num)) ? console.log(`'${ans}' is wrong answer ;(. Correct answer was 'yes'.`) : console.log(`'${ans}' is wrong answer ;(. Correct answer was 'no'.`)
        return console.log(`Let's try again, ${username}!`)
    }
}

const randmosnum = (n) => {
    const ra = randomizer()
    return ra[n]
}

const play = () => {
    let i = 0
    let c = 0
    
    while(c <= 2) {
        let nubmuz = randmosnum(i)
        
        
        console.log(`Question: ${nubmuz}`)
        const anse = readlineSync.question(`Your answer: `)    
        
        c += 1
        i += 1
        proverka(anse, nubmuz) ? console.log(`Correct!`) : (c  += 5) && (i -= 4)
    }

    if(i === 3) {
        console.log(`Congratulations, ${username}!`)
    }

}
export {greeting, randomizer, question, proverka, randmosnum, play};