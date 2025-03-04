// Code your solutions in this file
function writeCards(myNames, event) {
    let newMyNames = [];
    for (let i = 0; i<myNames.length; i++) {
        newMyNames.push(`Thank you, ${myNames[i]}, for the wonderful ${event} gift!`);
    }
    return newMyNames;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    } 
}

countDown(12);