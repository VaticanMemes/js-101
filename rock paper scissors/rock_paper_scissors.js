const options = ["rock", "paper", "scissors"];
let wins = 0;
let draws = 0;
let loses = 0;

while (true) {
    const enemy = Math.floor(Math.random() * 3);
    console.log("JavaScript rock paper scissors!!!");
    const move = prompt("Rock, paper, or scissors? Or 'q' to quit. ").toLowerCase();

    if (move === "q") {
        console.log("You won " + wins + " times.");
        console.log("You drew " + draws + " times.");
        console.log("You lost " + loses + " times.");
        break;
    } else if (!options.includes(move)) {
        console.log("Please learn to follow instructions.");
        continue;
    } else {
        const randnum = Math.floor(Math.random() * 3);
        const enemy = options[randnum];
        console.log("Your worst enemy picked " + enemy + ".");

        if (move === "rock" && enemy === "scissors") {
            wins += 1;
            console.log("Good job. You have won " + wins + " times.");
            continue;
        }
        if (move === "scissors" && enemy === "paper") {
            wins += 1;
            console.log("Good job. You have won " + wins + " times.");
            continue;
        }
        if (move === "paper" && enemy === "rock") {
            wins += 1;
            console.log("Good job. You have won " + wins + " times.");
            continue;
        }
        if (move === enemy) {
            draws += 1;
            console.log("You drew. You have drawn " + draws + " times.");
            continue;
        } else {
            loses += 1;
            console.log("You lost son. You have lost " + loses + " times.");
            continue;
        }
    }
}
