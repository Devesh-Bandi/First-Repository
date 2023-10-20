let convertBtnEl = document.getElementById("convertBtn");

convertBtnEl.addEventListener("click", function getSeconds() {
  let hoursInputEl = parseInt(document.getElementById("hoursInput").value);
  let minutesInputEl = parseInt(document.getElementById("minutesInput").value);
  let seconds = (hoursInputEl * 60 + minutesInputEl) * 60;

  let errMsgEl = document.getElementById("errorMsg");
  let showSeconds = document.getElementById("timeInSeconds");

  if (isNaN(hoursInputEl) || isNaN(minutesInputEl)) {
    errMsgEl.textContent = "please enter any value";
    showSeconds.textContent = "";
    errMsgEl.style.color = "#f7faf5";
  } else {
    errMsgEl.textContent = "";
    showSeconds.textContent = seconds;
    showSeconds.style.color = "#ffffff";
  }
});
