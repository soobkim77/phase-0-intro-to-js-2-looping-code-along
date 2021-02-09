// Code your solutions in this file
const name = ["Lisa", "Kaitlin", "Jan"]

function writeCards(name, event) {
    let cards = [];
    event = 'write' ;
    for (let n = 0; n < name.length; n++) {
        cards[n] = (`Thank you, ${name[n]}, for the wonderful surprise gift!`);
        debugger;
    }

    return cards;
}

let number = 5
function countDown(number) {
    while (number >=0) {
        console.log(number--);
    }
}