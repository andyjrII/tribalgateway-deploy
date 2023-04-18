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

  if (!armedCheckbox.checked && armed != 0) {
    armed = parseInt(armedCheckbox.value);
    security = security - armed;
    securitySpan.textContent = `$${security}`;
    total = additionalCost + transportation + security;
    totalStrong.textContent = `$${total}`;
  }
});
