//function to get computer's choice
function getComputerChoice(){
    //using random function to get its choice
    let compChoice =  Math.floor(Math.random() * 3);

    switch(compChoice){
        case 0:
            return "Rock".toLowerCase();
            break;
        case 1:
            return "Paper".toLowerCase();
            break;
        case 2:
            return "Scissors".toLowerCase();
            break;
    }
}




//function to get player's choice
function getPlayerChoice(){
    const playerSelection = prompt("Your Choice","");
    return (playerSelection.toLowerCase());
} 




//console.log(playerSelection);
//console.log(computerSelection);

//function to facilitate the game of rock_paper_scissors
function playRound(){ 
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection){ 
        return "TIE!!!";
    }
    else if (playerSelection === "rock"){
        if (computerSelection==="paper") return `You Lose! ${computerSelection} Beats ${playerSelection}`;
        else if(computerSelection==="scissors") return `You Win! ${playerSelection} ats ${computerSelection}`;
    }
    else if (playerSelection === "paper"){
        if (computerSelection==="scissors") return `You Lose! ${computerSelection} Beats ${playerSelection}`;
        else if(computerSelection==="rock") return `You Win! ${playerSelection} ats ${computerSelection}`;
    }
    else if (playerSelection === "scissors"){
        if (computerSelection==="rock") return `You Lose! ${computerSelection} Beats ${playerSelection}`;
        else if(computerSelection==="paper") return `You Win! ${playerSelection} ats ${computerSelection}`;
    }
}

//to play
function playGame(){
    let count=0;
    for(let i=0;i<5;i++){
        let result=playRound();
        console.log(result);
        if (result.includes("Win!")) count++;
    }
    if (count===3) return "Winner is Player";
    else{ return "Winner is Computer";}
}

console.log(playGame());