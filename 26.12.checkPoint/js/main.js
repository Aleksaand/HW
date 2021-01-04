'use strict';
// let  randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// // console.log(randomInt(2,9));

// Задания на понедельник 28-12-2020:  
// 1) cгенерируй 2м массив, константа сторона поля, например, равна 5.
// 2) напиши функцию очистки массива, заполнить null
// 3) напиши функцию подсчета ненулевых(непустых) клеток во всём массиве
// 4) отобрази на странице игровое поле(клетки массива) и строку статуса, 
// в которой будет написано количество ненулевых клеток. 
// Нулевые клетки закрашены белым цветом. (render)
// 5) покажи на странице 4 html кнопки-стрелки: "вверх", "вниз", "влево", "вправо"
// 6) сделай управление мышкой и клавиатурой, там где находится курсор 
// (курсор- это любая клетка поля), закрашиваем клетку синим цветом. 
// Первоначальное положение курсора в левом верхнем углу. В массиве, в соответствующую ячейку писать "1".
//  Уход с клетки возвращает значение null;
// 7) на игровом поле сделать отображение следа на клетках после курсора оранжевым цветом. 
// В соответствующих ячейках массива где след писать "2". След весь от начала игры.
// 8) сделай отключение соответствующих кнопок управления, если курсор с краю поля или на-т на свой след.
// 9) сделай обработку ситуации GAME OVER, когда нет куда ходить,отобразить на странице надпись GAME OVER
// 10) добавь таймер на 10 секунд, если не сделал ход, GAME OVER.

const main = document.querySelector('.main');
const status = document.querySelector('.status');
const boxControl = document.querySelector('.boxControl');
const btnDw = document.querySelector('.down');
const btnUp = document.querySelector('.up');
const btnRt = document.querySelector('.rigth');
const btnLt = document.querySelector('.left');
const statusBtn = {};
let coordX = 0;                                               //  Начальное положение ячейки, ось х
let coordY = 0;                                               //  Начальное положение ячейки, ось y
// let counter = 0;
let mainArr = [];
let str = '';

const sideField = 6;
console.log(btnLt);
btnLt.disabled = true;




const genereteArray2X = (side, arr, value) => { // создаем функцию для генерации двумерного массива
  for(let i = 0; i < side; i++) {               // аргументом передаем количество элементов в каждом массиве
    arr[i]=[];                                  // сам массив который будет двумерным
    for(let j = 0; j < side; j++) {             // значение чем заполним массив
      arr[i][j] = value;
    }
  }
};

genereteArray2X(sideField, mainArr, 1);
// console.log(mainArr);


const assignArrayValueNull = (a) => {           // создаем функцию для заполнения всех элементов массива
  for(let k = 0; k < a.length; k++) {           // значением null
    for(let l = 0; l < a[k].length; l++) {
      a[k][l] = 0;
    }
  };
};

assignArrayValueNull(mainArr);
// console.log(mainArr);
mainArr[coordX][coordY] = 1;

const countTrueValue = (arr) => {             // Создаём функцию подсчета ненулевых элементов массива
    let counter = 0;
    arr.forEach((item,index) => {             // передаем 1 аргумент наш массив. В глобальную переменную
      arr[index].forEach(item => {            // counter получаем количество не пустых элементов  
        item ? counter++ : false ;
      });
    });
    return counter;
};
// countTrueValue(mainArr);
// console.log(counter);


const makePlayFeald = (arr) => {                            //Создаем игровое поле перебераем элементы
  let counter = 0;
  arr.forEach((item, index) => {                            //в массиве через 2-а фоИча и собираем строку
    arr[index].forEach(item => {                            //из дивов для пуша в иннерХТМЛ
      if(item === 1) {                                            //проверяем если элемент не нулевой красим
        str = `${str}<div class="box green" id="i"></div>`; //если нулевой белим (класс вайт)
        counter++;                                          //counter закидываем в строку статуса.
      } else if(item === 2) {                                            //проверяем если элемент не нулевой красим
        str = `${str}<div class="box orange" id="i"></div>`; //если нулевой белим (класс вайт)
        counter++;                                          //counter закидываем в строку статуса.
      } else {
        str = `${str}<div class="box white" id="i"></div>`;
      }
    });
  });
  main.innerHTML = str;
  str = '';
  status.innerHTML = ` количество не пустых ${counter}`;

}; 
makePlayFeald(mainArr);

const checkButtonLeftActive = () => {
  if ((coordY - 1) < 0 || (mainArr[coordX][coordY-1]) !== 0 ) {
    statusBtn.left = false;
    // btnLt.disabled = true;
    // btnLt.style.opacity =  "0.25";     
  } else {
    statusBtn.left = true;
    // btnLt.disabled = false;
    // btnLt.style.opacity =  "1";     
  };
};
const checkButtonRigthActive = () => {
  if (coordY + 1 > mainArr.length - 1 || (mainArr[coordX][coordY+1]) !== 0 ) {
      statusBtn.rigth = false;
      // btnRt.style.opacity =  "0.25";
    } else {
      statusBtn.rigth = true;
      // btnRt.style.opacity =  "1";
    };
};
const checkButtonDownActive = () => {
  if (coordX + 1 > mainArr.length - 1 || (mainArr[coordX + 1][coordY]) !== 0 ) {
    statusBtn.down = false;
    // btnDw.style.opacity =  "0.25";
  } else {
    statusBtn.down = true;
    // btnDw.style.opacity =  "1";
  };
};
const checkButtonUpActive = () => {
  if (coordX - 1 < 0 || (mainArr[coordX-1][coordY]) !== 0 ) {
    statusBtn.up = false;
    // btnUp.style.opacity =  "0.25";
    
  } else {
    statusBtn.up = true;
    // btnUp.style.opacity =  "1";
  };
};

const opacityBtn = () => {
  btnUp.style.opacity =  "1";
  btnUp.disabled = false;
  btnDw.style.opacity =  "1";
  btnDw.disabled = false;
  btnRt.style.opacity =  "1";
  btnRt.disabled = false;
  btnLt.style.opacity =  "1";
  btnLt.disabled = false;
  if(statusBtn.up === false) {
    btnUp.style.opacity =  "0.25";
    btnUp.disabled = true;
  }
  if(statusBtn.down === false) {
    btnDw.style.opacity =  "0.25";
    btnDw.disabled = true;
  }
  if(statusBtn.left === false) {
    btnLt.style.opacity =  "0.25";
    btnLt.disabled = true;
  }
  if(statusBtn.rigth === false) {
    btnRt.style.opacity =  "0.25";
    btnRt.disabled = true;
  }
};

const checkButtonsActive = () => {
  checkButtonUpActive();
  checkButtonDownActive();
  checkButtonRigthActive();
  checkButtonLeftActive();
  opacityBtn();
  console.log(statusBtn);
};
checkButtonsActive();


document.addEventListener('keydown', (event) => {
  if(event.code === "ArrowDown" && coordX + 1 < mainArr.length && mainArr[coordX+1][coordY] !== 2) {
    // assignArrayValueNull(mainArr);
    mainArr[coordX][coordY] = 2;
    
    coordX = coordX + 1;
    mainArr[coordX][coordY] = 1;
    // btnDw.style.opacity =  "1";
    makePlayFeald(mainArr);
    checkButtonDownActive();
    
  } 
  //  else {
  //      btnDw.style.opacity =  "0.25";
  //   };
  if(event.code === "ArrowUp" && coordX - 1 >= 0 && mainArr[coordX-1][coordY] !== 2) {
    // assignArrayValueNull(mainArr);
    mainArr[coordX][coordY] = 2;
    coordX = coordX - 1;
    mainArr[coordX][coordY] = 1;
    makePlayFeald(mainArr);
    checkButtonUpActive();
  
  }
    //  else {
    //   btnUp.style.opacity =  "0.25";
    // } ;
  if(event.code === "ArrowRight" && coordY + 1 < mainArr.length && mainArr[coordX][coordY+1] !== 2) {
    // assignArrayValueNull(mainArr);
    mainArr[coordX][coordY] = 2;
    coordY = coordY + 1;
    mainArr[coordX][coordY] = 1;
    makePlayFeald(mainArr);
    checkButtonRigthActive();
    };
  if(event.code === "ArrowLeft" && coordY - 1 >= 0 && mainArr[coordX][coordY-1] !== 2) {
    // assignArrayValueNull(mainArr);
    mainArr[coordX][coordY] = 2;
    coordY = coordY - 1;
    mainArr[coordX][coordY] = 1;
    makePlayFeald(mainArr);
    checkButtonLeftActive();
    };
});