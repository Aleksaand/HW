let  randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(randomInt(2,9));
// 2) на кнопку "?" вешаем обработчик: 
// при нажатии на кнопку берется введенное число в первый input, 
// суммируется с числом во втором input-е и ответ выводится в div

document.querySelector('.button5').onclick = function(){
    let inp1 = document.querySelector('.input1');
    let inp2 = document.querySelector('.input2');
    let a = inp1.value;
    let b = inp2.value;
    console.log(a,b);
    let sum = Number(a) + Number(b);
    console.log(sum);
    let str = `<div> ${sum}</div>`;
    document.querySelector('.container5').innerHTML = str; 
};

// 3) создаем переключатель в 4х кнопках. По умолчанию подсвечена первая, 
// но если нажать на вторую выделение с первой уберется и будет подсвечена вторая кнопка. Аналогично 3 и 4-я.

document.addEventListener('click', (e) => {
    
})
//     console.log('GOGOGO');
//     let element = document.querySelector('.input');
//     console.log(typeof(element), element.value, element);
//     let elementValue = element.value;
//     console.log(elementValue);
//     let splitArray = [];
//     splitArray = elementValue.split(" ");
//     console.log(splitArray);
//     let str = '';
//     for(let i = 0; i < splitArray.length; i++) {
//         console.log(i);
//         str = `${str} <textarea class="input" id="${i}"name="text" >${splitArray[i]}</textarea>`;
//     }
//     document.querySelector('.main1').innerHTML = str;


// }

// let splitArray = element.split(" ");
//     console.log(splitArray);
    

