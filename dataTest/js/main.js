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

const deadLine = document.querySelector('input');
tempStr = String(deadLine.value);
let tempYMH = String(new Date());
console.log(tempYMH);
// console.log(typeof(tempStr), tempStr);
tempmin = +tempStr.slice(3, 5);
temphour = +tempStr.slice(0, 2);
tempyear = +tempYMH.slice(11, 16);
tempday = +tempYMH.slice(8, 10);
console.log(tempday);
// console.log('min:',tempmin, 'hover:',temphour);
// console.log(typeof(tempmin));
// console.log(typeof(temphour));
let start = Date.parse(new Date(tempyear, 12, tempday, temphour,tempmin));
// console.log(start);
 
let end = Date.parse(new Date());
// console.log(end); 
let tempresalt = start - end;
console.log(tempresalt);
let hour = Math.floor((tempresalt/ (1000 * 60 *60)) % 24);
let minute = Math.floor((tempresalt/ (1000 * 60 )) % 60);
let second = Math.floor((tempresalt/ 1000 ) % 60);
console.log('hour:',hour);
console.log('minute:',minute);
console.log('second:',second);
console.log(hour + 5);