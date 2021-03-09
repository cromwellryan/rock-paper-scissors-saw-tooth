export class Scissors {
  get name() {
    return "scissors";
  }

  beats(computerChoice) {
    let results;

    if (computerChoice === "scissors") {
      results = "The result is a tie!";
    } else if (computerChoice === "paper") {
      results = "Your scissors wins!";
    } else {
      results = "You lose, rock wins ::sad face::";
    }

    return results;
  }
}
