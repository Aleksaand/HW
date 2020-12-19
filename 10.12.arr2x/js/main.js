сonst randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const getArray = (rows, columns, min, max) => {
    let obj = {
        value: randomInt(min, max),
    };
    let arr = [];                                // []
    for (let i = 0; i < rows; i++) {
        arr[i] = [];                            // [[], [], [], [], []]
        for (let j = 0; j < columns; j++) {
            arr[i][j] = randomInt(min, max);    // [[4, 8, 12, 0, 9], [], ...]
        };
    };
    return obj;
};
const copy2DArr = (arrIn) => {
    let arr = [];
    for (let i = 0; i < arrIn.length; i++) {
        arr[i] = [];
        for (let j = 0; j < arrIn[i].length; j++) {
            arr[i][j] = arrIn[i][j];
        };
    };
    return arr;
};



console.log(getArray = (5, 5, 1, 10));