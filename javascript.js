const playerSelection = [
    "Rock",
    "Paper",
    "Scissors"
];

const computerSelection = [
    "Rock",
    "Paper",
    "Scissors"
];

let playerScore = document.getElementById("#playerScore");
let playerScoreVal = 0;

let computerScore = document.getElementById("#computerScore");
let computerScoreVal = 0;

function compare(selectionOne, selectionTwo){
    if(
        selectionOne == "Paper" && selectionTwo == "Rock" ||
        selectionOne == "Scissors" && selectionTwo == "Paper" ||
        selectionOne == "Rock" && selectionTwo == "Scissors"
        )
        {

        playerScoreVal++;
        console.log("P1 Wins");
    }else if(
        selectionOne == "Paper" && selectionTwo == "Paper" ||
        selectionOne == "Scissors" && selectionTwo == "Scissors" ||
        selectionOne == "Rock" && selectionTwo == "Rock"
        )
        {

        computerScoreVal++;
        console.log("Tie");
    }else{

        console.log("P2 Wins");
    }
   
}

function game(){
    
}