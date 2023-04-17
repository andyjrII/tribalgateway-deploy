//function to toggle the navigation bar

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

//end of function

//Function to control the display of the navbar on small screens
const showButton = document.querySelector("#menu-icon");
const myElement = document.querySelector(".navbar");

if (showButton && myElement) {
  showButton.addEventListener("click", () => {
    if (myElement.style.display === "block") {
      myElement.style.display = "none";
    } else {
      myElement.style.display = "block";
    }
  });
} else {
  console.error("Error: could not find one or more required elements.");
}

// function to hide or show officers option in the transport service page
const showOption = document.querySelector("#security-yes");
const hideOption = document.querySelector("#security-no");
const infoDiv = document.querySelector(".officers-box");

showOption.addEventListener("change", () => {
  if (showOption.checked) {
    infoDiv.style.display = "block";
  }
});

hideOption.addEventListener("change", () => {
  if (hideOption.checked) {
    infoDiv.style.display = "none";
  }
});

// Compute cart values

const totalStrong = document.querySelector("#total");
let total = 0,
  additionalCost = 0,
  transportation = 0,
  security = 0;

// to get value for additional cost
const severalStops = document.querySelector("#several-stops");
const noStops = document.querySelector("#no-stops");
let additionalSpan = document.querySelector("#additional-cost");

severalStops.addEventListener("change", () => {
  if (severalStops.checked) {
    additionalCost = parseInt(severalStops.value);
    additionalSpan.textContent = `$${additionalCost}`;
    total = additionalCost + transportation + security;
    totalStrong.textContent = `$${total}`;
  }
});

noStops.addEventListener("change", () => {
  if (noStops.checked) {
    additionalCost = parseInt(noStops.value);
    additionalSpan.textContent = `$${additionalCost}`;
    total = additionalCost + transportation + security;
    totalStrong.textContent = `$${total}`;
  }
});

// to get value for transportation
const driverService = document.querySelector(".driver-service");
let transportationSpan = document.querySelector("#transportation");

driverService.addEventListener("change", (event) => {
  transportation = parseInt(event.target.value);
  transportationSpan.textContent = `$${transportation}`;
  total = additionalCost + transportation + security;
  totalStrong.textContent = `$${total}`;
});

// to get value for security
const privateRadio = document.querySelector("#private");
const policeRadio = document.querySelector("#police");
const armedCheckbox = document.querySelector("#armed");
let securitySpan = document.querySelector("#security");
let private = 0,
  police = 0,
  armed = 0;

privateRadio.addEventListener("change", () => {
  if (privateRadio.checked) {
    armedCheckbox.removeAttribute("disabled");
    private = parseInt(privateRadio.value);
    police = 0;
    security = private + police + armed;
    securitySpan.textContent = `$${security}`;
    total = additionalCost + transportation + security;
    totalStrong.textContent = `$${total}`;
  }
});

policeRadio.addEventListener("change", () => {
  if (policeRadio.checked) {
    armedCheckbox.removeAttribute("disabled");
    police = parseInt(policeRadio.value);
    private = 0;
    security = private + police + armed;
    securitySpan.textContent = `$${security}`;
    total = additionalCost + transportation + security;
    totalStrong.textContent = `$${total}`;
  }
});

armedCheckbox.addEventListener("change", () => {
  if (armedCheckbox.checked) {
    armed = parseInt(armedCheckbox.value);
    security = private + police + armed;
    securitySpan.textContent = `$${security}`;
    total = additionalCost + transportation + security;
    totalStrong.textContent = `$${total}`;
  }
});

//Dropdown menu function
var imageLink = document.getElementById("image-link");
var dropdownMenu = document.getElementById("dropdown-menu");

imageLink.addEventListener("click", function(event) {
  event.preventDefault();
  dropdownMenu.classList.toggle("hidden");
});

// Hide the dropdown menu when a menu option is clicked
var options = dropdownMenu.getElementsByTagName("option");
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function() {
    dropdownMenu.classList.add("hidden");
  });
}
