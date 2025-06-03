function getComputerChoice(){
    let a=Math.random()
    
    if(a>0 && a<0.4){
        return "rock";
    }else if(a>=0.4 && a<0.7){
        return "paper";
    }else{
        return "scissor";
    }
    }

function getHumanChoice(){
    let choice=prompt("Enter your choice!");
    choice=choice.toLowerCase();
    return choice;

}


//console.log(getComputerChoice());
//console.log(getHumanChoice())


//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

let humanscore=0;
let computerscore=0;


function playround(humanchoice,computerchoice){
    console.log(humanchoice);
    if(humanchoice===computerchoice){
        humanscore++;
        
        console.log("WOw you won!, Computer chose "+computerchoice+" and you chose "+humanchoice);
    }else{
        computerscore++;
        console.log("L what a sore loser! Computer chose "+computerchoice+" and you chose "+humanchoice);
    }
}



function playGame(){
   
    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playround(humanSelection,computerSelection);
    }

    console.log("You're score is "+humanscore+" and the computer's score is "+computerscore)

    if(humanscore>computerscore){
        console.log("YOU WIN THE GAME!");

    }else{
        console.log("MEH BETTER LUCK NEXT TIME BUDDY");
    }
}

playGame();