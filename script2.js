function getCompChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            console.log("rock")
            return "rock";
            
        case 1:
            console.log("paper")
            return "paper"
        case 2:
            console.log("scissors")
            return "scissors";
}  
}
getCompChoice()