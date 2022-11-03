import {question} from 'readline-sync';
import {username} from '../bin/brain-even.js';
// Приветствие
 const greet = () => {
    console.log(`Welcome to the Brain Games!`)
    const userName = question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName
}
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
// вариант ошибки 1
const error = () => {
    console.log(`'${ans}' is wrong answer ;(. Correct answer was 'no'.`)
    console.log(`Let's try again, ${username}!`)
}
// вариант ошибки 2
const errorTwo = () => {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
    console.log(`Let's try again, ${username}!`)
}
// в процессе
const proverka = (ans, num) => {
    if(ans === 'yes'){
       return (even(num) ? true : error() && false)
    }else if(ans === 'no') {
        return (even(num) ? errorTwo() && false : !false)
    }else if(ans !== ('yes' || 'no')) {
        return (even(num)) ? console.log(`'${ans}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${username}!`) : console.log(`'${ans}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${username}!`)
        //  console.log(`Let's try again, ${username}!`)
        
    }
}

const randmosnum = (n) => {
    const ra = randomizer()
    return ra[n]
}

const fisrtplay = () => {
    let i = 0
    let c = 0
    
    while(c <= 2) {
        let nubmuz = randmosnum(i)
        
        
        console.log(`Question: ${nubmuz}`)
        const anse = question(`Your answer: `)    
        
        c += 1
        i += 1
        proverka(anse, nubmuz) ? console.log(`Correct!`) : (c  += 5) && (i -= 4)
    }

    if(i === 3) {
        console.log(`Congratulations, ${username}!`)
    }
}


function firsttest() {
    const array = Array.of(randmosnum())
    console.log(array)
}
firsttest()
export {greet, randomizer, proverka, randmosnum, fisrtplay};