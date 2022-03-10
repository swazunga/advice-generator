var adviceBtn = document.querySelector("#adviceBtn");

function showAdvice() {
  var adviceWords = document.querySelector("#adviceWords");
  var adviceNum = document.querySelector("#adviceNum");
  var apiUrl = "https://api.adviceslip.com/advice";
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        adviceWords.textContent = '"' + data.slip.advice + '"';
        adviceNum.textContent = "Advice # " + data.slip.id;
      });
    }
  });
}

adviceBtn.addEventListener("click", showAdvice);
