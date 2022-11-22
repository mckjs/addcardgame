import Util from './utilities.js'
import Deck from './deck.js'

import players from './payload.js'

const util = new Util()
const deck = new Deck()
let text = "";
let inputFileName = process.env.IN;
let outputFileName = process.env.OUT;
var inputfile = util.syncReadFile(inputFileName)
var arrayLength = inputfile.length
/*--------------------------------------------------------------------------*/
console.log("> " + arrayLength)
/*--------------------------------------------------------------------------*/
let myJSONString
var data = []
for (var i = 0; i < arrayLength; i++) {
    var dict = {}
    text = inputfile[i].split(":")
    text[1].split(",")
    dict['name'] = text[0]
    dict['cards'] = text[1]
    data[i] = dict
    myJSONString = JSON.stringify(data);
}
const parsedArray = JSON.parse(myJSONString)
var parsedArrayLength = parsedArray.length;
let cardDetailsArray = []
let cardDetailsResults = []
for (var i = 0; i < parsedArrayLength; i++) {
    cardDetailsArray = parsedArray[i].cards.split(",")
    cardDetailsResults.push(cardDetailsArray.map(firstLetter => firstLetter[0]))
    deck.cardSumCalc(i)
}

util.syncWriteFile("xyz.txt",cardDetailsResults.toString())




