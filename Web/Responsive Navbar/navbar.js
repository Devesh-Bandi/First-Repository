let menuIcon = document.getElementById("menuIcon");
let menuX = document.getElementById("menuX");
let anchor = document.getElementsByClassName("anchor");
let huh = document.getElementById("huh");

menuIcon.addEventListener("click", function () {
  menuIcon.style.display = "none";
  menuX.style.display = "block";
  for (let each in anchor) {
    anchor[each].style.display = "block";
  }
  huh.classList.toggle("anchorNav");
});

menuX.addEventListener("click", function () {
  menuIcon.style.display = "block";
  menuX.style.display = "none";
  for (let each in anchor) {
    anchor[each].style.display = "none";
  }
  huh.classList.toggle("anchorNav");
});