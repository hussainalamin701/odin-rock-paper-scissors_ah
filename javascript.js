// const playerSelection = [
//     "Rock",
//     "Paper",
//     "Scissors"
// ];

// const computerSelection = [
//     "Rock",
//     "Paper",
//     "Scissors"
// ];

// let playerScore = document.getElementById("#playerScore");
// let playerScoreVal = 0;

// let computerScore = document.getElementById("#computerScore");
// let computerScoreVal = 0;

// function compare(selectionOne, selectionTwo){
//     if(
//         selectionOne == "Paper" && selectionTwo == "Rock" ||
//         selectionOne == "Scissors" && selectionTwo == "Paper" ||
//         selectionOne == "Rock" && selectionTwo == "Scissors"
//         )
//         {

//         playerScoreVal++;
//         console.log("P1 Wins");
//     }else if(
//         selectionOne == "Paper" && selectionTwo == "Paper" ||
//         selectionOne == "Scissors" && selectionTwo == "Scissors" ||
//         selectionOne == "Rock" && selectionTwo == "Rock"
//         )
//         {

//         computerScoreVal++;
//         console.log("Tie");
//     }else{

//         console.log("P2 Wins");
//     }
   
// }

const paperBttn = document.getElementById("paper-button");
const scissorBttn = document.getElementById("scissor-button");
const rockBttn = document.getElementById("rock-button");

function buttonR(){
    document.getElementById("player-choice").innerHTML = "Player Choice : Rock"
}

function buttonP(){
    document.getElementById("player-choice").innerHTML = "Player Choice : Paper"
}

function buttonSc(){
    document.getElementById("player-choice").innerHTML = "Player Choice : Scissor"
}


rockBttn.addEventListener("click",buttonR);
paperBttn.addEventListener("click",buttonP);
scissorBttn.addEventListener("click",buttonSc);
