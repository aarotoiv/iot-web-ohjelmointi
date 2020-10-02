//t1
function luoLaskuri() {
    let i = 0;
    return function() {
        i++;
        return i;
    };
}
const se = luoLaskuri();
console.log(se());
console.log(se());
const toine = luoLaskuri();
console.log(toine());
console.log(toine());
//t2
const luoKakkone = () => {
    let i = 0;
    return (() => {
        i++;
        return i;
    });
};
//t3
const calculateSum = (a, b, callback) => {
    return callback(`${a} + ${b} = `, a+b);
};
calculateSum(4, 5, console.log);
//t4
setInterval(() => {
    console.log(se());
}, 1000);
