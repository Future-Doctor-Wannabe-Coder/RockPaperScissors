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




function playerSelection() {

    let selection = prompt("Hello! Select your option: Rock, Paper, or Scissors?");

    selection = selection.toLowerCase();


    if (selection === "rock" || selection === "paper" || selection === "scissors") {
        return selection;
    }

    else {
        console.log("Error. Invalid Response. Enter either Rock, Paper, or Scissors.");
        x = playerSelection();
        return x;
    }
}





function playRound(playerChoice, computerChoice) {

    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("Rock beats scissors! You won this round!");
            return "Rock beats scissors! You won this round!";
        }
        else if (computerChoice === "paper") {
            console.log("Paper beats rock! Computer won this round!");
            return "Paper beats rock! Computer won this round!";
        }
        else {
            console.log("Both selected Rock. This round is a tie.");
            return "Both selected Rock. This round is a tie.";
        }
    }

    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("Scissors beats paper! Computer won this round!");
            return "Scissors beats paper! Computer won this round!";
        }
        else if (computerChoice === "paper") {
            console.log("Both selected paper. This round is a tie.");
            return "Both selected paper. This round is a tie.";
        }
        else {
            console.log("Paper beats rock! You won this round!");
            return "Paper beats rock! You won this round!";
        }
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === "scissors") {
            console.log("Both selected scissors. This round is a tie.");
            return "Both selected scissors. This round is a tie.";
        }
        else if (computerChoice === "paper") {
            console.log("Scissors beats paper! You won this round!");
            return "Scissors beats paper! You won this round!";
        }
        else {
             console.log("Rock beats scissors! Computer won this round!");
             return "Rock beats scissors! Computer won this round!";
        }
    }
}



function game() {

    let comWins = 0;
        let userWins = 0;
        let ties = 0;
        let rounds = 0;

    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection(), computerSelection());
        rounds++;


        if (result == "Rock beats scissors! Computer won this round!" || result == "Scissors beats paper! Computer won this round!" || result == "Paper beats rock! Computer won this round!") {
            comWins++;
            
            if (rounds == 5 && comWins > userWins) {
                console.log("Computer won this game :(");
            }

            else if (rounds == 5 && userWins > comWins) {
                console.log("You won this game :)");
            }

            else if (rounds == 5 && userWins == comWins) {
                console.log("This game was a tie.");
            }
        }

        else if (result == "Scissors beats paper! You won this round!" || result == "Paper beats rock! You won this round!" || result == "Rock beats scissors! You won this round!") {
            userWins++;

            if (rounds == 5 && comWins > userWins) {
                console.log("Computer won this game :(");
            }

            else if (rounds == 5 && userWins > comWins) {
                console.log("You won this game :)");
            }

            else if (rounds == 5 && userWins == comWins) {
                console.log("This game was a tie.");
            }

        }

        else {
            ties++;
          
            if (rounds == 5 && comWins > userWins) {
                console.log("Computer won this game :(");
            }

            else if (rounds == 5 && userWins > comWins) {
                console.log("You won this game :)");
            }

            else if (rounds == 5 && userWins == comWins) {
                console.log("This game was a tie.");
            }
        }
    }

}

game();
