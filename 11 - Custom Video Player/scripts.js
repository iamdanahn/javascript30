/*Grab elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Functions */
function togglePlay() {
  if (video.paused) {
		video.play(); // videos have
	} else {
		video.pause();
	}

  // const method = video.paused ? "play" : "pause";
  // video[method]();
}

function updateButton() {
  console.log('inside update button fn')

  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}


/* Event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener('click', togglePlay);

