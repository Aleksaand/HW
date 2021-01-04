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

const btns = document.querySelectorAll('button');
let wrapper = document.querySelector('.main');
// console.log(btns); // 
// //console.log(btns[0].classList.length);
// //console.log(btns[0].classList.item(1));
// btns[0].classList.add('red');
// btns[1].classList.add('orange');
// btns[2].classList.add('yellow');
// btns[3].classList.add('green');
// btns[4].classList.add('blue');
// btns[4].classList.remove('blue');
// setTimeout( () =>{

// },5000);
// btns[4].classList.add('blue');
// btns[5].classList.add('bluesea');
// btns[6].classList.add('purple');
// btns[7].classList.add('purple');
// btns[7].classList.toggle('purple');
// // btns[4].classList.toggle('blue');
// btns.forEach((item, index) => { 
//     console.log(item,index);
    
//     item.classList.add('red');

// });
// console.log(btns[6].classList.item(0));
// console.log(btns[6].classList.item(1)); 
// console.dir(btns[0].classList);
// if (btns[7].classList.contains('red')) {
//     console.log('red');
//     btns[7].classList.remove('red');

// };
// btns[7].classList.toggle('red');

btns[0].addEventListener('click', () => {
    if(!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
    // btns[1].classList.toggle('red');

});
console.log(wrapper);
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('target');
        
    }

});


const bt = document.createElement('button');
        bt.classList.add('red');
        wrapper.append(bt);
        // console.log(btns);
        // const btns = document.querySelectorAll('button');
        // btns.forEach(btn => {
        //     btn.addEventListener('click', () =>{
        //         console.log('YEP');
        //     });
        
        // });