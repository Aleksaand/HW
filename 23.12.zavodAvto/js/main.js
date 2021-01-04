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

// Задание на понедельник 07-12-2020:
//  На заводе выпускаются автомобили со следующими конфигурациями: 
//  -цвет кузова: желтый, зеленый, красный, синий, оранжевый; 
//  -коробка передач: автоматическая, ручная; 
//  -кондиционер: установлен, отсутствует; 
//  -отделка салона: кожа, ткань, комбинированная. 
//  Задача: описать в объекте все возможные конфигурации автомобилей, 
//  при этом на каждой конфигурации указать код формата: 
//  XXXXYZWV, где: XXXX- порядковый номер конфигурации, Y- цвет кузова, Z-коробка передач, W- кондиционер, V-отделка салона.
const mainObj = {
    arr:[]
};
const carBody = ['yellow', 'green', 'red', 'blue', 'orange'];
const transmission = ['auto', 'mechanic'];
const conditioner = ['withCond', 'withoutCond'];
const carInterior = ['leather', 'combo', 'cloth'];

function Item (cb, tr, cd, ci) {
    this.carBody = cb;
    this.transmission = tr;
    this.conditioner = cd;
    this.carInterior = ci;
}
let count = 1;
carBody.forEach(el1 => {
    transmission.forEach(el2 => {
        conditioner.forEach(el3 => {
            carInterior.forEach(el4 => {
                let tempObj = new Item(el1, el2, el3, el4);
                // console.log(tempObj);
                let tempStr = `${String(count).padStart(4, '0')}${el1[0]}${el2[0]}${el3[0]}${el4[0]}`;
                
                tempObj.code = tempStr;
                mainObj.arr.push(tempObj);
                count++;


            })
        })
    })
});
console.log(mainObj);