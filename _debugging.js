let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 3;
}

console.log(arr); // [9, 12, 15, 18]

/*-----------------------------------------------------------*/
function getFirstLetters(str) {
    const firstLetters = str
        .split(' ')
        .map(word => word[0])
        .join('');

    return firstLetters;
}

console.log(getFirstLetters('A1 2J'));
/*-----------------------------------------------------------*/

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 1
}

const map1 = new Map();
map1.set(CARD_VALUE_MAP, '2');

console.log(map1.get(CARD_VALUE_MAP)); // "val"
console.log(CARD_VALUE_MAP);

for (var key in CARD_VALUE_MAP) {
    console.log(key);
    console.log("get key value" + CARD_VALUE_MAP[key]);
}

/*const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6*/

const sum = [1, 2, 3].reduce(add, 0); // with initial value to avoid when the array is empty

function add(accumulator, a) {
    return accumulator + a;
}

console.log(sum); // 6