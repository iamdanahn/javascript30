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

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	console.log(e);
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	// offset is x distance of the element its in
	video.currentTime = scrubTime;
} 

/* Event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
// 'timeupdate' simialr to 'progress'

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));


toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => {
	button.addEventListener("click", skip);
});

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
	range.addEventListener("mousemove", handleRangeUpdate)
);

