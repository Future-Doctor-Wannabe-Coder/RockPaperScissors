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

const computerChoice = computerSelection();

console.log(computerChoice);

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

const playerChoice = playerSelection();

console.log(playerChoice);

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            return "You won this round!";
        }
        else if (computerChoice === "paper") {
            return "Computer won this round!";
        }
        else {
            return "This round is a tie."
        }
    }

    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer won this round!";
        }
        else if (computerChoice === "paper") {
            return "This round is a tie.";
        }
        else {
            return "You won this round!"
        }
    }

    else if (playerChoice=== "scissors") {
        if (computerChoice === "scissors") {
            return "This round is a tie.";
        }
        else if (computerChoice === "paper") {
            return "You won this round!";
        }
        else {
            return "Computer won this round!"
        }
    }
}

console.log(playRound(playerChoice, computerChoice));

