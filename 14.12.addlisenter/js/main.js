let  randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(randomInt(2,9));
let str = '';
for(let i = 0; i < 144; i++) {
    str = `${str} <div class="elem" id="${i}">${i}</div>`;
}
// console.log(str);
document.querySelector('.main').innerHTML = str;
document.addEventListener('click', (e) => {
    let temp = Number(e.target.innerHTML);
    temp += 1;
    e.target.innerHTML = temp;
    e.target.style.backgroundColor = 'Yellow';
});