  // Ryan's Code Below 

  // Code for instructions overlay
  document.addEventListener("DOMContentLoaded", function() {
	const openButton = document.getElementById("openButton");
	const overlay = document.getElementById("overlay");

	openButton.addEventListener("click", function() {
	  overlay.style.display = "block";
	  setTimeout(() => {
		overlay.style.opacity = "1";
	  }, 10);
	});

	overlay.addEventListener("click", function() {
	  overlay.style.opacity = "0";
	  setTimeout(() => {
		overlay.style.display = "none";
	  }, 300); // Adjust the duration to match the transition duration
	});
  });

  //Countdown Timer Reference 

  function countdown() {
	var seconds = 60; // Number of seconds to count down

	var countdownTimer = setInterval(function() {
	  seconds--;

	  document.getElementById("countdown").innerHTML = seconds + "s";

	  if (seconds <= 0) {
		clearInterval(countdownTimer);
		document.getElementById("countdown").innerHTML = "the next paragraph.";
		document.getElementById("bazinga").innerHTML = "BAZINGA!";
	  }
	}, 100); // 1000 makes this a 60s
  }

  function bazingaText() {
	document.getElementById("bazinga").innerHTML = "BAZINGA!";
}

  // You can use this to call a different function once
  // the timer expires. 
  function whateverFunction(){
	console.log("placeholder");
  }