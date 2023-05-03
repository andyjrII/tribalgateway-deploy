// cart

var voa = 750;
var transportation = 0;
var vat = 15;
var subtotal = 0;
var discount = 75;
var total = 0;

// function to hide or show how many people are travelling
const showOption = document.querySelector("#others-yes");
const hideOption = document.querySelector("#others-no");
const howMany = document.querySelector("#others-number");

showOption.addEventListener("change", () => {
  if (showOption.checked) {
    howMany.style.display = "block";
  }
});

hideOption.addEventListener("change", () => {
  if (hideOption.checked) {
    howMany.style.display = "none";
  }
});

const airportHouse = document.querySelector("#airport-house");
const houseAirport = document.querySelector("#house-airport");
const relativeAirport = document.querySelector("#relative-airport");
const relativeHouse = document.querySelector("#relative-house");

let transportSpan = document.querySelector("#transport-span");
let subtotalStrong = document.querySelector("#subtotal-strong");
let totalStrong = document.querySelector("#total-strong");

let airportH = 0,
  houseA = 0,
  relativeA = 0,
  relativeH = 0;

airportHouse.addEventListener("change", () => {
  if (airportHouse.checked) {
    airportH = parseInt(airportHouse.value);
    transportation = airportH + houseA + relativeA + relativeH;
    transportSpan.textContent = `$${transportation}`;
    subtotal = voa + transportation + vat;
    subtotalStrong.textContent = `$${subtotal}`;
    total = subtotal - discount;
    totalStrong.textContent = `$${total}`;
  }

  if (!airportHouse.checked) {
    airportH = 0;
    transportation = airportH + houseA + relativeA + relativeH;
    transportSpan.textContent = `$${transportation}`;
    subtotal = voa + transportation + vat;
    subtotalStrong.textContent = `$${subtotal}`;
    total = subtotal - discount;
    totalStrong.textContent = `$${total}`;
  }
});

houseAirport.addEventListener("change", () => {
  if (houseAirport.checked) {
    houseA = parseInt(houseAirport.value);
    transportation = airportH + houseA + relativeA + relativeH;
    transportSpan.textContent = `$${transportation}`;
    subtotal = voa + transportation + vat;
    subtotalStrong.textContent = `$${subtotal}`;
    total = subtotal - discount;
    totalStrong.textContent = `$${total}`;
  }

  if (!houseAirport.checked) {
    houseA = 0;
    transportation = airportH + houseA + relativeA + relativeH;
    transportSpan.textContent = `$${transportation}`;
    subtotal = voa + transportation + vat;
    subtotalStrong.textContent = `$${subtotal}`;
    total = subtotal - discount;
    totalStrong.textContent = `$${total}`;
  }
});

relativeAirport.addEventListener("change", () => {
  if (relativeAirport.checked) {
    relativeA = parseInt(relativeAirport.value);
    transportation = airportH + houseA + relativeA + relativeH;
    transportSpan.textContent = `$${transportation}`;
    subtotal = voa + transportation + vat;
    subtotalStrong.textContent = `$${subtotal}`;
    total = subtotal - discount;
    totalStrong.textContent = `$${total}`;
  }

  if (!relativeAirport.checked) {
    relativeA = 0;
    transportation = airportH + houseA + relativeA + relativeH;
    transportSpan.textContent = `$${transportation}`;
    subtotal = voa + transportation + vat;
    subtotalStrong.textContent = `$${subtotal}`;
    total = subtotal - discount;
    totalStrong.textContent = `$${total}`;
  }
});

relativeHouse.addEventListener("change", () => {
  if (relativeHouse.checked) {
    relativeH = parseInt(relativeHouse.value);
    transportation = airportH + houseA + relativeA + relativeH;
    transportSpan.textContent = `$${transportation}`;
    subtotal = voa + transportation + vat;
    subtotalStrong.textContent = `$${subtotal}`;
    total = subtotal - discount;
    totalStrong.textContent = `$${total}`;
  }

  if (!relativeHouse.checked) {
    relativeH = 0;
    transportation = airportH + houseA + relativeA + relativeH;
    transportSpan.textContent = `$${transportation}`;
    subtotal = voa + transportation + vat;
    subtotalStrong.textContent = `$${subtotal}`;
    total = subtotal - discount;
    totalStrong.textContent = `$${total}`;
  }
});
