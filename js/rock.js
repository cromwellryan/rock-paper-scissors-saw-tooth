export class Rock {
  get name() {
    return "rock";
  }

  beats(computerChoice) {
    let results;

    if (computerChoice === "rock") {
      results = "The result is a tie!";
    } else if (computerChoice === "scissors") {
      results = "Your rock wins!";
    } else {
      results = "You lose, paper wins ::sad face::";
    }

    return results;
  }
}


