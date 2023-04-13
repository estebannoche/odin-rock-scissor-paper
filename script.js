//WINNING LOGIC: Rock beats scissors, scissors beat paper, and paper beats rock

//create logic for possible combinations
//-- win = scissors > paper , rock > scissors , paper > rock
//-- lose = scissors < rock , rock < paper , paper < scissors
//-- tie = scissors = scissors , rock = rock , paper = paper

//create array for computer random choice of [rock, paper, scissors]
 //-- https://www.programiz.com/javascript/examples/get-random-item
 //-- updated array values, renamed arr to array, and updated const name that is returned 
function getComputerChoice(array) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);
    array.length = 3;

    // get random item
    const randomComputerChoiceitem = array[randomIndex];

    return randomComputerChoiceitem;
}

const array = ['rock', 'paper', 'scissors'];

const result = getComputerChoice(array);
console.log(result);


//input ability - create for player

//input ability - create for computer

//submit input - playerSelection parameter submitted
//--evalutate for valid input

//submit input - computerSelection parameter submitted

//evaluate inputs against each other

//return evaluation of win, lose, or tie

//----------------------------------------------------------------------------

//record evaluation result, choice played by each participant, and round count 
//-- increment round count by 1 only if a win or loss is the outcome
//-- do not increment if a tie is the result
//--game consists of 5 rounds
//-- round is defined as an outcome of win or lose by a player
//-- tie does not count as a round

// player with 3 or more wins out of 5 is winner of a game

//player outcome published
// -- single round examples: "You Lose! Paper beats Rock" or "You Win! Rock beats Scissors"
// -- game examples: "You Win! You won {X}/5 rounds!" or "You Lost! You only won {X}/5 rounds!"


//functions to create:
//-- playRound - to allow player/computer selections
//-- getComputerChoice - return random value of Rock, Paper, or Scissors
//-- playerSelection - choice submitted by player
//-- computerSelection - random computer choice from array
//-- game() - to play a 5 round game that keeps score and reports a winner or loser at the end
//-- prompt() - to get input from user


//base case - player inputand computer submit choices and it is evaluated and an outcome is returned



  function playRound(playerChoice, computerChoice) {
    // Make the playerSelection lowercase for comparison
    playerChoice = playerChoice.toLowerCase();
    
    // Declare possible outcomes as objects
    const outcomes = {
      rock: {win: "scissors", lose: "paper"},
      paper: {win: "rock", lose: "scissors"},
      scissors: {win: "paper", lose: "rock"}
    };
    
    // Check if player and computer selections are the same
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
    
    // Check if player wins
    if (outcomes[playerChoice].win === computerChoice) {
      return `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`;
    }
    
    // Player loses by default
    return `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}`;
  }
  
  // Example usage:
  const playerChoice = "rock";
  const computerChoice = getComputerChoice(array);
  console.log(playRound(playerChoice, computerChoice)); // Outputs "You Lose! Paper beats rock" or similar depending on choice



------------------------------------------------------------------------------------------------------------------

//working console testing code

function getComputerChoice(array) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);
    array.length = 3;

    // get random item
    const randomComputerChoiceitem = array[randomIndex];

    return randomComputerChoiceitem;
}

const array = ['rock', 'paper', 'scissors'];

const result = getComputerChoice(array);
console.log(result);


function playRound(playerChoice, computerChoice) {
    // Make the playerSelection lowercase for comparison
    playerChoice = playerChoice.toLowerCase();
    
    // Declare possible outcomes as objects
    const outcomes = {
      rock: {win: "scissors", lose: "paper"},
      paper: {win: "rock", lose: "scissors"},
      scissors: {win: "paper", lose: "rock"}
    };
    
    // Check if player and computer selections are the same
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
    
    // Check if player wins
    if (outcomes[playerChoice].win === computerChoice) {
      return `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`;
    }
    
    // Player loses by default
    return `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}`;
  }
  
  // Example usage:
  const playerChoice = "rock";
  const computerChoice = result;
  console.log(playRound(playerChoice, computerChoice)); 


  