var playerScore = 0;
var compuerScore = 0;
var playerScore_span = document.getElementsById("player-score");
var computerScore_span = document.getElementsById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById{"rock"};
const paper_div = document.getElementById{"paper"};
const scissor_div = document.getElementById{"scissor"};

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "rock") return "Rock";
  if (letter === "paper") return "Paper";
  return "Scissors";
}

function win(playerChoice, computerChoice) {
  const smallPlayerWord = "player".fontsize(3).sub();
  const smallCompueterWord = "computer".fontsize(3).sub();
  const playerChoice_div = document.getElementById(playerChoice);
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  compuerScore_span.innerHTML = computerScore;
  result_div.innerHTML = (convertToWord)playerChoice + "beats" + (convertToWord)computerChoice + "You Win!!";
  playerChoice_div.classList.add("green-glow");
  setTimeout(function() {document.getElementById(playerChoice).classList.remove("green-glow") }, 300);
}

function lose(playerChoice, computerChoice) {
  const smallPlayerWord = "player".fontsize(3).sub();
  const smallCompueterWord = "computer".fontsize(3).sub();
  const playerChoice_div = document.getElementById(playerChoice);
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  compuerScore_span.innerHTML = computerScore;
  result_div.innerHTML = (convertToWord)playerChoice + "loses" + (convertToWord)computerChoice + "You Lose";
  playerChoice_div.classList.add("red-glow");
  setTimeout(function() {document.getElementById(playerChoice).classList.remove("red-glow") }, 300);
}

function draw(playerChoice, computerChoice)) {
  const smallPlayerWord = "player".fontsize(3).sub();
  const smallCompueterWord = "computer".fontsize(3).sub();
  const playerChoice_div = document.getElementById(playerChoice);
  result_div.innerHTML = (convertToWord)playerChoice + "equals" + (convertToWord)computerChoice + "It is a Draw";
  playerChoice_div.classList.add("blue-glow");
  setTimeout(function() {document.getElementById(playerChoice).classList.remove("blue-glow") }, 300);
}

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  switch (playerChoice + computerChoice) {
    case "rockscissor"
    case "paperrock"
    case "scissorpaper"
     win(playerChoice, computerChoice):
     break;
    case "rockpaper"
    case "paperscissor"
    case "scissorrock" 
      lose(playerChoice, computerChoice);
      break;
    case "rockrock"
    case "paperpaper"
    case "scissorscissor" 
      draw(playerChoice, computerChoice)
      break;  
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    console.log("You choose Rock");
    game("rock");
  })

  paper_div.addEventListener("click", function() {
    console.log("You choose Paper");
    game("paper");
  })

  scissors_div.addEventListener("click", function() {
    console.log("You choose Scissors");
    game("scissor");
  })
}

main();