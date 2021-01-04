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

let str = 'block_element--modificator';

const reg = '_';
const reg1 = '--';
str = str.replaceAll(reg, '+');
str = str.replaceAll(reg1, '+');


str = str.split('+');
console.log(str);
