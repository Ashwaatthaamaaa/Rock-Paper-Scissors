
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result = document.querySelector('#result');
let playerCount=0;
let computerCount=0;
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
            return "Scissor".toLowerCase();
            break;
    }
}


//function to facilitate the game of rock_paper_scissors
function playRound(playerSelection){ 
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection){ 
        return "TIE!!!";
    }
    else if (playerSelection === "rock"){
        if (computerSelection==="paper") return `You Lose! ${computerSelection} Beats ${playerSelection}`;
        else if(computerSelection==="scissor") return `You Win! ${playerSelection} ats ${computerSelection}`;
    }
    else if (playerSelection === "paper"){
        if (computerSelection==="scissor") return `You Lose! ${computerSelection} Beats ${playerSelection}`;
        else if(computerSelection==="rock") return `You Win! ${playerSelection} ats ${computerSelection}`;
    }
    else if (playerSelection === "scissor"){
        if (computerSelection==="rock") return `You Lose! ${computerSelection} Beats ${playerSelection}`;
        else if(computerSelection==="paper") return `You Win! ${playerSelection} ats ${computerSelection}`;
    }
}

//to play
function playGame(playerSelection){
    console.log(playerSelection);
    let outcome=playRound(playerSelection);
    console.log(outcome);
    if (outcome.includes("Win!")) playerCount++;
    else if (outcome.includes("TIE!!!")) ;
    else computerCount++;
    result.innerText += outcome +`${playerCount} - ${computerCount}`+ "\n";
    if(playerCount==5 || computerCount == 5){
        if(playerCount>computerCount) result.innerText +=  'Winner is Player';
        else result.innerText +=  'Winner is Computer';
        rock.disabled = true;
        paper.disabled=true;
        scissor.disabled=true;

            }
    
}


function resetCountsAndText(event) {
    result.innerText = '';
    playerCount = computerCount = 0;
    rock.disabled = false;
    paper.disabled=false;
    scissor.disabled=false;

}


let choice = document.querySelector("#choice");

choice.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            console.log('rock');
            playGame('rock');
            break;
        case 'paper':
            playGame('paper');
            break;
        case 'scissor':
            playGame('scissor');
            break;
        case "reset":
            resetCountsAndText();
            break;
    }
});






