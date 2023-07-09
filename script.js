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
        console.log("Error. Invalid Response. Enter either Rock, Paper, or Scissors.")
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
        console.log(result);
        rounds++;


        if (result == "Rock beats scissors! Computer won this round!" || result == "Scissors beats paper! Computer won this round!" || result == "Paper beats rock! Computer won this round!") {
            comWins++;
            console.log(rounds);
            console.log(comWins);
            console.log(userWins);
            console.log(ties);




            
        }

        else if (result == "Scissors beats paper! You won this round!" || result == "Paper beats rock! You won this round!" || result == "Rock beats scissors! You won this round!") {
            userWins++;
            console.log(rounds);
            console.log(comWins);
            console.log(userWins);
            console.log(ties);

        }

        else {
            ties++;
            console.log(rounds);
            console.log(comWins);
            console.log(userWins);
            console.log(ties);
        }
    }

}

game();

//So, everything is working except for the game function. Whenever we attempt to get a result
//from a round using if/else statements or a for loop, the iteration only occurs within that
//local scope, so things like UserWins or ComWins don't change once the loop is finished. This
//effectively results in every game being a tie. We also can't put the if/else statement within
//the other statments because then every round would return a game result. I really can't figure
//out how to get around this.