/* This pen was heavily influenced by codecademy's 'Rock, Paper, Scissors' project (https://bit.ly/1gEyvZE). The goal is to complete the codecademy project and modify the code you create to use the provided interface. */
import { rules } from './rules/index.js';

function computersTurn() {
  // Gives a random number between 0 and 1 which we will use to figure out the computer's choice
  const random = Math.random();

  // Figure out the computer's choice from the random number we generated
  if (random < 0.34) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

export function compare(yourChoice) {
  // Declare the variables
  const computerChoice = computersTurn();

  if (yourChoice === computerChoice) {
    alert("The result is a tie!");
    return;
  }

  /* Pre-empt isolated rules to run our explicit rules
   * with a short circuit */
  const winner = rules.find(rule => rule(yourChoice,computerChoice));

  if (winner) {
    alert(`Your ${yourChoice} wins!`);
    return;
  }

  /* You're a loser if a rule matches where you are on the right */
  const loser = rules.find(rule => rule(computerChoice, yourChoice));

  if (loser) {
    alert(`You lose, ${computerChoice} wins ::sad face::`);
    return;
  }
}
