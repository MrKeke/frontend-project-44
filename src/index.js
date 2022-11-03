import {even} from 'cli.js'
import readlineSync from 'readline-sync';
import {username} from 'brain-calc.js'


const greeting = () =>{
    console.log('Welcome to the Brain Games!');
    const username = readlineSync.question(`May I have your name? `);
    return username;
    };

    
const error = () => {
    console.log(`'${ans}' is wrong answer ;(. Correct answer was 'no'.`)
    console.log(`Let's try again, ${username}!`)
}

const errorTwo = () => {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
    console.log(`Let's try again, ${username}!`)
}

const proverka = (ans, num) => {
    if(ans === 'yes'){
       return (even(num) ? true : error() && false)
    }else if(ans === 'no') {
        return (even(num) ? errorTwo() && false : !false)
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