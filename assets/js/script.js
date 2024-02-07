
// --NICOLE--

//random function
function runGame(gameType) {
	playerAction = gameType;
	computerAction = Math.floor(Math.random() * 5);
	switch (computerAction) {
		case 0: computerAction = "rock";
			break;
		case 1: computerAction = "paper";
			break;
		case 2: computerAction = "scissors";
			break;
		case 3: computerAction = "lizard";
			break;
		case 4: computerAction = "spock";
			break;
	}

	var result = compare(computerAction).toUpperCase();

	document.querySelector(".result").innerHTML = "<h3>User/Computer:</h3><p>User: " + playerAction.toUpperCase() +
		"<br>" + "Computer: " + computerAction.toUpperCase() + "</p>" + "<p>" + result + "</p>";
}

// 3 rounds function
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
	let roundsPlayed = 0;
    const maxRounds = 3;

	for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                if (roundsPlayed < maxRounds) {
                    let gameType = this.getAttribute("data-type");
                    runGame(gameType);
                    roundsPlayed++;
                }
                
                if (roundsPlayed === maxRounds) { // Add here function after 3 rounds.... 
                   
                }
            }
        });
    }
});

// -----Katie WIP----
// Check winner of round
var playerAction;
var computerAction;

function compare(computerAction) {
	if (playerAction === computerAction) {
    return "Snap! It's a draw!";
	} else if (playerAction === "rock") {
		if (computerAction === "paper") {
      return "Bazinga, you lost!";
		} else if (computerAction === "scissors") {
      return "Eureka, you won!";
		} else if (computerAction === "lizard") {
			return "Eureka, you won!";
		} else {
			return "Bazinga, you lost!";
		}
	} else if (playerAction === "paper") {
		if (computerAction === "rock") {
			return "Eureka, you won!";
		} else if (computerAction === "scissors") {
			return "Bazinga, you lost!";
		} else if (computerAction === "lizard") {
			return "Bazinga, you lost!";
		} else {
			return "Eureka, you won!";
		}
	}else if (playerAction === "scissors") {
		if (computerAction === "rock") {
			return "Bazinga, you lost!";
		} else if (computerAction === "paper") {
			return "Eureka, you won!";
		} else if (computerAction === "lizard") {
			return "Eureka, you won!";
		} else {
			return "Bazinga, you lost!";
		}
	} else if (playerAction === "lizard") {
		if (computerAction === "rock") {
			return "Bazinga, you lost!";
		} else if (computerAction === "paper") {
			return "Eureka, you won!";
		} else if (computerAction === "scissors") {
			return "Bazinga, you lost!";
		} else {
			return "Eureka, you won!";
		}
	} else if (playerAction === "spock") {
		if (computerAction === "rock") {
			return "Eureka, you won!";
		} else if (computerAction === "paper") {
			return "Bazinga, you lost!";
		} else if (computerAction === "scissors") {
			return "Eureka, you won!";
		} else {
			return "Bazinga, you lost!";
		}
	}
};

// Check winner of game

function winner() {
	if (computerTally > playerTally) {
		return "Bazinga, the computer won the game!";
	} else if (computerTally === playerTally) {
		return "It's a draw!"
	} else {
		return "Eureka, congrats, you won the game!";
	}
}



