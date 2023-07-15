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


let comWins = 0;
let userWins = 0;
let ties = 0;

let results = document.querySelector('.results');

let uWins = document.createElement('div');
uWins.classList.add('uWins');
results.appendChild(uWins);

let cWins = document.createElement('div');
cWins.classList.add('cWins');
results.appendChild(cWins);

let roundResult = document.createElement('div');
roundResult.classList.add('roundResult');
results.appendChild(roundResult);

let gameResult = document.createElement('div');
gameResult.classList.add('gameResult');
results.appendChild(gameResult);

function playRound(playerChoice, computerChoice) {


    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            roundResult.textContent = "Rock beats scissors! You won this round!";
            userWins++;
            uWins.textContent = "User Wins: " + userWins.toString();
            cWins.textContent = "Computer Wins: " + comWins.toString();
            gameResult.textContent = "";
            
            if (userWins == 5) {
                gameResult.textContent = "You won this game :)";
                uWins.textContent = "User Wins: " +  userWins.toString();
                cWins.textContent = "Computer Wins: " + comWins.toString();
                comWins = 0;
                userWins = 0;
                ties = 0;
            }
        }
        else if (computerChoice === "paper") {
            roundResult.textContent = "Paper beats rock! Computer won this round.";
            comWins++;
            uWins.textContent = "User Wins: " + userWins.toString();
            cWins.textContent = "Computer Wins: " + comWins.toString();
            gameResult.textContent = "";
            
            if (comWins == 5) {
                gameResult.textContent = "Computer won this game :(";
                uWins.textContent = "User Wins: " + userWins.toString();
                cWins.textContent = "Computer Wins: " + comWins.toString();
                comWins = 0;
                userWins = 0;
                ties = 0;
            }
        }
        else {
            roundResult.textContent = "Both selected Rock. This round is a tie.";
            ties++;
            uWins.textContent = "User Wins: " + userWins.toString();
            cWins.textContent = "Computer Wins: " + comWins.toString();
            gameResult.textContent = "";
        }
    }

    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            roundResult.textContent = "Scissor beats paper! Computer won this round!";
            comWins++;
            uWins.textContent = "User Wins: " + userWins.toString();
            cWins.textContent = "Computer Wins: " + comWins.toString();
            gameResult.textContent = "";
            
            if (comWins == 5) {
                gameResult.textContent = "Computer won this game :(";
                uWins.textContent = "User Wins: " + userWins.toString();
                cWins.textContent = "Computer Wins: " + comWins.toString();
                comWins = 0;
                userWins = 0;
                ties = 0;
            }
        }
        else if (computerChoice === "paper") {
            roundResult.textContent = "Both selected paper. This round is a tie.";
            ties++;
            uWins.textContent = "User Wins: " + userWins.toString();
            cWins.textContent = "Computer Wins: " + comWins.toString();
            gameResult.textContent = "";
        }
        else {
            roundResult.textContent = "Paper beats rock! You won this round!";
            userWins++;
            uWins.textContent = "User Wins: " + userWins.toString();
            cWins.textContent = "Computer Wins: " + comWins.toString();
            gameResult.textContent = "";
            if (userWins == 5) {
                gameResult.textContent = "You won this game :)";
                uWins.textContent = "User Wins: " + userWins.toString();
                cWins.textContent = "Computer Wins: " + comWins.toString();
                comWins = 0;
                userWins = 0;
                ties = 0;
            }
        }
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === "scissors") {
            roundResult.textContent = "Both selected scissors. This round is a tie.";
            ties++;
            uWins.textContent = "User Wins: " + userWins.toString();
            cWins.textContent = "Computer Wins: " + comWins.toString();
            gameResult.textContent = "";
        }
        else if (computerChoice === "paper") {
            roundResult.textContent = "Scissors beats paper! You won this round!";
            userWins++;
            uWins.textContent = "User Wins: " + userWins.toString();
            cWins.textContent = "Computer Wins: " + comWins.toString();
            gameResult.textContent = "";
            if (userWins == 5) {
                gameResult.textContent = "You won this game :)";
                uWins.textContent = "User Wins: " + userWins.toString();
                cWins.textContent = "Computer Wins: " + comWins.toString();
                comWins = 0;
                userWins = 0;
                ties = 0;
            }
        }
        else {
             comWins++;
             uWins.textContent = "User Wins: " + userWins.toString();
             cWins.textContent = "Computer Wins: " + comWins.toString();
             roundResult.textContent = "Rock beats scissors! Computer won this round!";
             gameResult.textContent = "";

             if (comWins == 5) {
                gameResult.textContent = "Computer won this game :(";
                uWins.textContent = "User Wins: " + userWins.toString();
                cWins.textContent = "Computer Wins: " + comWins.toString();
                comWins = 0;
                userWins = 0;
                ties = 0;
            }
        }
    }
}

let selection; 

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    selection = "rock";
    playRound(selection, computerSelection());
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    selection = "paper";
    playRound(selection, computerSelection());
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    selection = "scissors";
    playRound(selection, computerSelection());
});







