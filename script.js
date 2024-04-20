// Opening Ceremony function
function OpeningCeremony(callbackFunc) {
    console.log("Let the games begin");
    setTimeout(() => {
        const scoreObj = { red: 0, blue: 0, green: 0, yellow: 0 };
        callbackFunc(scoreObj, Race100M);
    }, 1000);
}

// Race100M function
function Race100M(scoreObj, callbackFunc) {
    console.log("Race 100M begins!");
    setTimeout(() => {
        const colors = ['red', 'blue', 'green', 'yellow'];
        const times = colors.map(color => Math.floor(Math.random() * 6) + 10); // Random times between 10 to 15 seconds
        const sortedColors = colors.slice().sort((a, b) => times[colors.indexOf(a)] - times[colors.indexOf(b)]);
        
        scoreObj[sortedColors[0]] += 50;
        scoreObj[sortedColors[1]] += 25;

        console.log("Race 100M results:");
        console.log(scoreObj);

        callbackFunc(scoreObj, LongJump);
    }, 3000);
}

// Long Jump function
function LongJump(scoreObj, callbackFunc) {
    console.log("Long Jump event begins!");
    setTimeout(() => {
        const randomColor = ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)];
        scoreObj[randomColor] += 150;

        console.log(`${randomColor} won the Long Jump event!`);
        console.log(scoreObj);

        callbackFunc(scoreObj, HighJump);
    }, 2000);
}

// High Jump function
function HighJump(scoreObj, callbackFunc) {
    console.log("High Jump event begins!");
    setTimeout(() => {
        const userInput = prompt("What color secured the highest jump?");
        if (userInput && scoreObj.hasOwnProperty(userInput.toLowerCase())) {
            scoreObj[userInput.toLowerCase()] += 100;
            console.log(`${userInput} secured the highest jump!`);
            console.log(scoreObj);
        } else {
            console.log("Event was cancelled or invalid input provided.");
        }

        callbackFunc(scoreObj, AwardCeremony);
    }, 1000);
}

// Award Ceremony function
function AwardCeremony(scoreObj) {
    console.log("Award Ceremony begins!");
    console.log(`Final scores:`);
    const sortedScores = Object.entries(scoreObj).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
}

// Starting the Sports Day
OpeningCeremony((scoreObj, nextEventFunction) => {
    nextEventFunction(scoreObj, LongJump);
});
