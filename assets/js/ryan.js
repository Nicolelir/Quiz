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