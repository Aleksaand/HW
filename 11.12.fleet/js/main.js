const randomInt = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}



// Выстрел по случайному кораблю, погрешность повреждения +20%/-20%. 
let temp = null;
const fleet1 = {};
const fleet2 = {};
const destroyer = {
  healthPoints: 45,
  damage: 10,
};
const battleship = {
  healthPoints: 100,
  damage: 4,
};
const aircraft = {
  healthPoints: 15,
  damage: 40,
};
const cruiser = {
  healthPoints: 60,
  damage: 8,
};


for(i = 0; i < 10; i++) {
  
  temp = randomInt(1,4);
  if (temp === 1) {
    fleet1.destroyer = {} ;
  } if (temp === 2) {
    fleet1.battleship = {};
  } if (temp === 3) {
    fleet1.aircraft = {};
  } else {
    fleet1.cruiser = {};
  }
  console.log(temp);

}
console.log(fleet1);








// let str = '';

// const ship1 = {
//   healthPoints: 100,
//   damage: 4,
// }
// const ship2 = {
//   healthPoints: 40,
//   damage: 15,
// }
// const figth = (obj1, obj2) => {
//   let round = 0;
  
//   while ((obj1.healthPoints > 0) && (obj2.healthPoints > 0)) {
//     round = round +1;
//     obj1.healthPoints = obj1.healthPoints - obj2.damage;
//     obj2.healthPoints = obj2.healthPoints - obj1.damage;
//     str = ` ${str} <div> round# ${round} ~ healthPoints#1: ${obj1.healthPoints}, healthPoints#2: ${obj2.healthPoints} </div>\n`;
    
//   }
  
//   if (obj1.healthPoints > 0) {
//       str = ` ${str} <div> Ship1 --- WIN !!! </div>\n`;
//   } else {
//     str = ` ${str} <div> Ship2 --- WIN !!! </div>\n`;
//   }
//   return str;
// }

// figth(ship1, ship2);    
// document.querySelector('.main').innerHTML = str;



// const obj = {
//   a: 1,
//   b: 3,
//   c: 5,
// }

// obj1 = {
//   q: 14,
//   w: 'asd',
// }


// obj.obj1 = {};
// console.log(obj);