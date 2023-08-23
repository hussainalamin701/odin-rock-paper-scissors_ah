const playerScorePara = document.getElementById("playerScore");
let playerScoreVal = 0;
const computerScorePara = document.getElementById("computerScore");
let computerScoreVal = 0;

const scissorBtn = document.getElementById("Scissor");
const paperBtn = document.getElementById("Paper");
const rockBtn = document.getElementById("Rock");

const player_icon = document.getElementById("player-icon");
const player_choice = document.getElementById("player-choice");
const computer_icon = document.getElementById("computer-icon");
const computer_choice = document.getElementById("computer-choice");


const buttons = document.querySelectorAll(".btn");

let winOrLose = '';

let computerSelection = ['Rock','Paper','Scissor'];

let temp_comp_choice = '';
let temp_play_choice = '';
// Make the computers choice of value

playerScorePara.innerHTML = `Player Score : ${playerScoreVal}`;
computerScorePara.innerHTML = `Computer Score : ${computerScoreVal}`;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay(computerChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if(choiceNum === 0){
        computerChoice = 'Rock';
    }else if(choiceNum === 1){
        computerChoice = 'Paper';
    }else if(choiceNum === 2){
        computerChoice = 'Scissor';
    }
    return computerChoice;
}

function checkWinner(){
    if(playerScoreVal === 5 || computerScoreVal === 5){
        console.log("Won Overall");
    }
}

function compare(playerSelection, computerSelection){
    if(
        (playerSelection == "Rock" && computerSelection == "Scissor") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissor" && computerSelection == "Paper")
        ){
        document.getElementById("win-lose-text").innerHTML = "Player Wins";
        playerScoreVal++;
        
        playerScorePara.innerHTML = `Player Score : ${playerScoreVal}`;
    }else if(playerSelection === computerSelection){
        document.getElementById("win-lose-text").innerHTML = "Tie";
        console.log("Tie");
    }
    else{
        document.getElementById("win-lose-text").innerHTML = "Computer Wins";
        computerScoreVal++;
        computerScorePara.innerHTML = `Computer Score : ${computerScoreVal}`;
    }
}

function buttonRock(){
    let abx = computerPlay(temp_comp_choice);
    document.getElementById("computer-choice").innerHTML = `Computer Chose : ${abx}`;
    temp_play_choice = document.getElementById("Rock").id;
    document.getElementById("player-choice").innerHTML = `Player Chose : ${temp_play_choice}`

    compare(temp_play_choice, abx);

}

function buttonPaper(){
    let abx = computerPlay(temp_comp_choice);
    document.getElementById("computer-choice").innerHTML = `Computer Chose : ${computerPlay(temp_comp_choice)}`;
    temp_play_choice = document.getElementById("Paper").id;
    document.getElementById("player-choice").innerHTML = `Player Chose : ${temp_play_choice}`
   
    compare(temp_play_choice, abx);
}

function buttonScissor(){
    let abx = computerPlay(temp_comp_choice);
    
    document.getElementById("computer-choice").innerHTML = `Computer Chose : ${abx}`;
    temp_play_choice = document.getElementById("Scissor").id;
    document.getElementById("player-choice").innerHTML = `Player Chose : ${temp_play_choice}`

    compare(temp_play_choice, abx);
}

function updateText(){

}

function playRound(){
    
}

rockBtn.addEventListener("click", buttonRock);
paperBtn.addEventListener("click", buttonPaper);
scissorBtn.addEventListener("click", buttonScissor);