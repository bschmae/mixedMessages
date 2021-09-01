function randomNumber(num) {
    return Math.floor(Math.random() * num);
};

const messages = {
    dayInfo: ["wonderful day", "fabulous day", "good day", "great day"],
    kindInfo: ["a beautiful smile", "a great laugh", "a wonderful personality", "very pretty eyes"],
    positiveInfo: ["smart", "funny", "kind", "generous", "strong"]
};

let kindMessage = [];

for (const prop in messages) {
    let randomIndex = randomNumber(messages[prop].length)

    switch(prop) {
    case 'dayInfo': kindMessage.push(`I hope you have a ${messages[prop][randomIndex]}.`);
    break;
    case 'kindInfo': kindMessage.push(`You have ${messages[prop][randomIndex]}.`);
    break;
    case 'positiveInfo': kindMessage.push(`You are ${messages[prop][randomIndex]}.`);
    break;
    }
}

function generateRandomNum() {
    return Math.floor(Math.random() * 3)
}

console.log(kindMessage[generateRandomNum()]);


