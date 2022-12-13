let startBtn = document.querySelector('.start-btn');
let gameScreen = document.querySelector('.game-screen');
let menu = document.querySelector('.choices')
let choices = Array.from(document.querySelectorAll('.choices'));
let playerChoice = document.querySelector('.player-pick');
let playerScore = document.querySelector(".player-score");
let computerDisplay = document.querySelector('.computer-pick');
let playerCount = 0;
let computerCount = 0;


function startGame(){
    console.log(startBtn.innerText);
    if (startBtn.innerText == "RESET"){
        startBtn.innerText = "START";
        gameScreen.style.display = 'none';
        menu.style.display = 'none';
        playerCount = 0;
        computerCount = 0;
        playerScore.innerText = `Player: ${playerCount} || Computer: ${computerCount}`;
        computerDisplay.innerText = '';
        playerChoice.innerText = '';
    } else if (startBtn.innerText == "START"){
        gameScreen.style.display = 'flex';
        menu.style.display = 'flex';
        startBtn.innerText = "RESET";
    }
}

function showPlayerChoice(e){
    playerChoice.innerText = `${e.target.className}`;
    let computer = showComputerChoice();
    winCheck(e.target.className, computer);
    updateCount()
    checkWinner()
}

function showComputerChoice(){
    let computerPick = getRandomInt(3);
    console.log(computerPick);

    if (computerPick == 0){
        computerDisplay.innerText = "paper";
        return "paper";
    } else if (computerPick == 1){
        computerDisplay.innerText = "scissors";
        return "scissors";
    } else {
        computerDisplay.innerText = "rock";
        return "rock";
    }

    
} 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



function winCheck(player, computer){
    if (player == "scissors" && computer == "rock"){
        computerCount += 1;
    } else if (player == "paper" && computer == "scissors"){
        computerCount += 1;
    } else if (player == "rock" && computer == "scissors"){
        computerCount += 1;
    } else if (player == computer){
        // Do nothing
    } else {
        playerCount += 1;
    }
}


function updateCount(){
    playerScore.innerText = `Player: ${playerCount} || Computer: ${computerCount}`;
    
}

function checkWinner(){
    if (playerCount == 3){
        menu.style.display = '';
        playerScore.innerText = "YOU WON!! PRESS RESET TO PLAY AGAIN"
    } else if (computerCount == 3){
        menu.style.display = '';
        playerScore.innerText = "YOU LOST!! PRESS RESET TO PLAY AGAIN"
    }
}


startBtn.addEventListener('click', startGame);
choices.forEach(choice => choice.addEventListener('click', showPlayerChoice));

