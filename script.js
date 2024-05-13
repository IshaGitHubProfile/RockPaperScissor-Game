//rock paper scissor
const buttons = document.querySelectorAll('.btn');
const yourMove = document.getElementById("your");
const computerMove = document.getElementById("computer");
const winButton = document.getElementById('win');

const choices = ['rock','paper','scissor'];
function computerPlay() {
    let num = Math.floor(Math.random()*3);
    return choices[num];
}
function play(playerChoice,computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    yourMove.textContent = `Your Move: ${playerChoice}`;
    computerMove.textContent = `Computer's Move : ${computerChoice}`;
    if(playerChoice===computerChoice) {
        winButton.innerText = `It's a tie`;
        return "It's a tie";
    }
    else if(
        (playerChoice==='rock' && computerChoice==='scissor') || (playerChoice==='paper' && computerChoice==='rock') || (playerChoice==='scissor' && computerChoice==='paper') 
    ) {
        winButton.innerText = 'You Won The Game';
        return `You wins ${playerChoice} beats ${computerChoice}`;
    }
    else {
        winButton.innerText = 'You lose the Game';
        return `You lose ${computerChoice} beats ${playerChoice}`;
    }
}

function game(playerChoice) {
    const computerChoice = computerPlay();
    console.log(play(playerChoice,computerChoice));
}
buttons.forEach((btn) => {
    btn.addEventListener('click',() => {
        const playerChoice = btn.id;
        game(playerChoice);
    })
})