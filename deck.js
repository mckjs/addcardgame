// const SUITS = ["♠", "♣", "♥", "♦"]
const SUITS = ["S", "C", "H", "D"]
const VALUES = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
]
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

export default class Deck {
    cardSumCalc(key) {
        var data = []
        for (key in CARD_VALUE_MAP) {
            console.log("for key > " + key + " | get key value > " + CARD_VALUE_MAP[key]);
        }
    }
}

function cardSum(accumulator, a) {
    return accumulator + a;
}