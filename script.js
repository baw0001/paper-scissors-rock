let startBtn = document.querySelector('.start-btn');
let gameScreen = document.querySelector('.game-screen');
let menu = document.querySelector('.choices')
let choices = Array.from(document.querySelectorAll('.choices'));
let playerChoice = document.querySelector('.player-pick');
let playerCount = 0;
let computerCount = 0;


function startGame(){
    console.log(startBtn.innerText);
    if (startBtn.innerText == "RESET"){
        startBtn.innerText = "START";
        gameScreen.style.display = 'none';
        menu.style.display = 'none';
    } else if (startBtn.innerText == "START"){
        gameScreen.style.display = 'flex';
        menu.style.display = 'flex';
        startBtn.innerText = "RESET";
    }
}

function showPlayerChoice(e){
    playerChoice.innerText = `${e.target.className}`;
    showComputerChoice();
    updateCount()
}

function showComputerChoice(){
    let computerDisplay = document.querySelector('.computer-pick');
    let computerPick = getRandomInt(3);
    console.log(computerPick);

    if (computerPick == 0){
        computerDisplay.innerText = "paper";
    } else if (computerPick == 1){
        computerDisplay.innerText = "scissors";
    } else {
        computerDisplay.innerText = "rock";
    }
} 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function updateCount(){
    
}
startBtn.addEventListener('click', startGame);
choices.forEach(choice => choice.addEventListener('click', showPlayerChoice));

