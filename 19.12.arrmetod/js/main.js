const arr = [5, 23, -110, 3, 18, 0, 14];
console.log(arr);
const arrEvenNum = arr.filter((item)=>{
    return item % 2 !== 0
});
console.log(arrEvenNum);
const arrPlusNum = arr.map(item => item + 30);
console.log(arrPlusNum);
const arrPositiveOdd = arr.filter((item) => {
  if (item > 0 && item % 2 !== 0) {
    return item
  }
});
console.log(arrPositiveOdd);
const arrCheckNum = arr.includes(5);
console.log(arrCheckNum);


const newSumDevisonNum = arr.reduce((sum, current) => sum + current % 3, 0);

console.log(newSumDevisonNum);