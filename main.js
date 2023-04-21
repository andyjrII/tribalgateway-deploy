
/*Scroll RReaveal function*/
const sr = ScrollReveal({
  origin: 'bottom', // animation direction
  distance: '30px', // distance to animate
  duration: 1500, // animation duration
  delay: 500, // delay before animation starts
  easing: 'cubic-bezier(0.5, 0, 0, 1)', // animation easing
  reset: true // reset animation on scroll up
});

sr.reveal('.sr', { // target elements with class "sr"
  interval: 200, // interval between animations
  mobile: true, // enable animation on mobile devices
  desktop: true, // enable animation on desktop devices
  scale: 1, // scale factor for the element
  rotate: { x: 0, y: 0, z: 0 }, // rotation axis and angle
  opacity: 0, // initial opacity of the element
  cleanup: true // remove styles and animation data after animation completes
});


/*Fuction to mute the video*/
const video = document.getElementById("video");
const muteBtn = document.getElementById("mute-btn");

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteBtn.textContent = "Mute";
  } else {
    video.muted = true;
    muteBtn.textContent = "Unmute";
  }
}

