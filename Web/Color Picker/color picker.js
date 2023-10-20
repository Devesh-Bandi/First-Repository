let containerElement = document.getElementById("colorPickerContainer");
let selectedColor = document.getElementById("selectedColorHexCode");

function grey() {
  containerElement.style.backgroundColor = "#e0e0e0";
  selectedColor.textContent = "#e0e0e0";
}

function green() {
  containerElement.style.backgroundColor = "#6fcf97";
  selectedColor.textContent = "#6fcf97";
}

function blue() {
  containerElement.style.backgroundColor = "#56ccf2";
  selectedColor.textContent = "#56ccf2";
}

function purple() {
  containerElement.style.backgroundColor = "#bb6bd9";
  selectedColor.textContent = "#bb6bd9";
}
