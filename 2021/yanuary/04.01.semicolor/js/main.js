// let  randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// // console.log(randomInt(2,9));
const btnr = document.querySelector('.redBut');
const btny = document.querySelector('.yellowBut');
const btng = document.querySelector('.greenBut');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

document.addEventListener('click', (event) => {
    if(event.target.classList.contains("redBut")) {
        red.style.backgroundColor = "red";}
    console.dir(event.target);
    if(event.target.classList.contains("yellowBut")) {
        yellow.style.backgroundColor = "yellow";}
    console.dir(event.target);
    if(event.target.classList.contains("greenBut")) {
        green.style.backgroundColor = "green";}
    console.dir(event.target);
    
});