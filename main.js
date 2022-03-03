const userName = "Kristina";
let userInput = prompt(" ");

const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("ERROR");
  }
};

const getComputerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return "win";
  } else {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer won!";
      } else {
        return `Congrats ${userName}, you won!`;
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer won!";
      } else {
        return `Congrats ${userName}, you won!`;
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer won!";
      } else {
        return `Congrats ${userName}, you won!`;
      }
    }
  }
};

const playGame = function () {
  const userChoice = getUserChoice(userInput);
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
