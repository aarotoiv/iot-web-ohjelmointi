const numerot = process.argv.slice(2).splice(0, 7);

const arvo = numerot => {
    let arvotut = [];
    for(let i = 0; i<7; i++) {
        const num = Math.floor(Math.random() * 40 + 1);
        if(!onJo(arvotut, num))
            arvotut.push(num);
        else
            i--; 
    }
    return check(numerot, arvotut)
};
const check = (numerot, arvotut) => {
    let points = 0;
    for(let i = 0; i<numerot.length; i++) {
        for(let j = 0; j<arvotut.length; j++) {
            if(numerot[i] == arvotut[j]) {
                points++;
            }
        }
    }
    return points;
};
const onJo = (numerot, numero) => {
    return numerot.includes(numero);
};
console.log(arvo(numerot));
