function computerSelection() {
    const selection = Math.random();

    if (selection <= 0.33 ) { 
        return "rock";
    }

    else if (selection <= 0.67) {
        return "paper";
    }

    else {
        return "scissors"
    }
}

console.log(computerSelection());

function playerSelection() {

    let selection = prompt("Hello! Select your option: Rock, Paper, or Scissors?");

    selection = selection.toLowerCase();


    if (selection === "rock" || selection === "paper" || selection === "scissors") {
        return selection;
    }

    else {
        console.log("Error. Invalid Response. Enter either Rock, Paper, or Scissors.")
    }
}

console.log(playerSelection());
