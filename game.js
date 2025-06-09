let humanScore=0;
let computerScore=0;


const rockButton=document.getElementById("rock");
const paperButton=document.getElementById("paper");
const scissorsButton=document.getElementById("scissors");

const humanScoreDisplay=document.getElementById("humanScore");
const computerScoreDisplay=document.getElementById("computerScore");
const resultDisplay=document.getElementById("result-display");

function getComputerChoice(){
    let randomNumber=Math.random();
    if(randomNumber>=0&&randomNumber<1/3){
        return "rock";
    }else if(randomNumber>=1/3&&randomNumber<2/3){
        return "paper";
    }else{
        return "scissors";
    }
}


function playRound(humanChoice){
    if(humanScore>=5||computerScore>=5){
        displayresult("Game Over! Please refresh the page to play again!")
        rockButton.disabled=true;
        paperButton.disabled=true;
        scissorsButton.disabled=true;
        return;


    }

    const computerChoice=getComputerChoice();

    humanChoice=humanChoice.toLowerCase();

    let roundResult="";

    if(humanChoice===computerChoice){
        roundResult=`It's a tie! you both chose ${humanChoice}.`;

    }else if(
        (humanChoice==="rock"&&computerChoice==="scissors")||
        (humanChoice==="paper"&&computerChoice==="rock")||
        (humanChoice==="scissors"&&computerChoice==="paper")
    ){
        humanScore++;
        roundResult=`You win! ${humanChoice} beats ${computerChoice}`;
    }else{
        computerScore++;
        roundResult=`You lose! ${computerChoice} beats ${humanChoice}`;
    
    }

    displayresult(roundResult);
    updateScoresDisplay();
    checkGameWinner();


}

function updateScoresDisplay(){
    humanScoreDisplay.textContent=humanScore;
    computerScoreDisplay.textContent=computerScore;
}

function displayresult(message){
    resultDisplay.textContent=message;
}

function checkGameWinner(){
    if(humanScore===5){
        displayresult(`YAY you win the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
        disablegamebuttons();
    }else if(computerScore===5){
        displayresult(`Uh-oh you lost! better luck next time! Final Score: Human ${humanScore} - Computer ${computerScore}`)
        disablegamebuttons();
    }
}

function disablegamebuttons(){
    rockButton.disabled=true;
    paperButton.disabled=true;
    scissorsButton.disabled=true;

}

rockButton.addEventListener("click",()=>playRound("rock"));
paperButton.addEventListener("click",()=>playRound("paper"));
scissorsButton.addEventListener("click",()=>playRound("scissors"));

updateScoresDisplay();
    
    




