const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});

// let modeBtn = document.getElementById("dark-light");

// modeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark");
// });

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add("loading-none");
});

//

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
