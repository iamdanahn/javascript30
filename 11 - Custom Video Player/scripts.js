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
	console.log("inside update button fn");

	const icon = this.paused ? "►" : "❚ ❚"; // 'this' is bound to video
	toggle.textContent = icon;
}

function skip() {
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);
	// parseFloat it because dataset.skip is a string
}

function handleRangeUpdate() {
	console.log(this.value);
	console.log(this.name); // volume or playbackRate

	video[this.name] = this.value;
}




/* Event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => {
	button.addEventListener("click", skip);
});
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
	range.addEventListener("mousemove", handleRangeUpdate)
);