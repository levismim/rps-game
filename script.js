//  return random integer from computer
function getCompChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
//convert random integer into strings
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
}  
}
console.log(getCompChoice());
//  get user's choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    console.log(humanChoice)
}
//  create and initialize variables for scores in global scope
let humanScore = 0;
let computerScore = 0;
//  play round using computer's choice and user's choice as arguments (make case insensitive)
function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log("Tie!")
        }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Rock beats paper!")
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors!")
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!")
    }
     else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper!")
     }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper!")
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose!")
    }                
    }
    const humanChoice = getHumanChoice();
    const computerChoice = getCompChoice(); 
playRound(humanChoice, computerChoice)

//  output string value representing winner
// increment each score variable based on winner