let overallResult;
let roundsPlayed = 0;
const maxRounds = 3000;
let playerAction;
let computerAction;
let playerTally = 0;
let computerTally = 0;
let round = 0;

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "resetButton") {
                resetGame();
            } else if (this.getAttribute("data-type") === "playAgainButton") {
                playAgain();
            } else {
                if (roundsPlayed < maxRounds) {
                    let gameType = this.getAttribute("data-type");
                    runGame(gameType);
                    roundsPlayed++;
                }

                if (roundsPlayed === 1) {
                    countdown();
                }
            }
        });
    }
});


function runGame(gameType) {
    if (roundsPlayed < maxRounds) {
        playerAction = gameType.toLowerCase();
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

        var result = compare(playerAction, computerAction).toLowerCase();

        document.querySelector(".result").innerHTML = "<h3>User/Computer:</h3><p>User: " + playerAction.toUpperCase() +
            "<br>" + "Computer: " + computerAction.toUpperCase() + "</p>" + "<p>" + result + "</p>";

        resultsTally(result.toLowerCase());
    }

    if (roundsPlayed === maxRounds) {
        displayOverallWinner();
    }
    if (roundsPlayed === 0) {
        countdown();
    }

    return result; // Return the result for updating scores
}

function compare(playerAction, computerAction) {
    if (playerAction === computerAction) {
        return "draw";
    } else if (
        (playerAction === "rock" && computerAction === "scissors") ||
        (playerAction === "paper" && computerAction === "rock") ||
        (playerAction === "scissors" && computerAction === "paper") ||
        (playerAction === "lizard" && computerAction === "spock") ||
        (playerAction === "spock" && computerAction === "scissors")
    ) {
        return "win";
    } else {
        return "lose";
    }
}
let countdownTimer; // Declare countdownTimer as a global variable

function countdown() {
    var seconds = 30; // Number of seconds to count down

    clearInterval(countdownTimer); // Clear any existing countdown timer
    countdownTimer = setInterval(function () {
        seconds--;

        document.getElementById("countdown").innerHTML = seconds + "s";

        if (seconds <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown").innerHTML = "Time's up!";
            if (roundsPlayed < maxRounds) {
                displayOverallWinner();
            }
        }
    }, 1000); // 1000 makes this a 60s

    return countdownTimer; // Return the interval ID
}
function resultsTally(winner) {
    round++;
    if (winner === "draw") {
        // do nothing for a draw
    } else if (winner === "win") {
        playerTally++;
    } else if (winner === "lose") {
        computerTally++;
    }
    updateScores();
}

function updateScores() {
    // Display the updated scores
    document.getElementById("playerTally").innerHTML = "Player Score:" + playerTally;
    document.getElementById("computerTally").innerHTML = "Computer Score:" + computerTally;
}

function resetGame() {
    roundsPlayed = 0;
    playerTally = 0;
    computerTally = 0;
    round = 0;

    document.querySelector(".result").innerHTML = "";
    document.querySelector(".overall-result").innerHTML = "";
    updateScores();

    // Clear previous countdown timer only if it's running
    if (countdownTimer) {
        clearInterval(countdownTimer);
    }

    // Reset the countdown timer immediately to 60s
    document.getElementById("countdown").innerHTML = "30s";
    countdownTimer = countdown(); // Start the timer again and store its reference

    // Reset computer's tally to 0
    document.getElementById("computerTally").innerHTML = "Computer Score: 0";
}

// Additional code for resetting UI elements immediately on page load
resetGame();

// Clear result and overall result
document.querySelector(".result").innerHTML = "";
document.querySelector(".overall-result").innerHTML = "";

// Reset tallies
document.getElementById("playerTally").innerHTML = "0";
document.getElementById("computerTally").innerHTML = "0";
  

  function displayOverallWinner() {
    console.log("Computer Tally:", computerTally);
    console.log("Player Tally:", playerTally);
    if (computerTally > playerTally) {
        overallResult = "Bazinga, the computer won the game!";
    } else if (computerTally === playerTally) {
        overallResult = "It's a draw!";
    } else {
        overallResult = "Eureka, congrats, you won the game!";
    }

    document.querySelector(".overall-result").innerHTML = "<h2>Overall Result:</h2><p>" + overallResult + "</p>";

    function playAgain() {
        enableButtons();
        resetGame();
    }  
    
}
