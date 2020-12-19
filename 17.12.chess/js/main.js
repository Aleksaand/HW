let  randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(randomInt(2,9));

const mainEL = document.querySelector('.main');
console.log(mainEL);
let str = '';
for(let i = 0; i < 64 ; i++) {
    str = str + `<div id="${i}" class="chessboard" > ${i+1} </div> \n`;
}
console.log(str);
mainEL.innerHTML = str;
const chessBoardEl = document.querySelectorAll('.chessboard');
console.log(chessBoardEl);


// chessBoardEl[1].style.backgroundColor = '#ffffb8';
chessBoardEl[0].style.backgroundColor = '#cd851f'; // покрасили 1 див
// for( let i = 0; i < chessBoardEl.length ; i ++) {
//     chessBoardEl[i].style.backgroundColor = '#cd851f';
// }

for( let i = 1; i < chessBoardEl.length ; i ++) { //проходим по всем элементам массива
    if (chessBoardEl[i-1].style.backgroundColor === '#cd851f') { // сравниваем цвет с первого элемента, если цвет совпадает красим 
        chessBoardEl[i].style.backgroundColor = '#ffffb8'; // следующий элемент, его проверяем в сл. итерации.
    } 
}

chessBoardEl[0].innerHTML = '<img src="./images/br.png" alt=" текст">';
chessBoardEl[1].innerHTML = '<img src="./images/bn.png" alt=" текст">';
chessBoardEl[2].innerHTML = '<img src="./images/bb.png" alt=" текст">';
chessBoardEl[3].innerHTML = '<img src="./images/bk.png" alt=" текст">';
chessBoardEl[4].innerHTML = '<img src="./images/bq.png" alt=" текст">';
chessBoardEl[5].innerHTML = '<img src="./images/bb.png" alt=" текст">';
chessBoardEl[6].innerHTML = '<img src="./images/bn.png" alt=" текст">';
chessBoardEl[7].innerHTML = '<img src="./images/br.png" alt=" текст">';
for(i = 8; i < 16; i++) {
    console.log(i);
    chessBoardEl[i].innerHTML = '<img src="./images/bp.png" alt=" текст">';
  };
  chessBoardEl[56].innerHTML = '<img src="./images/wr.png" alt=" текст">';
  chessBoardEl[57].innerHTML = '<img src="./images/wn.png" alt=" текст">';
  chessBoardEl[58].innerHTML = '<img src="./images/wb.png" alt=" текст">';
  chessBoardEl[59].innerHTML = '<img src="./images/wk.png" alt=" текст">';
  chessBoardEl[60].innerHTML = '<img src="./images/wq.png" alt=" текст">';
  chessBoardEl[61].innerHTML = '<img src="./images/wb.png" alt=" текст">';
  chessBoardEl[62].innerHTML = '<img src="./images/wn.png" alt=" текст">';
  chessBoardEl[63].innerHTML = '<img src="./images/wr.png" alt=" текст">';
for(i = 48; i < 56; i++) {
     
      chessBoardEl[i].innerHTML = '<img src="./images/wp.png" alt=" текст">';
    };