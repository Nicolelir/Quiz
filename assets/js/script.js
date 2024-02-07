
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

//random function
function runGame(gameType) {
	userChoice = gameType;
	computerChoice = Math.floor(Math.random() * 5);
	switch (computerChoice) {
		case 0: computerChoice = "rock";
			break;
		case 1: computerChoice = "paper";
			break;
		case 2: computerChoice = "scissors";
			break;
		case 3: computerChoice = "lizard";
			break;
		case 4: computerChoice = "spock";
			break;
	}

	var result = compare(computerChoice).toUpperCase();

	document.querySelector(".result").innerHTML = "<h3>User/Computer:</h3><p>User: " + userChoice.toUpperCase() +
		"<br>" + "Computer: " + computerChoice.toUpperCase() + "</p>" + "<p>" + result + "</p>";
}


//compare user/computer choises
function compare(comChoice) {
	if (userChoice === comChoice) {
    return "";
	} else if (userChoice === "rock") {
		if (comChoice === "paper") {
      return "";
		} else if (comChoice === "scissors") {
      return "";
		} else if (comChoice === "lizard") {
			return "";
		} else {
			return "";
		}
	} else if (userChoice === "paper") {
		if (comChoice === "rock") {
			return "";
		} else if (comChoice === "scissors") {
			return "";
		} else if (comChoice === "lizard") {
			return "";
		} else {
			return "";
		}
	}else if (userChoice === "scissors") {
		if (comChoice === "rock") {
			return "";
		} else if (comChoice === "paper") {
			return "";
		} else if (comChoice === "lizard") {
			return "";
		} else {
			return "";
		}
	} else if (userChoice === "lizard") {
		if (comChoice === "rock") {
			return "";
		} else if (comChoice === "paper") {
			return "";
		} else if (comChoice === "scissors") {
			return "";
		} else {
			return "";
		}
	} else if (userChoice === "spock") {
		if (comChoice === "rock") {
			return "";
		} else if (comChoice === "paper") {
			return "";
		} else if (comChoice === "scissors") {
			return "";
		} else {
			return "";
		}
	}
};

// Testing Function 

function countToThree() {
	for (let i = 1; i <= 3; i++) {
	  console.log(i);
	}
  }
  
  countToThree();