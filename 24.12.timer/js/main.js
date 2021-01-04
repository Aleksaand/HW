// let  randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// // console.log(randomInt(2,9));

arrow = document.querySelector('.arrow');
btn = document.querySelector('.button');
realTime = document.querySelector('.realTime');
input = document.querySelector('input');
clock = document.querySelector('.clock');
hour = document.querySelector('.hour');
minute = document.querySelector('.minute');
second = document.querySelector('.second');
btn.disabled = true;
let timeNow = Date.now();
console.log(timeNow);
realTime.innerHTML = moment().format('HH:mm:ss');



const runTimer = () => {
const getTime = () => {
let tempStrHourMin = String(input.value);
let tempYMonthDay = String(new Date());
let tempmin = +tempStrHourMin.slice(3, 5);
let temphour = +tempStrHourMin.slice(0, 2);
let tempyear = +tempYMonthDay.slice(11, 16);
let tempday = +tempYMonthDay.slice(8, 10);
let start = Date.parse(new Date(tempyear, 12, tempday, temphour,tempmin));
let end = Date.parse(new Date());
let tempresalt = start - end;
let thour = Math.floor((tempresalt/ (1000 * 60 *60)) % 24);
let tminute = Math.floor((tempresalt/ (1000 * 60 )) % 60);
let tsecond = Math.floor((tempresalt/ 1000 ) % 60);
hour.innerHTML = thour;
minute.innerHTML = tminute;
second.innerHTML = tsecond;
if (!arrow.classList.contains('anime')) {
    clearInterval(updateTime);
} 
};
const updateTime = setInterval(getTime, 1000);


// clearInterval(updateTime);
arrow.classList.toggle('anime');

};
// console.log(input);
// console.log(btn);
// console.log(realTime);
// console.log(clock);

input.addEventListener('input', (event) => {
    console.log(event.target.value);
    btn.addEventListener('click', runTimer);
    if (event.target.value !== "") {
        btn.disabled = false;
        // btn.addEventListener('click', runTimer);
    } else {
        btn.disabled = true;
        // btn.removeEventListener('click', runTimer);
        // btn.addEventListener('click', runTimer);
    }
});

let newInMs = new Date();
console.log(newInMs);
// console.log(now.getTime());

// let timeInMs = Date.now();
// console.log(timeInMs);


// const start = now.getTime();
// const end = getTime(event.target.value);

// console.log(start, end);
// // 
// console.log();
// let start = moment().format('HH:mm:ss');
// console.log(start);
// let end   = moment().format('HH:mm');
// // console.log(end.to(start));  

