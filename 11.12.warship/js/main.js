// `use strick`;
// сonst randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// Есть два корабля,
//   первый корабль имеет  HP (Health Points) 100, Damage 4, 
//     второй корабль имеет HP 40, damage 15. Описать объектами.
// В одной итерации стреляют друг в друга.
// Вывести лог боя. Определить победителя. 



let str = '';

const ship1 = {
  healthPoints: 100,
  damage: 4,
}
const ship2 = {
  healthPoints: 40,
  damage: 15,
}
const figth = (obj1, obj2) => {
  let round = 0;
  
  while ((obj1.healthPoints > 0) && (obj2.healthPoints > 0)) {
    round = round +1;
    obj1.healthPoints = obj1.healthPoints - obj2.damage;
    obj2.healthPoints = obj2.healthPoints - obj1.damage;
    str = ` ${str} <div> round# ${round} ~ healthPoints#1: ${obj1.healthPoints}, healthPoints#2: ${obj2.healthPoints} </div>\n`;
    
  }
  
  if (obj1.healthPoints > 0) {
      str = ` ${str} <div> Ship1 --- WIN !!! </div>\n`;
  } else {
    str = ` ${str} <div> Ship2 --- WIN !!! </div>\n`;
  }
  return str;
}

figth(ship1, ship2);    
document.querySelector('.main').innerHTML = str;
