
function getCompChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
        switch (computerChoice) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
}  
}

    
    const scoreBoard = document.createElement("div");
    const finalHScore = document.createElement("p");
    const finalCScore = document.createElement("p");
    const winner = document.createElement("p");

        document.body.appendChild(scoreBoard);
            scoreBoard.appendChild(finalHScore);
            scoreBoard.appendChild(finalCScore);
            scoreBoard.appendChild(winner);    
                finalHScore.id = "hScoreID";
                finalCScore.id = "cScoreID";
                winner.id = "winnerID";


    const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let humanChoice = button.id;
            let computerChoice = getCompChoice();

            playRound(humanChoice, computerChoice);
                while (computerScore === 5 || humanScore === 5){
                    if (computerScore > humanScore) {
                        document.getElementById("winnerID").textContent = "Winner: Computer!"
                        console.log("You lost to a computer!")
                    
                } 
                else if (computerScore < humanScore) {
                    document.getElementById("winnerID").textContent = "Winner: Human!"
                    console.log("You won against a computer!")
                    break
                }
                else if (computerScore === humanScore){
                    document.getElementById("winnerID").textContent = "Winner: Nobody lol"
                    console.log("It's a tie!")
                    break;
                }                
            break;            
            }
        });    
    });
    


let humanScore = 0;
let computerScore = 0;  
document.getElementById("hScoreID").textContent = "Your Score: " + humanScore;
document.getElementById("cScoreID").textContent = "The Computer's Score: " + computerScore;

function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            document.getElementById("hScoreID").textContent = "Draw! Your Score: " + humanScore;
            document.getElementById("cScoreID").textContent = "The Computer's Score: " + computerScore;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++
            document.getElementById("hScoreID").textContent = "Uh oh! Paper beats rock. Your Score: " + humanScore;
            document.getElementById("cScoreID").textContent = "The Computer's Score: " + computerScore;
        
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            humanScore++
            document.getElementById("hScoreID").textContent = "Yay! Rock beats scissors. Your Score: " + humanScore;
            document.getElementById("cScoreID").textContent = "The Computer's Score: " + computerScore;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++
            document.getElementById("hScoreID").textContent = "Yay! Paper beats rock! Your Score: " + humanScore;
            document.getElementById("cScoreID").textContent = "The Computer's Score: " + computerScore;
        
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++
            document.getElementById("hScoreID").textContent = "Uh oh! Scissors beat paper. Your Score: " + humanScore;
            document.getElementById("cScoreID").textContent = "The Computer's Score: " + computerScore;
        
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++
            document.getElementById("hScoreID").textContent = "Yay! Scissors beat paper. Your Score: " + humanScore;
            document.getElementById("cScoreID").textContent = "The Computer's Score: " + computerScore;    
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
         computerScore++
         document.getElementById("hScoreID").textContent = "Uh oh. Rock beats scissors. Your Score: " + humanScore;
        document.getElementById("cScoreID").textContent = "The Computer's Score: " + computerScore;   
        }                
    }
