var humanScore;
var computerScore;
humanScore = 0;
computerScore = 0;

function getComputerChoice(){
    var randNum = Math.random()
    if (randNum <= 0.33){
        return ("paper");
    }
    else if (randNum <= 0.66){
        return ("rock");
    }else{
        return ("scissors");
    }
}

function getHumanChoice(){
    var userInput = prompt("Paper-Rock-Scissors: ").toLowerCase();
    return userInput
}





function playRound(computerChoice, humanChoice){
if (computerChoice == humanChoice){
   console.log("Tied!")
}
else if ((computerChoice === "rock" && humanChoice === "scissors") ||
 (computerChoice === "scissors" && humanChoice ==="paper")||
computerChoice === "rock" && humanChoice === "paper"){
    console.log("You lost "+computerChoice+" beats "+humanChoice);
    computerScore += 1;
    

}else{
    console.log("You win "+humanChoice+" beats "+computerChoice)
    humanScore += 1 
    
}
}

function playGame(){
    var computerChoice = getComputerChoice();
    var humanChoice = getHumanChoice();

    playRound(computerChoice, humanChoice)
}


for (i = 1; i <= 5;i++ ){
    playGame()
}

if(humanScore > computerScore){
    console.log("You've won "+humanScore+" to "+computerScore)
}else{
    console.log("You've lost "+humanScore+" to "+computerScore)

}
//playGame()