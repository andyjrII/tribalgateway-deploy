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

//Dropdown menu function
var imageLink = document.getElementById("image-link");
var dropdownMenu = document.getElementById("dropdown-menu");

imageLink.addEventListener("click", function (event) {
  event.preventDefault();
  dropdownMenu.classList.toggle("hidden");
});

// Hide the dropdown menu when a menu option is clicked
var options = dropdownMenu.getElementsByTagName("option");
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    dropdownMenu.classList.add("hidden");
  });
}
