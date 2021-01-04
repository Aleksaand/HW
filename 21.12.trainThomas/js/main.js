// let  randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// // console.log(randomInt(2,9));
const btn_light = document.querySelector('.btn_light');
const left__control = document.querySelector('.btn__left');
const right__control = document.querySelector('.btn__right');
const train = document.querySelector('.train');
const light = document.querySelector('.light');
train.style.left = getComputedStyle(train).left;
train.style.animationPlayState = 'paused';

const light1 = () => {
    if(light.style.backgroundColor === "red" || light.style.backgroundColor === "") {
        light.style.backgroundColor = "yellow";
        btn_light.innerHTML = "LIGHT ON";
    }
    else {
        light.style.backgroundColor = "red";
        btn_light.innerHTML = "LIGHT OFF";
    }
};
const left_move = () => {
    train.style.left = getComputedStyle(train).left;
    let temp = Number(train.style.left.slice(0, -2)); // Преобразовуем в число значение текушего 
//                                                       положения поезда и обрезаем в конце 2 знака px. 
    // console.log(typeof(temp),temp);
    let speed = temp - 50; //расчетная ск-ть равна 1 пиксель в 1 милисекунду. получаем расстояние которое осталось пройти
    let newspeed = `${speed*10}ms`; //собираем строку для передачи в свойство animationDuration
    console.log(typeof(newspeed), newspeed);
    // let newspeed1 = String(newspeed);
    train.style.animationDuration = newspeed;
    console.log('animationDuration:',train.style.animationDuration);
    console.log('style:',train.style);
    if (train.classList.contains('right')) {
        train.classList.remove('right'),
        train.classList.add('left');
    };
    if (train.style.animationPlayState === 'paused' ) {
             
        train.style.animationPlayState = 'running';
        left__control.innerHTML = "LEFT ON";
    } else {
        train.style.animationPlayState = 'paused';
        left__control.innerHTML = "LEFT OFF";
    }
};
const right_move = () => {
    if (train.classList.contains('left')) {
        train.classList.remove('left'),
        train.classList.add('right');
    } //else {
    //     train.classList.remove('right'),
    //     train.classList.add('left');
    // };
    
    train.style.left = getComputedStyle(train).left;
    let temp = Number(train.style.left.slice(0, -2)); // Преобразовуем в число значение текушего 
    //                                                   //  положения поезда и обрезаем в конце 2 знака px. 
    // console.log(typeof(temp),temp);
    let speed = 650 - temp ; //расчетная ск-ть равна 1 пиксель в 1 милисекунду. получаем расстояние которое осталось пройти
    let newspeed = `${speed*10}ms`; //собираем строку для передачи в свойство animationDuration
    console.log(typeof(newspeed), newspeed);
    // let newspeed1 = String(newspeed);
    train.style.animationDuration = newspeed;
    console.log('animationDuration:',train.style.animationDuration);
    console.log('style:',train.style);
    console.log('train.style.left:',train.style.left);
    // if (train.style.animationPlayState === 'paused' || getComputedStyle(train).animationPlayState === 'paused') {
    if (train.style.animationPlayState === 'paused') {
        train.style.animationPlayState = 'running';
        right__control.innerHTML = "RIGHT ON";
    } else {
        train.style.animationPlayState = 'paused';
        right__control.innerHTML = "RIGHT OFF";
    }
};

btn_light.addEventListener('click', light1);
left__control.addEventListener('click', left_move);
right__control.addEventListener('click', right_move);










// btn_light.addEventListener('click', () => {
//     // light.classList.toggle('color1');
//     // light.classList.toggle('color2');
//     console.log(btn_light);
//     if(light.style.backgroundColor === "red" || light.style.backgroundColor === "") {
//         light.style.backgroundColor = "yellow";
//         btn_light.innerHTML = "LIGHT ON";
//     }
//     else {
//         light.style.backgroundColor = "red";
//         btn_light.innerHTML = "LIGHT OFF";
//     }
// });


// left__control.addEventListener('click', () => {
//     train.style.left = getComputedStyle(train).left;
//     if (train.style.animationPlayState === 'paused' || getComputedStyle(train).animationPlayState === 'paused') {
//         train.style.animationPlayState = 'running';
//         left__control.innerHTML = "LEFT ON";
//     } else {
//         train.style.animationPlayState = 'paused';
//         left__control.innerHTML = "LEFT OFF";
//     }
    
// });

// right__control.addEventListener('click', () => {
    
//     train.style.left = getComputedStyle(train).left;
//     console.log(train.style.left);
//     train.classList.toggle('left');
//     train.classList.toggle('right');
//     if (train.style.animationPlayState === 'paused' || getComputedStyle(train).animationPlayState === 'paused') {
//         train.style.animationPlayState = 'running';
//         right__control.innerHTML = "RIGHT ON";
//     } else {
//         train.style.animationPlayState = 'paused';
//         right__control.innerHTML = "RIGHT OFF";
//     }
// });

document.addEventListener('keydown', (event) => {
     console.log(event.code);
    // console.log(event.key);
    if(event.code === 'KeyF') {
        light1();
    } else if (event.code === 'ArrowLeft') {
        left_move();
    } else if (event.code === 'ArrowRight') {
        right_move();
    }
});

// let animation = train.animate(forwardLeft, options);
// console.log(animation); 

// document.querySelector('.train').animate([
//     // keyframes
//     { transform: 'animation-duration: 3s;' },
//     { transform: 'animation-duration: 10s;' }
//   ], {
//     // timing options
//     // duration: 1000,
//     //iterations: forwards,
//   });

// left__control.addEventListener("click", () => {
//     console.log(left__control.classList);
//     console.log(left__control.className);
//     if (train.classList.contains(color1)) {
//         train.classList.remove('color1');
//         train.classList.add('color2');
//     } else {
//         train.classList.remove('color2');
//         train.classList.add('color1');
//     }
// });

// left__control.addEventListener("click", () => {
//     if(train.style.animationPlayState === "paused" || train.style.animationPlayState === "") {
//         train.style.animationPlayState = "running";
//         // engine.style.left = startPoint;
//         train.classList.add("left-move");
//         train.classList.remove("right-move");
//     }
//     else {
//         train.style.animationPlayState = "paused"
//         // startPoint = `${engineCoords.left}px`;
//     }
// });

let now = new Date();
console.log(now);