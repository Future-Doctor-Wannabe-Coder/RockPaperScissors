function computerSelection() {
    const selection = Math.random();

    if (selection <= 0.33 ) { 
        return "Rock";
    }

    else if (selection <= 0.67) {
        return "Paper";
    }

    else {
        return "Scissors"
    }
}

console.log(computerSelection());

function playerSelection() {

    let selection = prompt("Hello! Select your option: Rock, Paper, or Scissors?");

    if (selection === "Rock" || selection === "Paper" || selection === "Scissors") {
        return selection;
    }

    else {
        console.log("Error. Invalid Response. Enter either Rock, Paper, or Scissors.")
    }
}

console.log(playerSelection());
