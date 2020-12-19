console.log('helo');
const val = 501;
const randomInt = (min, max) => {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);

};

let min = -200000; // границы поиска
let max = 200000;
let curr = null;




do {
    curr = randomInt(min,max);
    if (curr === val) {
        console.log('Found');
    } else if (curr < val ) {
        min = curr + 1;
        console.log(`curr = ${curr} < val`);
    } else {
        max = curr - 1;
        console.log(`curr = ${curr} > val`);
    }


} while (curr !== val);

//document.querySelector('.main').innerHTML = str;