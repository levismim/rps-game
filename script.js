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
//  get user's choice

let buttons = document.getElementById("buttons")
    let rock = document.createElement("button")
    let paper = document.createElement("button")
    let scissors = document.createElement("button")
    buttons.appendChild(rock)
    buttons.appendChild(paper)
    buttons.appendChild(scissors)
    

//  create and initialize variables for scores in global scope
let humanScore = 0;
let computerScore = 0;  
//  play round using computer's choice and user's choice as arguments (make case insensitive)
function playRound() {
const humanChoice = getHumanChoice()
const computerChoice = getCompChoice()
  
if (humanChoice == computerChoice) {
        console.log("DRAW!")
        }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock!")
        computerScore++
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors!")
        humanScore++
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!")
        humanScore++
    }
     else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper!")
        computerScore++
     }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper!")
        humanScore++
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose!")
        computerScore++
    }                
    console.log(humanScore, computerScore)
}

function playGame() {
    if (computerScore > humanScore) {
        console.log("You lost to a computer!")
} 
    else if (computerScore < humanScore) {
        console.log("You won against a computer!")
}
    else if (computerScore === humanScore){
        console.log("It's a tie!")
}
    

}

//  output string value representing winner
// increment each score variable based on winner