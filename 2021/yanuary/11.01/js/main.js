// let  randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// // console.log(randomInt(2,9));
// let str = 'block_element--modificator';
 
// for(i = 0; i < str.length; i++) {
//   if(str[i] === '_' || str[i] === '__' || str[i] === '--') {
//     str[i] = '+';
//     console.log(str);
//   }
// };
// console.log(str);

// let str = 'block_element--modificator';

// const reg = '_';
// const reg1 = '--';
// str = str.replaceAll(reg, '+');
// str = str.replaceAll(reg1, '+');


// str = str.split('+');
// console.log(str);
/* <div class="current-time"></div> <div class="free-spaces"></div>
<div class="occupied-spaces"></div>
<div class="main"></div> */
const main = document.querySelector('.mainBlock');
const heder = document.querySelector('.heder');
// console.log(main, heder);
const PLACES = 20;
// let strTemp = '';
let mainArr = [];

for (let i = 0; i < PLACES; i++) {
    // strTemp = `${strTemp}<div id=id${i+1} class="freepParkPlace"></div>`;
    mainArr[i] = { id: i, occupied: true, time: '11:11' }; 
}
// main.innerHTML = strTemp;
console.log(mainArr);