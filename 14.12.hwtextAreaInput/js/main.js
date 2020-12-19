// let  randomInt = (min, max) => {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// console.log(randomInt(2,9));
// let text = element.textContent;
// console.log(text);
document.querySelector('.button').onclick = function(){
    console.log('GOGOGO');
    let element = document.querySelector('.input');
    console.log(typeof(element), element.value, element);
    let elementValue = element.value;
    console.log(elementValue);
    let splitArray = [];
    splitArray = elementValue.split(" ");
    console.log(splitArray);
    let str = '';
    for(let i = 0; i < splitArray.length; i++) {
        console.log(i);
        str = `${str} <textarea class="input" id="${i}"name="text" >${splitArray[i]}</textarea>`;
    }
    document.querySelector('.main1').innerHTML = str;


}

// let splitArray = element.split(" ");
//     console.log(splitArray);
    


// const submitData = () => {
//     text = text + text;
//     console.log("text");

// };
// let str ="After soaking your filter., in a warm water bath for at least five minutes, drop it into the bottom of your siphons top component, or hopper,. and hook to the bottom of the hoppers glass tubing.,Fill your siphon bottom component.,Insert the hopper, filter and all.";

// let splittedArray = str.split(".,");

// console.log(splittedArray);
